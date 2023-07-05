import { memo, useState } from 'react';

type Tcomponent = {
  name: string;
  value: string;
  hello?: () => void;
};

function FailComponentMemo() {
  const [text, setText] = useState('');
  const [, setState] = useState(1);

  const reRender = () => setState((prev) => prev + 1);

  function hello() {
    // 함수도 객체이기 때문에 메모리 주소값이 달라져서 FailComponentMemo가 reRender 되며 함수인 hello도 다시 생성된다.
    // 함수를 참조하는 memo컴포넌트도 메모리 주소가 변경됨에 따라 reRender되는 것이다.
    alert('Hello, World');
  }

  return (
    <div className="App">
      <h1>Memoization Test</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={reRender}>re render</button>
      {/* reRender 버튼을 클릭시 예상과 다르게 Memo로 감싼 컴포넌트가 reRendering 되는 현상이 일어난다. */}
      <MemoizedComponent name="memo O" value={text} hello={hello} />
    </div>
  );
}

function ChildComponent({ name, value, hello }: Tcomponent) {
  console.log(`${name} rendered`);

  return (
    <div>
      {name}: {value}
      <button onClick={hello}>hello foo</button>
    </div>
  );
}

const MemoizedComponent = memo(ChildComponent);

export default FailComponentMemo;
