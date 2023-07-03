import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from './constant/path';
import Memo from './pages/memo';
import Reducer from './pages/reducer';

function Router() {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path={PATH.reducer} element={<Reducer />} />
        <Route path={PATH.memo} element={<Memo />} />
      </Routes>
    </Suspense>
  );
}
export default Router;
