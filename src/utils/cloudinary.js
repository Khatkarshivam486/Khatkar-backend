import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import { ApiResponse } from "./ApiResponse";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {resource_type: "auto", asset_folder: "videoTube"})

        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath);
        }

        // console.log("uploaded on cloudinary", response.url); 
        
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath)

        return null;
    }
}

const destroyImage = async (publicId) => {
    try {
        if(!publicId) return null

        cloudinary.uploader.destroy(
            publicId,
        )

        return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Image deleted success")
        )
    } catch (error) {
        throw new ApiError(501, error?.message)
    }
} 


export { uploadOnCloudinary, destroyImage }