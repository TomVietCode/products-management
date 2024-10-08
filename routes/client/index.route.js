const homeRoutes = require("./home.route")
const productRoutes = require("./products.route")
const searchRoutes = require("./search.route")
const cartRoutes = require("./cart.route")
const checkoutRoutes = require("./checkout.route")
const userRoutes = require("./user.route")
const chatRoutes = require("./chat.route")

const categoryMiddleware = require("../../middlewares/client/category.middleware")
const cartMiddleware = require("../../middlewares/client/cart.middelware")
const userMiddleware = require("../../middlewares/client/user.middleware")
const settingMiddleware = require("../../middlewares/admin/setting.middlewares")

module.exports = (app) => {
  app.use(categoryMiddleware.layoutCategory)
  app.use(cartMiddleware.cart)
  app.use(userMiddleware.userInfo)
  app.use(settingMiddleware.setting)

  app.use("/", homeRoutes)

  app.use("/products", productRoutes)

  app.use("/search", searchRoutes)

  app.use("/cart", cartRoutes)

  app.use("/checkout", checkoutRoutes)

  app.use("/user", userRoutes)

  app.use("/chat", userMiddleware.requireAuth, chatRoutes)
}
