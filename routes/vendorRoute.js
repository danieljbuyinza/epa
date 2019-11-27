// Requiring the packages
const express =  require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
// const multer = require('multer');


// Set Storage Engine
/* const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})

// Init Upload
const upload = multer({ 
    storage: storage,
    limits:{fileSize: 10000000}
})
 */
// Upload Image
router.get('/', (req, res)=> {
    res.render('vendor')
});

/* router.post('/', upload.single('myImage'),function(req, res, next) {
    const file = req.file //fetches the file
    if (!file){
        const error = new Error("Please upload File")
        console.log(file);
        error.httpStatusCode = 400;
        return next(error);    
    }
    res.render('uploads', {image: req.file.originalname})
}); */

module.exports = router;