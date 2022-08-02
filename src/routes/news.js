const express = require('express');
const router = express.Router();
const newsControllor = require("../app/controllors/NewsControllor");


router.use("/:slug",newsControllor.show);
router.use("/",newsControllor.index);

module.exports = router;
