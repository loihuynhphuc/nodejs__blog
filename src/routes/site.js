const express = require('express');
const router = express.Router();
const siteControllor = require("../app/controllors/site.controllors");

router.use("/search",siteControllor.search);
router.use("/",siteControllor.index);

module.exports = router;