import { Link } from 'react-router-dom';

import { PATH } from '@/constants/path';

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        width: '90vw',
        justifyContent: 'space-around',
      }}
    >
      <Link to={PATH.reducerBasic}>useReducer 기본연습</Link>
      <Link to={PATH.reducer}>useReducer 활용</Link>
      <Link to={PATH.memoBasic}>useMemo 기본연습</Link>
      <Link to={PATH.memo}>useMemo 활용</Link>
      <Link to={PATH.callback}>useCallBack 연습</Link>
      <Link to={PATH.componentMemo}>memo 연습</Link>
      <Link to={PATH.FailComponentMemo}>잘못된 memo</Link>
    </header>
  );
}
export default Header;
