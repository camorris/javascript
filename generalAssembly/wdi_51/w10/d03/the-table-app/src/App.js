import React, { Component } from 'react';
import './App.css';
import Table from './Table'

class App extends Component {
  render() {
    var initialTableData = {
      headers: ['make', 'model', 'year'],
      data: [['scion', 'box', 2010],
             ['pontiac', 'firebird', 1986],
             ['chevrolet', 'camaro', 1980]]
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JDogg</h1>
        </header>
        <Table tableData={initialTableData}/>
      </div>
    );
  }
}
export default App;
