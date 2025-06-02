import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  background-color: #657786;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 12px;
  width: 100%;
  background-color: #546574;
  color: #ccc;

  &::placeholder {
    color: #ccc;
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
