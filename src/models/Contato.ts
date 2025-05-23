import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  sobrenome: string
  telefone: string
  email: string
  categoria: enums.Categoria
  descricao: string
  id: number

  constructor(
    nome: string,
    sobrenome: string,
    telefone: string,
    email: string,
    categoria: enums.Categoria,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.telefone = telefone
    this.email = email
    this.categoria = categoria
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
