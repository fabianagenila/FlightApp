module.exports = (sequelize, Sequelize) => {

    const Flights = sequelize.define("flight", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        arrivalAirportInitial: {
            type: Sequelize.STRING
        },
        arrivalAirportName: {
            type: Sequelize.STRING
        },
        arrivalAirportCity: {
            type: Sequelize.STRING
        },
        arrivalDate: {
            type: Sequelize.STRING
        },
        arrivalHour: {
            type: Sequelize.STRING
        },
        departureAirportInitial: {
            type: Sequelize.STRING
        },
        departureAirportName: {
            type: Sequelize.STRING
        },
        departureAirportCity: {
            type: Sequelize.STRING
        },
        departureDate: {
            type: Sequelize.STRING
        },
        departureHour: {
            type: Sequelize.STRING
        },
        airplane: {
            type: Sequelize.STRING
        },
        pilot: {
            type: Sequelize.STRING
        },
        flightStatus: {
            type: Sequelize.STRING
        },
    })

    return Flights
}