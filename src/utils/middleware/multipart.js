const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../../config/config');

const { space } = config;

// Save file in server app
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    const format = file.mimetype.split('/');
    cb(null, `${file.fieldname}-${Date.now()}.${format[1]}`);
  },
});

const uploadToServer = multer({ storage }).fields([{ name: 'photos' }, { name: 'videos' }, { name: 'pdfs', maxCount: 1 }, { name: 'video3d', maxCount: 1 }]);

// Save file in digitalocean space
const spacesEndpoint = new aws.Endpoint(space.endpoint);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: space.accessKey,
  secretAccessKey: space.secretKey,
});
const storageS3 = multerS3({
  s3,
  bucket: 'doapps-server-storage',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadToSpace = multer({ storage: storageS3 }).array('file', 1);

module.exports = {
  uploadToServer,
};
