import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from './styles';

import typeIcons from '../../utils/typeicons';

function TaskCard({ type, title, when, done }) {

   const datef = useMemo(() => format(new Date(when), 'dd/MM/yyyy') );
   const hourf = useMemo(() => format(new Date(when), 'HH:mm') );

  return (
      <S.Container done={done}>
          <S.TopCard>
            <img src={typeIcons[type]} alt="Icone da Tarefa"/>
            <h3>{ title }</h3>
          </S.TopCard>
          <S.BottomCard>
            <strong>{datef}</strong>
            <span>{hourf}</span>
          </S.BottomCard>
      </S.Container>
  )
}

export default TaskCard;
