import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home';


import HomeLayout from './components/HomeLayout';



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route component={HomeLayout}>		  
		  <Route path="/" component={Home} />		  	 
	  </Route>      
    </Router>
  );
}

export default RouterConfig;
