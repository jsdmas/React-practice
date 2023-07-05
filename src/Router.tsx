import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from '@/constants/path';

const Memo = lazy(() => import('@/pages/memo/index'));
const Reducer = lazy(() => import('@/pages/reducer/index'));
const BasicReducer = lazy(() => import('@/pages/reducerbasic/index'));
const BasicMemo = lazy(() => import('@/pages/memobasic/index'));
const ComponentMemo = lazy(() => import('./pages/componentMemo/index'));
const FailComponentMemo = lazy(() => import('./pages/FailComponentMemo/index'));

function Router() {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path={PATH.reducer} element={<Reducer />} />
        <Route path={PATH.memo} element={<Memo />} />
        <Route path={PATH.reducerBasic} element={<BasicReducer />} />
        <Route path={PATH.memoBasic} element={<BasicMemo />} />
        <Route path={PATH.componentMemo} element={<ComponentMemo />} />
        <Route path={PATH.FailComponentMemo} element={<FailComponentMemo />} />
      </Routes>
    </Suspense>
  );
}
export default Router;
