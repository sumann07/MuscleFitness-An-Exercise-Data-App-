import React from 'react'

function Spinner() {
    return (
        <>
        <div className='text-center'>
            <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        </>
    )
}

export default Spinner