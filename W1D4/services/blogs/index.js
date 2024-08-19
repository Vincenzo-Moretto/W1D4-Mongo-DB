import { Router } from "express"
import Blog from "./model.js"
import q2m from "query-to-mongo"
export const blogRoute = Router()

blogRoute.get("/", async (req, res, next) => {
  try {
    //http://localhost:3001/blogs?title=/tech/i 
    
    let {criteria} = q2m(req.query)
    console.log(criteria);
    let blogs = await Blog.find(criteria)
    res.send(blogs)
  } catch (error) {
    next(error)
  }
})

blogRoute.get("/:id", async (req, res, next) => {
  try {
    let blog = await Blog.findById(req.params.id)
    res.send(blog)
  } catch (error) {
    next(error)
  }
})

blogRoute.put("/:id", async (req, res, next) => {
  try {
    let blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.send(blog)
  } catch (error) {
    next(error)
  }
})

blogRoute.delete("/:id", async (req, res, next) => {
  try {
    await Blog.deleteOne({
      _id: req.params.id,
    })
    res.send(204)
  } catch (error) {
    next(error)
  }
})

blogRoute.post("/", async (req, res, next) => {
  try {
    let blog = await Blog.create(req.body)
    res.send(blog)
  } catch (error) {
    next(error)
  }
})
