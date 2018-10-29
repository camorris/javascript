import React, { Component } from 'react';

class TableDataPoint extends Component {
  constructor(props){
      super(props)
      this.state = {d: props.data, editing: false}
  }
  handleClick(evt){
      this.setState({editing: true})
  }
  render(){
      if(this.state.editing){
          return <td onClick={this.handleClick.bind(this)}><input defaultValue={this.state.d} /></td>
      } else {
          return <td onClick={this.handleClick.bind(this)}>{this.state.d}</td>
      }
  }
}
class Table extends Component {
  constructor(props){
    super(props)
    this.state = {currentData: props.tableData.data} // Initial state, we use state for dynamic data
  }

  addRowClickHandler(evt){
    console.log('clicked add')
    var newRow = this.props.tableData.headers.map(headerName => this.refs[headerName].value) // get the values from the inputs
    var newCurrentData = this.state.currentData.slice() // create a copy of the current
    newCurrentData.push(newRow) // add new row to the new current data
    this.setState({currentData: newCurrentData})
  }

  deleteRowClickHandler(dataRow, evt){
    console.log('delete button clicked')
    this.setState({currentData: this.state.currentData.filter(dr => dr != dataRow)})
  }
  render(){
    return(
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            {this.props.tableData.headers.map(headerName => <th key={headerName}>{headerName}</th>)}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.props.tableData.headers.map(headerName => (
              <td><input ref={headerName} placeholder={headerName}></input></td>
            ))}
            <td><button className="pure-button"
                        onClick={this.addRowClickHandler.bind(this)}>Add</button></td>
          </tr>
          {this.state.currentData.map((dataRow, idx) => (
                <tr key={`row-${idx}`}>
                  {dataRow.map(d => <TableDataPoint data={d} />)}
                  
                  <td><button className="pure-button"
                              onClick={this.deleteRowClickHandler.bind(this, dataRow)}>delete</button></td>
                </tr>
              )
          )}
        </tbody>
      </table>
    )
  }
}


export default Table;