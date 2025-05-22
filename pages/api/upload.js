// pages/api/upload.js
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ message: 'Error parsing form data' });
    }

    console.log('FILES:', files);

    const file = files.file?.[0];

    if (!file || !file.filepath) {
      return res.status(400).json({ message: 'No file uploaded or invalid structure' });
    }

    try {
      const result = await new Promise((resolve, reject) => {
        const stream = fs.createReadStream(file.filepath);
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: 'image' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.pipe(uploadStream);
      });

      return res.status(200).json(result);
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return res.status(500).json({ message: 'Upload failed', error: error.message });
    }
  });
}
