import React from 'react';
import './App.css';
import './styles/_styles.scss';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HomepageComponent from "./components/homepage/HomepageComponent";
import HeaderComponent from "./components/navigation/HeaderComponent";
import CategoryOverviewComponent from "./components/catalog/CategoryOverviewComponent";
import Notfound from "./notFound";
import AboutComponent from "./components/AboutComponent";

function App() {
  return (
      <Router>
            <div className="App">
                <HeaderComponent />
                <Switch>
                    <Route exact path="/">
                        <HomepageComponent  name={'Karim'} />
                    </Route>
                    <Route path="/catalog">
                        <CategoryOverviewComponent />
                    </Route>
                    <Route>
                        <AboutComponent/>
                    </Route>
                    <Route component={Notfound}/>
                </Switch>
            </div>
      </Router>
  );
}

export default App;
