import { lazy } from 'react';

import { NoLazy } from '../01-LazyLoad/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-LazyLoad/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string,
  path: string,
  name: string,
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-LazyLoad/layout/LazyLayout'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-LazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-LazyLoad/pages/LazyPage3'));

export const routes:Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout - Dash'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No-Lazy'
  },
];