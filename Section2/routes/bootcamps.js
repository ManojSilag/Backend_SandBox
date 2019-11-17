const express = require("express");

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updatetBootcamp,
  deleteBootcamp
} = require("../controllers/bootcamp");

const router = express("router");

router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updatetBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
