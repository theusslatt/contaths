import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#889aa9' : '#546574')};
  background-color: ${(props) => (props.ativo ? '#889aa9' : '#546574')};
  color: ${(props) => (props.ativo ? '#ccc' : '#ccc')};
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 8px;
`
export const Contador = styled.span`
  font-weitgh: bold;
  font-size: 14px;
  margin-right: 8px;
`

export const Label = styled.span`
  font size: 14px;
`
