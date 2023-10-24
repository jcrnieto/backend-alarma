const { Router } = require("express");
const { healthCheck } = require ("../controllers/healthcheck");
const { addProducts } = require ("../controllers/addProducts.controllers");
const { getProducts } = require("../controllers/getProducts.controllers");
const { deleteProducts } = require("../controllers/deleteProducts.controllers");
const { updateProduct } = require("../controllers/updateProduct");
const { uploadImage } = require ("../services/firebase");
const { getIdProduct } = require ("../controllers/getIdProduct");

const router = Router();

const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});


router.get("/healthCheck", healthCheck);

router.post("/addProduct", upload.single("image"), uploadImage,addProducts);

router.get("/getProducts", getProducts);

router.delete("/deleteProduct/:id", deleteProducts);

router.put('/updateProduct/:id', updateProduct);

router.get('/getIdProduct/:id', getIdProduct);



module.exports = router;