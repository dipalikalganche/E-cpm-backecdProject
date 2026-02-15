import multer from "multer";

// store in memory as buffer (blob)
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
