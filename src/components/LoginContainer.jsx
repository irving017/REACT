import React from 'react'
import LoginDisplay from './LoginDisplay'

class LoginContainer extends React.Component{ 
  state={
    error:null,
    clase:null,
    clase2:null,
    type:'password'
  }

  onSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.pass.value)
    if(e.target.email.value !== 'pollo@gmail.com'){
      this.setState({error:'tu correo esta mal'})
    }else if(e.target.pass.value !=='pollollon'){
      this.setState({error:'tu contraseña esta mal'})
    }else{this.setState({error:null})}
  }

  onChange=(e)=>{
    //console.log(e.target.value)
    //1.-Comprobar en tiempo real que el email es correcto
    
  if(e.target.name ==='email'){
    if(!e.target.value.includes('@')){
      this.setState({clase:'warning'})
    }else if(e.target.value !=='pollo@gmail.com'){
      this.setState({error:'email incorrecto'})
      this.setState({clase:'bad'})
    }else{
      this.setState({error:null})
      this.setState({clase:'good'})
    }
  }else{
    if(e.target.value !=='pollollon'){
        this.setState({error:'contraseña incorrecta'})
        this.setState({clase2:'bad'})
      }else{
        this.setState({error:null})
        this.setState({clase2:'good'})
      }
  }
}
changeType=(e)=>{
  if(e.target.checked)this.setState({type:'text'})
  else this.setState({type:'password'})
}

  render(){
    return(
      <div>
        <LoginDisplay 
          clase2={this.state.clase2}
          clase = {this.state.clase}
          onSubmit={this.onSubmit}
          error = {this.state.error}
          onChange={this.onChange}
          changeType = {this.changeType}
          type={this.state.type}
        />
      </div>
    )
  }
}

export default LoginContainer
