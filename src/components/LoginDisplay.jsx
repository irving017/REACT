import React from 'react'
import styles from './LoginDisplay.module.css'

//forma 1 de hacer el css styles
//1.- crear un archovo a la misma altura de tus componentes con el nombre Login.css
//2.-Añadir los estilos en el archivo
//3.- importarlos en el archivo

const LoginDisplay = ({onSubmit, error, onChange,clase,clase2,changeType,type}) =>{
return(
  <div className={styles.pollollon}>
    <h2>Inicia sesión</h2>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} name='email' type="email" placeholder='email' className={styles[clase]}/>
      <br/>
      <input onChange={onChange} name='pass' type={type} placeholder='Password' className={styles[clase2]}/>
      <input onChange={changeType} type="checkbox"/>
      <br/>
      <input type="submit"/>
    </form>
    <p>{error}</p>
    {/* <input type="input"/> */}
  </div>
)
}

export default LoginDisplay 