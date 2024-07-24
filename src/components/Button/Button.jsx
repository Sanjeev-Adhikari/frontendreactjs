import React from 'react'

const Button = (props) => {

  //this is object destructuring 
  const {title} = props
  const {color} = props

 // Alternative const title = props.title
 // const color = props. color

  return (
    <button style={{height : "50px" , width : "100px" , background: color}}>  {title} </button>
  )
}

export default Button