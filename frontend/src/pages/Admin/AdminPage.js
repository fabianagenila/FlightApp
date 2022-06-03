import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AdminPage.css";

function AdminPage() {
  const [airplane, setAirplane] = useState("")
  const [arrivalAirportInitial, setArrivalAirportInitial] = useState("")
  const [arrivalAirportName, setArrivalAirportName] = useState("")
  const [arrivalAirportCity, setArrivalAirportCity] = useState("")
  const [arrivalDate, setArrivalDate] = useState("")
  const [arrivalHour, setArrivalHour] = useState("")
  const [departureAirportInitial, setDepartureAirportInitial] = useState("")
  const [departureAirportName, setDepartureAirportName] = useState("")
  const [departureAirportCity, setDepartureAirportCity] = useState('')
  const [departureDate, setDepartureDate] = useState("")
  const [departureHour, setDepartureHour] = useState("")
  const [pilot, setPilot] = useState("")
  const [flightStatus, setFlightStatus] = useState("")

    const handleSubmit = (e) => {
      const bodyContent = {
        airplane,
        arrivalAirportInitial,
        arrivalAirportName,
        arrivalAirportCity,
        arrivalDate,
        arrivalHour,
        departureAirportInitial,
        departureAirportName,
        departureAirportCity,
        departureDate,
        departureHour,
        pilot,
        flightStatus,
      }

      fetch('http://localhost:3001/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
      })
        .then(() => alert('Adicionado com sucesso!'))
        .catch((err) => console.log(err))
    }

  return (
    <div className="Login">
      <div>
        <h3 className="p-3">Área Administrativa</h3>
        <h6 className="p-3">Cadastro de informações</h6>
      </div>
      <div className='page-container'>
        <br/>
        <div className='form-container'>
          <form onSubmit={handleSubmit} className=''>
            <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={airplane}
              placeholder='Modelo do avião'
              onChange={(e)=> setAirplane(e.target.value)}
            />
            <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={arrivalAirportInitial}
              placeholder='Inicial aeroporto chegada'
              onChange={(e)=> setArrivalAirportInitial(e.target.value)}
            />
            <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={arrivalAirportName}
              placeholder='Nome do Aeroporto'
              onChange={(e)=> setArrivalAirportName(e.target.value)}
            />
            <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={arrivalAirportCity}
              placeholder='Nome da Cidade do aeroporto'
              onChange={(e)=> setArrivalAirportCity(e.target.value)}
            />
            <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={arrivalDate}
              placeholder='Data da chegada (00/00/0000)'
              onChange={(e)=> setArrivalDate(e.target.value)}
            />
             <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={arrivalHour}
              placeholder='Hora da chegada (00:00)'
              onChange={(e)=> setArrivalHour(e.target.value)}
            />
             <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={departureAirportInitial}
              placeholder='Inicial aeroporto de partida'
              onChange={(e)=> setDepartureAirportInitial(e.target.value)}
            />
             <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={departureAirportName}
              placeholder='Nome aeroporto de partida'
              onChange={(e)=> setDepartureAirportName(e.target.value)}
            />
             <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={departureAirportCity}
              placeholder='Cidade aeroporto de partida'
              onChange={(e)=> setDepartureAirportCity(e.target.value)}
            />
             <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={departureDate}
              placeholder='Data da partida (00/00/0000)'
              onChange={(e)=> setDepartureDate(e.target.value)}
            />
             <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={departureHour}
              placeholder='Horário da partida (00:00)'
              onChange={(e)=> setDepartureHour(e.target.value)}
            />
            <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={pilot}
              placeholder='Nome do piloto do avião'
              onChange={(e)=> setPilot(e.target.value)}
            />
            <input
              className="m-2"
              required
              style={{ width: '100%'}}
              value={flightStatus}
              placeholder='Status do voo'
              onChange={(e)=> setFlightStatus(e.target.value)}
            />
            <button className='button'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPage