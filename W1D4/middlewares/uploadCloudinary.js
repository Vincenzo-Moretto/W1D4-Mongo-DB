import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import "dotenv/config";
const uploadCloudinary = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "epicode",
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  }),
});
/* console.log(process.env.CLOUDINARY_API_KEY); */
export default uploadCloudinary;
