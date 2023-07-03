import { Dispatch } from 'react';

import { studentAction } from '@/pages/reducer';

function Student({
  name,
  dispatch,
  id,
  isHere,
}: {
  name: string;
  dispatch: Dispatch<studentAction>;
  id: number;
  isHere: boolean;
}) {
  return (
    <div>
      <p>
        <span
          style={{
            textDecoration: !isHere ? 'line-through' : 'none',
            color: !isHere ? 'gray' : 'black',
          }}
        >
          {name}
        </span>
        <button onClick={() => dispatch({ type: 'delete-student', payload: { id } })}>삭제</button>
        <button onClick={() => dispatch({ type: 'mark-student', payload: { id } })}>출석</button>
      </p>
    </div>
  );
}
export default Student;
