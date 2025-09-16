// import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodControllers.js';
// import multer from 'multer';
// const foodRouter = express.Router();

// //Image Storage Engine (Saving Image to uploads folder & rename it)

// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         return cb(null,`${Date.now()}${file.originalname}`);
//     }
// })

// const upload = multer({ storage: storage})

// foodRouter.get("/list",listFood);
// foodRouter.post("/add",upload.single('image'),addFood);
// foodRouter.post("/remove",removeFood);

// export default foodRouter;

import express from 'express';
import multer from 'multer';


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), addFood);
router.get('/list', listFood);
router.post('/remove', removeFood);

export default router;