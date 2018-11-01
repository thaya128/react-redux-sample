import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Ranking from './containers/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">all category</Link></li>
          <li><Link to="/category/2502">pc etc...</Link></li>
          <li><Link to="/category/10002">book etc...</Link></li>
        </ul>
        <Route path="/all" component={Ranking} />
        <Route
          path="/category/:id"
          render={
            ({ match }) => <Ranking categoryId={match.params.id}/>
          }
        />
      </div>
    );
  }
}

export default App;
