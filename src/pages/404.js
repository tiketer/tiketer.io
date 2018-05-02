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

const NotFoundPage = () => (
  <Container>
    <h1>Page not found</h1>
  </Container>
)

export default NotFoundPage
