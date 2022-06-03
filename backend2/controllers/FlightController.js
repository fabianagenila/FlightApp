const db = require("../models")
const Flights = db.flights
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
    const flight = {
        airplane: req.body.airplane,
        arrivalAirportInitial: req.body.arrivalAirportInitial,
        arrivalAirportName: req.body.arrivalAirportName,
        arrivalAirportCity: req.body.arrivalAirportCity,
        arrivalDate: req.body.arrivalDate,
        arrivalHour: req.body.arrivalHour,
        departureAirportInitial: req.body.departureAirportInitial,
        departureAirportName: req.body.departureAirportName,
        departureAirportCity: req.body.departureAirportCity,
        departureDate: req.body.departureDate,
        departureHour: req.body.departureHour,
        airplane: req.body.airplane,
        pilot: req.body.pilot,
        flightStatus: req.body.flightStatus
    }

    Flights.create(flight)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        })
      })
  }

exports.findAll = (req, res) => {
    Flights.findAll()
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Cannot show all flights. Maybe an error occured.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'An error occured while retrieving data'
            })
        })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Flights.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find a flights with id: ${id}.`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving a flight with id=" + id
      })
    })
}


exports.update = (req, res) => {

  const id = req.params.id

  Flights.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "A flight was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update a flight with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating a flight with id=" + id
      })
    })
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

  const id = req.params.id

  Flights.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "A flight was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete a flight with id=${id}. Maybe it was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete a flight with id=" + id
      })
    })
}


exports.deleteAll = (req, res) => {

    Flights.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} flights were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all flights."
      })
    })
}
