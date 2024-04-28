const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./Routes/userRoutes')
const authRoutes = require('./Routes/authRoutes')
const taskRoutes = require('./Routes/taskRoutes')
const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
dotenv.config();


const PORT = process.env.PORT || 5000

// Connecting to the database and listening to the server
mongoose.connect("mongodb+srv://Hamza:alialibham@cluster01.njpdmew.mongodb.net/TodoApp")
.then(() => {
    app.listen(PORT, () => console.log("Listening on PORT " + PORT))
})
.catch(() => {
    console.log("Unable to connect to database")
})

app.get('/',  (req, res) => {
    res.json({message: "Welcome!"})
})

app.use('/user', userRoutes)

app.use('/auth', authRoutes);

app.use('/task', taskRoutes)