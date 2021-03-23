import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import CarlosLecaros from './views/carloslecaros';
import CV from './views/cv';
import Home from './views/home';
import KnowMe from './views/knowme';
import notFound from './views/notfound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/presupuestos/carloslecaros" component={CarlosLecaros} />
          <Route exact path="/conoceme" component={KnowMe} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/" component={Home} />
          <Route component={notFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
