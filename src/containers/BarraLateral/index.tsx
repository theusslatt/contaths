import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard legenda="Todos Contatos" criterio="todas" />
              <FiltroCard
                valor={enums.Categoria.Favorito}
                criterio="categoria"
                legenda="Favoritos"
              />
              <FiltroCard
                valor={enums.Categoria.Trabalho}
                criterio="categoria"
                legenda="Trabalho"
              />
              <FiltroCard
                valor={enums.Categoria.Amigos}
                criterio="categoria"
                legenda="Amigos"
              />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => Navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
