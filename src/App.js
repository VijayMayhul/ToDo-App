
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import { useState } from 'react';

import Card from './Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Filter from './components/Filter';

function App() {
  
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [buttonAdd, setButtonAdd] = useState('Add ToDo');
  const [editingCardId, setEditingCardId] = useState(null);
  const [cardDetails, setCardDetails] = useState([]);
  // const [state, setState] = useState('Not Completed');
  const [filterSelect, setFilterSelect] = useState('All');

  //Adding new ToDo's
  let Add_UpdateToDo = (todoN, todoD) => {
    if (buttonAdd === 'Add ToDo') {
      let obj = {
        TodoName: todoN,
        TodoDescription: todoD,
        id: Date.now(),
        status: 'Not Completed'
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
    // setState(filSta);
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
        <Form todoName={todoName} setTodoName={setTodoName} todoDescription={todoDescription} 
          setTodoDescription={setTodoDescription} buttonAdd={buttonAdd} Add_UpdateToDo={Add_UpdateToDo}/>
        <Filter filterSelect={filterSelect}  setFilterSelect={setFilterSelect}/>
        <div className='row todo-cards-row py-5 d-flex justify-content-center'>
            {
              filteredCards.length === 0 ? <h3 className='h3 text-center mb-4'>The To-Do list is craving attention.<br/> Time to add some tasks and<br/> make it shine!</h3> :
              filteredCards.map((card)=>{
                return <Card key={card.id} card={card} cardUpdate={cardUpdate} cardDelete={cardDelete} 
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
