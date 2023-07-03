import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from '@/constant/path';

const Memo = lazy(() => import('@/pages/memo/index'));
const Reducer = lazy(() => import('@/pages/reducer/index'));
const BasicReducer = lazy(() => import('@/pages/reducerbasic/index'));
const BasicMemo = lazy(() => import('@/pages/memobasic/index'));

function Router() {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path={PATH.reducer} element={<Reducer />} />
        <Route path={PATH.memo} element={<Memo />} />
        <Route path={PATH.reducerBasic} element={<BasicReducer />} />
        <Route path={PATH.memoBasic} element={<BasicMemo />} />
      </Routes>
    </Suspense>
  );
}
export default Router;
