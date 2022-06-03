import React, { useEffect, useState } from 'react'
import Plane from '../../images/airplane-windows.jpg'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Cards.css'

function Cards() {

    const [flights, setFlights] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/flights', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setFlights(data)
        })
        .catch((err) => console.log(err))
    }, [])

  return (
    <div> {console.log('FLIGHTS', flights)}
          <Row xs={1} md={2} className="g-4">
                  {flights.map((flight) => (
                        <Col md={3} className="p-2">
                        <Card>
                            <h5>Voo {flight.id}</h5>
                            <Card.Img variant="top" src={Plane} className="p-2"/>
                            <Card.Body>
                                <Row>
                                  <Col md={6} className="flex">
                                      <p className="airplane">{flight.airplane}</p>
                                  </Col>
                                  <Col md={6} className="flex">
                                      <p className="pilot">piloto: {flight.pilot}</p>
                                  </Col>
                                  <hr></hr>
                                      <h5 className='pb-2' style={{ fontStyle: "italic" }}>{flight.flightStatus}</h5>
                                      <hr />
                                </Row>
                                <Row>
                                  <Col md={6} className="flex">
                                      <p className="departure">Partida</p>
                                      <h5 className="iata">{flight.arrivalAirportInitial}</h5>
                                      <p className="airport-title">{flight.arrivalAirportName}</p>
                                  </Col>
                                  <Col md={6} className="flex">
                                  <p className="arrival">Chegada</p>
                                      <h5 className="iata">{flight.departureAirportInitial}</h5>
                                      <p className="airport-title">{flight.departureAirportName}</p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6} className="flex">
                                      <h5 className="arrival">{flight.arrivalHour}</h5>
                                  </Col>
                                  <Col md={6} className="flex">
                                  <h5 className="departure">{flight.departureHour}</h5>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6} className="flex">
                                      <p className="departure">{flight.departureDate}</p>
                                  </Col>
                                  <Col md={6} className="flex">
                                  <p className="arrival">{flight.arrivalDate}</p>
                                  </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                  ))}
          </Row>
    </div>
  )
}

export default Cards