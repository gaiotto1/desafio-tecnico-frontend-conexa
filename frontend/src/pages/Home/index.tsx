import { useEffect, useState } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'

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
  const [consultations, setConsultations] = useState([])
  // const { user } = useContext(AuthContext)
  const name = localStorage.getItem('name')

  const getConsultas = async () => {
    const response = await api.get('/consultations?_expand=patient')
    console.log('resp', response.data)

    setConsultations(response.data)
  }

  useEffect(() => {
    getConsultas()
  }, [])

  return (
    <div>
      <h1>{name}</h1>

      <h2>Consultas</h2>

      <ul>
        {consultations.map((consultation: Consultation) => (
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
