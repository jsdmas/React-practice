import { Reducer, useReducer, useState } from 'react';

/*
reducer : state를 업데이트 하는 역할 (은행)
dispatch : state 업데이트를 위한 요구
action : 요구의 내용
*/

type BankAction = { type: 'deposit'; payload: number } | { type: 'withdraw'; payload: number };

const reducer: Reducer<number, BankAction> = (state, action) => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

function BasicReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>은행</h1>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        step="1000"
        min="0"
        value={number}
        onChange={(event) => setNumber(+event.target.value)}
      />
      <button onClick={() => dispatch({ type: 'deposit', payload: number })}>예금</button>
      <button onClick={() => dispatch({ type: 'withdraw', payload: number })}>출금</button>
    </div>
  );
}

export default BasicReducer;
