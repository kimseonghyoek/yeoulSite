const express = require("express")
const router = express.Router();

router.get("/", async(req, res) => {
  try {
    await res.render('index')
  } catch (err) {
    console.log("===== ERROR =====")
    console.log(err)
  }
})

module.exports = router;