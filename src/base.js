import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const BaseApp = lazy(() => import('./App-0'));
const InternalApp = lazy(() => import('./App-1'));
const ExternalApp = lazy(() => import('./App-2'));

class App extends Component {
  render() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" render={()=> <BaseApp />}/>
                    <Route exact path="/internal" render={()=> <InternalApp />}/>
                    <Route path="/external" render={()=> <ExternalApp />}/>
                </Switch>
            </Suspense>
        </Router>
    );
  }
}

export default App;
