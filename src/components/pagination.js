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
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <a className='page-link'
                onClick={prevPage}
                href="#">
                    &larr;Prev
                </a>
            </li>
           <li className='page-item'>
            <a className='page-link'
            onClick={nextPage}
            href="#">
                Next&rarr;
            </a>

          </li>
        </ul>
        </nav>
  )
}

export default Pagination