const express = require("express");

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updatetBootcamp,
  deleteBootcamp,
  getBootcampsInRadius
} = require("../controllers/bootcamp");

//Include other resource routers
const courseRouter = require("./courses");

const router = express.Router();

//Re-route into other resources routers
router.use("/:bootcampId/courses", courseRouter);

//-----const router = express("router");

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);
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
