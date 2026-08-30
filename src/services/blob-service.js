"use strict";

const cloudinary = require("cloudinary").v2;
const config = require("../config");

cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret
});

exports.uploadImage = async (base64Image) => {
    const response = await cloudinary.uploader.upload(base64Image, {
        folder: "products"
    });
    return response.secure_url;
};