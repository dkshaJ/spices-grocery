import multer from "multer";

const storage = multer.diskStorage({
  //multer.diskStorage is used to store the files on disk
  destination: (req, file, callback) => {
    callback(null, "./public");
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage });
