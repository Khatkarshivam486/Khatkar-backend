import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs from "fs"

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Fs file linking & Unlinking
const uploadOnCloudinary = async (localfilePath) => {
    try {
        if (!localfilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localfilePath, {public_id: "unknown", resource_type: "auto"},function(error, result){
            if(!err){
                console.log(result);
            }
            throw err
        })
        console.log("file uploading ", response.url); // we gets pulic url here 
        return response;
    } catch (error) {
        fs.unlinkSync(localfilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export { uploadOnCloudinary}