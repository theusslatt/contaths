import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  sobrenome: sobrenomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  categoria,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [descricao, setDescricao] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoria)

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setSobrenome(sobrenomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
    setDescricao(descricaoOriginal)
  }

  return (
    <>
      <S.Card>
        <S.NomeCard>
          {estaEditando ? (
            <>
              <S.CampoTexto
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
              />
              <S.CampoTexto
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                placeholder="Sobrenome"
              />
            </>
          ) : (
            <S.Nome>
              {nomeOriginal} {sobrenomeOriginal}
            </S.Nome>
          )}
          <S.Descricao
            disabled={!estaEditando}
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
          />
        </S.NomeCard>
        <S.InfoCard>
          {estaEditando ? (
            <>
              <S.CampoTexto
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone"
              />
              <S.CampoTexto
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
              />
            </>
          ) : (
            <>
              <S.Telefone>{telefoneOriginal}</S.Telefone>
              <S.Telefone>{emailOriginal}</S.Telefone>
            </>
          )}
        </S.InfoCard>
        {estaEditando ? (
          <S.SelectCategoria
            value={categoriaSelecionada}
            onChange={(e) =>
              setCategoriaSelecionada(e.target.value as enums.Categoria)
            }
          >
            {Object.values(enums.Categoria).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </S.SelectCategoria>
        ) : (
          <S.Tag parametro="categoria" categoria={categoria}>
            {categoria}
          </S.Tag>
        )}
        <S.BarraDeAcoes>
          {estaEditando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      nome,
                      sobrenome,
                      telefone,
                      email,
                      categoria: categoriaSelecionada,
                      descricao,
                      id
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <Botao
                onClick={() => {
                  setNome(nomeOriginal)
                  setSobrenome(sobrenomeOriginal)
                  setTelefone(telefoneOriginal)
                  setEmail(emailOriginal)
                  setDescricao(descricaoOriginal)
                  setCategoriaSelecionada(categoria)
                  setEstaEditando(true)
                }}
              >
                Editar
              </Botao>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </S.BarraDeAcoes>
      </S.Card>
    </>
  )
}

export default Contato
