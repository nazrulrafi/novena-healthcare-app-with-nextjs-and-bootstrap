import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return new Response(JSON.stringify({ error: 'No file uploaded' }), {
                status: 400,
            });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const mime = file.type;
        const base64 = buffer.toString('base64');
        const dataUri = `data:${mime};base64,${base64}`;

        const uploadResult = await cloudinary.uploader.upload(dataUri, {
            folder: 'nextjs-course-mutations',
        });

        return Response.json({ url: uploadResult.secure_url });
    } catch (err) {
        console.error('Upload error:', err);
        return new Response(JSON.stringify({ error: 'Upload failed' }), {
            status: 500,
        });
    }
}
