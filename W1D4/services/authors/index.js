import { Router } from "express"
import Author from "./model.js"
import Blog from "../blogs/model.js"
export const authorRoute = Router()

authorRoute.get("/", async (req, res, next) => {
  try {
    let authors = await Author.find()
    res.send(authors)
  } catch (error) {
    next(error)
  }
})

authorRoute.get("/:id", async (req, res, next) => {
  try {
    let author = await Author.findById(req.params.id)
    res.send(author)
  } catch (error) {
    next(error)
  }
})

authorRoute.get("/:id/blogs", async (req, res, next) => {
  try {
    let author = await Blog.find({
      author: req.params.id,
    }).populate({ path: "author", select: ["name", "lastName", "avatar"] })
    res.send(author)
  } catch (error) {
    next(error)
  }
})

authorRoute.put("/:id", async (req, res, next) => {
  try {
    let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.send(author)
  } catch (error) {
    next(error)
  }
})

authorRoute.delete("/:id", async (req, res, next) => {
  try {
    await Author.deleteOne({
      _id: req.params.id,
    })
    res.send(204)
  } catch (error) {
    next(error)
  }
})

authorRoute.post("/", async (req, res, next) => {
  try {
    let author = await Author.create(req.body)
    res.send(author)
  } catch (error) {
    next(error)
  }
})
