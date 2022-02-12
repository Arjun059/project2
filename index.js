const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const connectDB = require("./configDB")
const isAuth = require("./Middelware/authCeck")
const isAdmin = require("./Middelware/adminAuth")
// dotenv 
require("dotenv").config({})
// db connection
connectDB(process.env.DB_URI)
// express init
const app = express()
// body parser and stactic folder
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use(session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))
// import routes
const userRoutes = require("./Routes/userRoutes")
const adminRoutes = require("./Routes/adminRoutes")
// Routes 
app.use("/api/v1/admin/", isAuth, isAdmin, adminRoutes)
app.use("/api/v1/user/", userRoutes)


// server listing at 
const PORT = process.env.PORT || 8080 
app.listen(PORT, () => console.log(`server running http://localhost:${PORT}`))