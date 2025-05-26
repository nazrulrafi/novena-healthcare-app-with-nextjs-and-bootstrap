// pages/api/upload.js

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
    // Make sure the request method is POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Extract file (base64) from the request body
    const { file } = req.body;

    if (!file) {
        return res.status(400).json({ error: 'No file provided' });
    }

    try {
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(file, {
            folder: 'nextjs-course-mutations', // Optional: Folder name for organization in Cloudinary
        });

        // Send back the secure URL of the uploaded image
        return res.status(200).json({ url: result.secure_url });
    } catch (err) {
        console.error('Cloudinary upload error:', err);
        return res.status(500).json({ error: 'Upload failed' });
    }
}
