global.SALT_KEY = process.env.SALT_KEY || 'f5b9a580-23a0-466f-8117-05a799253671';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>!<br/>Obrigado por se cadastrar em nossa loja!';
global.EMAIL = process.env.EMAIL || 'miguelucuepandi07@gmail.com';

module.exports = {
    connectionString: process.env.CONNECTION_STRING,
    sendgridKey: process.env.SENDGRID_KEY,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
};