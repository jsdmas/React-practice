import { Dispatch } from 'react';

import { studentAction } from '@/pages/reducer';

function Student({
  name,
  dispatch,
  id,
}: {
  name: string;
  dispatch: Dispatch<studentAction>;
  id: number;
}) {
  return (
    <div>
      <p>
        <span>{name}</span>
        <button onClick={() => dispatch({ type: 'delete-student', payload: { id } })}>삭제</button>
      </p>
    </div>
  );
}
export default Student;
