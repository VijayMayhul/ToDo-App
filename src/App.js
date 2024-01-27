import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import { useState } from 'react';

import Card from './Card';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [buttonAdd, setButtonAdd] = useState('Add Todo');
  const [editingCardId, setEditingCardId] = useState(null);
  const [cardDetails, setCardDetails] = useState([]);
  const [state, setState] = useState('Not Completed');
  const [filterSelect, setFilterSelect] = useState('All');

  //Adding new ToDo's
  let Add_UpdateToDo = (todoN, todoD) => {
    if (buttonAdd === 'Add Todo') {
      let obj = {
        TodoName: todoN,
        TodoDescription: todoD,
        id: cardDetails.length + 1,
        status: state
      };
      setCardDetails([...cardDetails, obj]);
    } else if (buttonAdd === 'Update ToDo') {
      const updatedCardDetails = cardDetails.map((card) =>
        card.id === editingCardId ? { ...card, TodoName: todoN, TodoDescription: todoD } : card
      );
      setCardDetails(updatedCardDetails);
      setButtonAdd('Add ToDo');
      setEditingCardId(null);
    }
    setTodoName('');
    setTodoDescription('');
  }; 

  //Updating the Name and Description of the ToDO Card
  let cardUpdate = (name, des, id)=>{
    setButtonAdd('Update ToDo');
    setTodoName(name);
    setTodoDescription(des);
    setEditingCardId(id);
  }

  //Deleting the ToDO Card
  let cardDelete = (id)=>{
    let delCardDetails = cardDetails.filter((ele)=> ele.id !== id);
    setCardDetails([...delCardDetails]);
  }
  
  //Updating the Status of the ToDO Card
  let filterChange = (filSta, id)=>{
    setState(filSta);
    const updatedCardDetails = cardDetails.map((card) =>
        card.id === id ? {...card, status: filSta} : card
      );
      setCardDetails(updatedCardDetails);
  }

  //Filtering cards as per the Card Status
  const filteredCards = cardDetails.filter((card) => {
    if (filterSelect === 'All') {
      return card;
    } else {
      return card.status === filterSelect;
    }
  });

  return (
    <>
    <Header/>
      <div className='container'>
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
              <button type="button" className={`btn btn-success w-75 
              ${todoName === '' || todoDescription === '' ? 'disabled' : ''}`} onClick={()=> Add_UpdateToDo(todoName, todoDescription)}>{buttonAdd}</button>
            </div>
        </form>
        <div className='row mt-5 px-md-5 px-lg-5 d-flex align-items-center'>
          <div className='col-12 col-md-5 col-lg-4 d-flex justify-content-center'><h4 className='h4 m-0'>My Todos</h4></div>
          <div className='col-12 col-md-1 col-lg-3 mb-3'></div>
          <div className='col-12 col-md-6 col-lg-5 d-flex align-items-center justify-content-center'>
            <h5 className='h5 m-0 d-inline'><label htmlFor="dropDown">Status Filter : &nbsp;</label></h5>
            <div className="dropdown d-inline">
              <button className={`btn btn-outline-dark text-white dropdown-toggle
                ${filterSelect === 'All' ? 'btn-primary' : filterSelect === 'Completed' ?
                'btn-success' : 'btn-danger'}`} type="button" id="dropDown" data-bs-toggle="dropdown" 
                aria-expanded="false">{filterSelect}&nbsp;</button>
              <ul className="dropdown-menu" aria-labelledby="dropDown">
                <li>
                  <button className="dropdown-item btn-primary" type="button" onClick={() => setFilterSelect('All')}>
                    All</button>
                </li>
                <li>
                  <button className="dropdown-item" type="button" onClick={() => setFilterSelect('Completed')}>
                    Completed</button>
                </li>
                <li>
                  <button className="dropdown-item" type="button" onClick={() => setFilterSelect('Not Completed')}>
                    Not Completed</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row todo-cards-row py-5 d-flex justify-content-center'>
            {
              filteredCards.length === 0 ? <h3 className='h3 text-center mb-4'>The To-Do list is craving attention.<br/> Time to add some tasks and<br/> make it shine!</h3> :
              filteredCards.map((card, index)=>{
                return <Card key={index} card={card} cardUpdate={cardUpdate} cardDelete={cardDelete} 
                filterChange={filterChange}/>
              })
            }
        </div>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;

