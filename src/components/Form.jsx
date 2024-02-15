import React from 'react'

const Form = ({todoName, setTodoName, todoDescription, setTodoDescription, buttonAdd, Add_UpdateToDo}) => {
  return (
    <>
    <form className='row mt-4 g-4 d-flex justify-content-center'>
            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <label htmlFor="ToDoName" className="visually-hidden">ToDo Name</label>
              <input type="text" className="form-control w-100" id="ToDoName" placeholder='ToDo Name'
              value={todoName} onChange={(e)=>setTodoName(e.target.value)} required/>
            </div>
            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <label htmlFor="ToDoDescription" className="visually-hidden">ToDo Description</label>
              <input type="text" className="form-control w-100" id="ToDoDescription" placeholder="ToDo Description"
               value={todoDescription} onChange={(e)=>setTodoDescription(e.target.value)} required/>
            </div>
            <div className="col-md-12 col-lg-3 d-flex justify-content-center">
              <button type="button" disabled={todoName === "" || todoDescription === ""}  
              className={`btn w-75 ${buttonAdd === 'Add ToDo' ? 'btn-success' : 'btn-primary'}`} onClick={()=> Add_UpdateToDo(todoName, todoDescription)}>{buttonAdd}</button>
            </div>
        </form>
    </>
  )
}

export default Form