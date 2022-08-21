import React from 'react'
//styles
import "./forms.css"
function Forms() {
  return (
    <div className="search">
       <form >
    <input type="text" placeholder='Enter a task' />
    <input type="button" value="Add" />
       </form>
        </div>
  )
}

export default Forms