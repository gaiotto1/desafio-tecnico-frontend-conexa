import { Container, Wrapper } from './styles'

import Logo from '../../assets/logo.svg'

export function Header() {
  const name = localStorage.getItem('username')

  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="Logo" />

        <div>
          <h1>Olá, Dr. {name}</h1>
          <button>Sair</button>
        </div>
      </Wrapper>
    </Container>
  )
}
