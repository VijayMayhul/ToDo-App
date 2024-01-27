

function Card({card, cardUpdate, cardDelete, filterChange}) {
  return (
    <>
    <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card p-2 h-100 bg-warning">
            <div className="card-body">
                <p><b>Name : </b> {card.TodoName}</p>
                <p><b>Description : </b> {card.TodoDescription}</p>
                <p className="d-inline">
                <b><label htmlFor="dropDown">Status Filter : &nbsp;</label></b>
                </p>
                <div className="dropdown d-inline">
                  <button className={`btn btn-outline-dark text-white dropdown-toggle ${card.status === 'Completed' ? 
                  'btn-success': 'btn-danger'}`}
                   type="button" id="dropDown" data-bs-toggle="dropdown"
                   aria-expanded="false">{card.status}&nbsp;
                   </button>
                  <ul className="dropdown-menu" aria-labelledby="dropDown">
                    <li>
                      <button className="dropdown-item" type="button" onClick={() => filterChange('Completed', card.id)}>
                        Completed</button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button" onClick={() => filterChange('Not Completed', card.id)}>
                        Not Completed</button>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="card-footer bg-transparent border-top-0 d-flex justify-content-end">
                <a href="#!"  type="button" className="btn btn-primary px-4 me-3" 
                onClick={()=> cardUpdate(card.TodoName, card.TodoDescription, card.id)}>Edit</a>
                <a href="#!" type="button" className="btn btn-danger px-3 me-2"
                onClick={()=> cardDelete(card.id)}>Delete</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card