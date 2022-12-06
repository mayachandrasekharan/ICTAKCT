const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/docx' ){
            cb(null, true);
        }else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter});

// const upload = multer({storage: storage});

module.exports = {upload}