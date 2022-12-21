import { Container, Wrapper } from './styles'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="Logo" />
      </Wrapper>
    </Container>
  )
}
