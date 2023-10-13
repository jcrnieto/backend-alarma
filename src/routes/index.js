const { Router } = require("express");

const router = Router();

router.get("/", (req, res)=>{
    res.send('primera ruta de proyecto')
});

module.exports = router;