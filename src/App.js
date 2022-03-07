import React, {Component} from 'react'
import styled from "styled-components"

const Title = styled.h1 `
    color: red;
`


export default class Todo extends Component{

  state ={
    tarefa:'',
    lista: []
  }

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    })
  }

  add = (event) => {
    let {lista, tarefa} = this.state
    if(tarefa != ""){
      this.setState({
        tarefa: '',
        lista:lista.concat({
          tarefa:tarefa,
          id: Date.now()
        })
      })
    }
    event.preventDefault()
  }

  remove = (id) =>{
    let {lista} = this.state
    this.setState({
      lista: lista.filter((item)=> {
        return item.id != id
      })
    })
  }


render(){
  return(
    <div>
      <Title>ListaDeTarefas</Title>
      <form>
      <input onChange={this.handleChange} type="text" value={this.state.tarefa}/>
      <button onClick={this.add}>Add</button>
      </form>
      
      
      <div>
        {this.state.lista.map((item)=>(

          <ul>
            <li>{item.tarefa} 
           
            <img  onClick={() => {this.remove(item.id)}} 
             src="https://cdn-icons-png.flaticon.com/512/126/126468.png" alt="lixeira" width="3%"></img>
            </li>
            
          </ul>
        ))}
      </div>
    </div>
  )
}
}