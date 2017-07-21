import React,{Component} from 'react'

class App extends Component {
  render(){
    return(
      <div className='App'>
        <div className='title'>
          Reminder pro
        </div>
        <div className='form-inline'>
          <div className='form-group'>
            <input
              className='from-control'
              placeholder='I have to...'
            />
          </div>
          <button className='btn btn-success' type='button' >
            Add reminder
          </button>
        </div>
      </div>
    )
  }
}

export default App;
