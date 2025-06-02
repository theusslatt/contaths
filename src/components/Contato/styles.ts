import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
  parametro: 'categoria'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const NomeCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const InfoCard = styled.div`
  display: block;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Sobrenome = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Telefone = styled.h3`
  font-size: 14px;
`

export const Tag = styled.span<TagProps>`
  padding: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  display: inline-block;
  max-width: 58px;
  max-height: 24px;
  text-align: center;
  align-items: center;
  margin: auto;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  height: 32px;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraDeAcoes = styled.div`
  padding-top: 16px;
  text-align: right;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const CampoTexto = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 100%;
`

export const SelectCategoria = styled.select`
  padding: 8px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  height: 64px;
  width: 120px;
`
