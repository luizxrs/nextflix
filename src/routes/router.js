const router = require("express").Router();

const servicesRouter = require("./user")

router.use("/", servicesRouter)

module.exports = router;