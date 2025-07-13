import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

export default upload;

// This middleware handles file uploads using multer, storing files in memory and applying size and type restrictions.
// It can be used in routes to handle file uploads, such as product images in a retailer dashboard.
// The `multer` library is used to handle multipart/form-data, which is commonly used for file uploads in web applications.
// The `upload` middleware is configured to store files in memory, limit file size to 5MB, and only allow image files.
// It can be applied to routes that require file uploads, such as creating or updating products with images.
