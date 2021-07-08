import React from 'react'
import Disp from './Disp.js'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      list : [],
      text:''
    }
    this.click = this.click.bind(this)
    this.change = this.change.bind(this)
    this.delete = this.delete.bind(this)
  }
  change(event){
    this.setState({text:event.target.value})
  }
  click(){
    if (this.state.text !== ''){
      this.setState({list: [...this.state.list,(this.state.text)],text:''})}
    document.getElementById('inputs').value=''
    console.log(this.state.list)
  }
  delete(id){
    this.setState({list : this.state.list.filter((index) => index !== id)})
    window.confirm('Deletion Alert!')
  }
  render(){
    return(
      <center>
        <div className='main'>
          <h1>ToDo List</h1>
          <input id='inputs' type='text' placeholder='Add a task' onChange={this.change}/>
          <button id='icon' onClick={this.click}>+</button>
          <ul>
              {this.state.list.map((item,index) => <Disp key={index} id={index} item={item} onSelect={this.delete}/>)}
          </ul>
        </div>
      </center>
    )
  }
}
export default App