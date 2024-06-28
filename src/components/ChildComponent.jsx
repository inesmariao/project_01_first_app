import React from 'react'

const ChildComponent = ({ message, onRespond }) => {

  const handleClick = () => {
    onRespond("!Hola respuesta del HIJO!");
  }

  return (
    <div className="child">
      <h3>ChildComponent</h3>
      <p>Hola soy el Hijo!</p>
      <p>{message}</p>
      <button onClick={handleClick} >Enviar respuesta al padre</button>
    </div>
  )
}

export default ChildComponent