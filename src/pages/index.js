import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1 0 100%;
  background: white;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img.attrs({
  src: require('../assets/logo-w-text.svg'),
})`
  max-width: 500px;
  min-width: 200px;
  margin: 1rem 2rem;
  height: auto;
`

const IndexPage = () => (
  <Container>
    <Logo/>
  </Container>
)

export default IndexPage
