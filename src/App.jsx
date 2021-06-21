import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import routes from './router';
import store from "./store";
import HXAppFooter from 'components/app-footer'
import HXAppHeader from 'components/app-header'
import HXAppPlayerBar from './pages/player/app-player-bar'

export default function App(){
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
      <HXAppHeader />
      {renderRoutes(routes)}
      <HXAppFooter />
      <HXAppPlayerBar />
    </HashRouter>
    </Suspense>
    </Provider>
    
    
  )
}
