const User = require("../../models/user.model")

module.exports.requiredFields = async (req, res, next) => {
  if (!req.body.fullName) {
    req.flash("error", "Vui lòng điền họ tên!")
    res.redirect("back")
    return
  }
  if (!req.body.email) {
    req.flash("error", "Vui lòng điền email!")
    res.redirect("back")
    return
  }
  if (!req.body.password) {
    req.flash("error", "Vui lòng nhập mật khẩu!")
    res.redirect("back")
    return
  }

  if (req.body.password.length < 6) {
    req.flash("error", "Mật khẩu phải nhiều hơn 6 kí tự")
    res.redirect("back")
    return
  }

  const existEmail = await User.findOne({
    email: req.body.email,
  })

  if (existEmail) {
    req.flash("error", `Email ${req.body.email} đã tồn tại`)
    res.redirect("back")
    return
  }
  next()
}

