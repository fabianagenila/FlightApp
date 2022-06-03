module.exports = app => {
    const flights = require("../controllers/FlightController.js")
    
    var router = require("express").Router()

    router.post("/", flights.create)
    router.get("/", flights.findAll)
    router.get("/:id", flights.findOne)
    router.delete("/:id", flights.delete)
    router.delete("/", flights.deleteAll)

    app.use('/flights', router)

  }