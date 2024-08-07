const express = require("express")
const router = express.Router()
const multer = require("multer")
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")
const upload = multer()

const controller = require("../../controllers/admin/account.controller")
const validate = require("../../validates/admin/account.validate")

router.get("/", controller.index)

router.get("/create", controller.create)

router.post(
  "/create",
  upload.single("avatar"),
  uploadCloud.uploadSingle,
  validate.createPost,
  controller.createPost
)

router.patch("/change-status/:status/:id", controller.changeStatus)

router.delete("/delete-item/:id", controller.deleteItem)

router.get("/edit/:id", controller.edit)

router.patch(
  "/edit/:id",
  upload.single("avatar"),
  uploadCloud.uploadSingle,
  validate.editPatch,
  controller.editPatch
)

module.exports = router
