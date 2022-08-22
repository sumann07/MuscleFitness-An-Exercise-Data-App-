import React from 'react'

const Pagination=(props)=> {
    let {nPages,currentPage,setCurrentPage} =props;
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
  return (
    <nav>
        <ul className='pagination justify-content-center my-3 mx-5'>
            <li className='page-item'>
                <a className='page-link'
                onClick={prevPage}
                href="#exer">
                    &larr;Prev
                </a>
            </li>
           <li className='page-item'>
            <a className='page-link'
            onClick={nextPage}
            href="#exer">
              Next &rarr;
            </a>

          </li>
        </ul>
        </nav>
  )
}

export default Pagination