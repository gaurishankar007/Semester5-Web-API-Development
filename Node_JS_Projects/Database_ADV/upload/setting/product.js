const multer = require("multer");

const storageNavigation = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./upload/product");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+file.originalname);
    }
});

// Filter - only accepting valid file - png, jpeg, mp4, mkv
const filter = function(req, file, cb) {
    if(file.mimetype == "image/png" || file.mimetype=="image/jpeg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storageNavigation,
    fileFilter: filter
});

module.exports = upload;