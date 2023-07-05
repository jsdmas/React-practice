import { memo, useCallback, useState } from 'react';

type Tcomponent = {
  name: string;
  value: string;
  hello?: () => void;
};

function Memo() {
  const [text, setText] = useState('');
  const [_, setState] = useState(1);

  const reRender = () => setState((prev) => prev + 1);

  // useCallback을 활용하여 함수를 memoization
  // Memo컴포넌트가 reRender될 때 memoizedHello함수는 재생성 되지 않는다.
  const memoizedHello = useCallback(() => alert('Hello, World'), []);

  console.log('App rendered');

  return (
    <div className="App">
      <h1>Memoization Test</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={reRender}>re render</button>
      <MemoizedComponent name="memo O" value={text} hello={memoizedHello} />
    </div>
  );
}

function ChildComponent({ name, value, hello }: Tcomponent) {
  console.log(`${name} rendered`);

  return (
    <h3>
      {name}: {value}
      <button onClick={hello}>hello</button>
    </h3>
  );
}

const MemoizedComponent = memo(ChildComponent);

export default Memo;
