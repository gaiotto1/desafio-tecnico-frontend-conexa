import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'

import { api } from '../../services/api'

type Consultation = {
  id: string
  date: string
  patient: {
    first_name: string
    last_name: string
  }
}

export function Home() {
  const cookies = parseCookies()
  const [consultations, setConsultations] = useState([])

  const getConsultas = async () => {
    await api
      .get('/consultations?_expand=patient', {
        headers: {
          Authorization: `Bearer ${cookies.conexaToken}`,
        },
      })
      .then((response) => {
        console.log('resp', response.data)
        setConsultations(response.data)
      })
      .catch((error) => {
        console.log('error', error)
        setConsultations([])
      })
  }

  useEffect(() => {
    getConsultas()
  }, [])

  return (
    <div>
      <h2>Consultas</h2>

      <ul>
        {consultations?.map((consultation: Consultation) => (
          <li key={consultation.id}>
            <p>
              {consultation.patient.first_name} {consultation.patient.last_name}
            </p>
            <p>
              {new Date(consultation.date).toLocaleDateString('pt-BR')} às{' '}
              {new Date(consultation.date).toLocaleTimeString('pt-BR')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
