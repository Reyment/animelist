import React from 'react'

const Pagination = ({page, setPage}) => {

  const scrolTop = () => {
    scrollTo({
      behavier: "smooth",
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrolTop()
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrolTop()
  }

  return (
    <div className='flex justify-center gap-4 py-4 px-2 text-color-primary md:text-2xl'>
      { page <= 1 ? null :
            <button onClick={handlePrevPage} className='transition-all hover:text-color-accent'>Prev</button>


      }
      <p>{page} of 1037</p>
      <button onClick={handleNextPage} className='transition-all hover:text-color-accent'>Next</button>
    </div>
  )
}

export default Pagination