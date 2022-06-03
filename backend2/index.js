const express = require("express")
const cors = require("cors")
const app = express()

require('dotenv').config()

const db = require("./models")
db.sequelize.sync()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." })
})

require("./routes/FlightsRoutes")(app)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})