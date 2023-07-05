import { memo, useState } from 'react';

function ComponentMemo() {
  const [text, setText] = useState('');
  const [, setState] = useState(1);

  const reRender = () => setState((prev) => prev + 1);

  return (
    <div>
      <h1>Memoiztion Test</h1>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={reRender}>re render</button>
      <ChilderComponent name="memo X" value={text} />
      <MemoizedComponent name="memo O" value={text} />
      <ReturnFalseMemo name="return false" value={text} />
      <ReturnTrueMemo name="return true" value={text} />
    </div>
  );
}

// memo를 설정하지 않아서 state가 바뀔떄마다 랜더링됩니다.
function ChilderComponent({ name, value }: { name: string; value: string }) {
  console.log(`${name} rendered`);

  return (
    <h3>
      {name} : {value}
    </h3>
  );
}

// value로 정해둔 state가 바뀌면 rerender, 그외의 state는 rerender 되지 않는다.
const MemoizedComponent = memo(ChilderComponent);
// ReturnFalseMemo : 항상 reRender (항상 false를 반환하기 때문)
const ReturnFalseMemo = memo(ChilderComponent, () => false);
// RetrunTrueMemo : 항상 reRender되지않는다. (아무리 state들이 변해도 바뀌지않음.)
const ReturnTrueMemo = memo(ChilderComponent, () => true);

export default ComponentMemo;
