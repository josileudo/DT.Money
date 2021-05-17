import logoImg from "../../src/assets/logo.svg"

import {Container, Content} from "./styles"

export function Heder () {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type = "button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}