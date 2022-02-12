const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("../Modals/userModal")
const isAuth = require("../Middelware/authCeck")
const isLogedin = require("../Middelware/logedinCheck")
// import controllers
const { RegisterControllerPost, RegisterControllerGet } = require("../Controller/registerController")
const { LoginControllerPost, LoginControllerGet, logoutGet } = require("../Controller/longinController")
// Register Routes
router.get("/register", isLogedin, RegisterControllerGet)
router.post("/register", isLogedin, RegisterControllerPost)
// Login Routes 
router.get("/login", isLogedin, LoginControllerGet)
router.post("/login", isLogedin, LoginControllerPost)
// logout Routes 
router.get("/logout", isAuth, logoutGet)

module.exports = router;