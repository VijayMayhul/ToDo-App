import React from 'react'

const Filter = ({filterSelect, setFilterSelect}) => {
  return (
    <>
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
    </>
  )
}

export default Filter