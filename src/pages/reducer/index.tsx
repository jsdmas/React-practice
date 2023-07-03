import { Reducer, useReducer, useState } from 'react';

import Student from '@/components/student';

type Tstudents = { id: number; name: string; isHere: boolean };

type TinitalState = { count: number; students: Tstudents[] };

type studentAction = { type: 'add-student'; payload: { name: string } };

const reducer: Reducer<TinitalState, studentAction> = (state, action) => {
  switch (action.type) {
    case 'add-student': {
      const name = action.payload.name;
      const newStudent: Tstudents = {
        id: Date.now(),
        name,
        isHere: true,
      };

      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    }
    default:
      return state;
  }
};

const initalState: TinitalState = {
  count: 0,
  students: [],
};

function ReducerHard() {
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, initalState);

  console.log(studentInfo);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => dispatch({ type: 'add-student', payload: { name } })}>추가</button>
      {studentInfo.students.map((student) => {
        return <Student name={student.name} key={student.id} />;
      })}
    </div>
  );
}
export default ReducerHard;
