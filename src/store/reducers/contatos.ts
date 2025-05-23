import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Guilherme',
      sobrenome: 'Silveira',
      telefone: '98999327251',
      email: 'guilherme-silveira90@gmail.com',
      categoria: enums.Categoria.Amigos,
      descricao: 'Engenheiro de Software',
      id: 1
    },
    {
      nome: 'Bento',
      sobrenome: 'Thiago',
      telefone: '33988283344',
      email: 'bentothiagoalves@gmail.com',
      categoria: enums.Categoria.Trabalho,
      descricao: 'Coordenador',
      id: 2
    },
    {
      nome: 'Elaine',
      sobrenome: 'Antonella',
      telefone: '68983344075',
      email: 'elaine-galvao91@gmail.com',
      categoria: enums.Categoria.Favorito,
      descricao: 'Prima',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const ContatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(ContatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
