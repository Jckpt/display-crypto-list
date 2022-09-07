import React from "react"
import { useState } from "react"
function PageButtons({ setPage, page, isPreviousData }) {
  const [over, setOver] = useState(false)
  const prevPage = () => {
    setPage((old) => Math.max(old - 1, 1))
  }
  const nextPage = () => {
    if (!isPreviousData) {
      setPage((old) => old + 1)
    }
  }
  return (
    <div className='btn-group mt-6 mb-6'>
      <button className='btn' onClick={prevPage} disabled={page === 1}>
        «
      </button>
      <button
        className='btn w-18'
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onClick={() => setPage(1)}>
        {over ? "Reset" : `Page ${page}`}
      </button>
      <button
        className='btn'
        onClick={nextPage}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData}>
        »
      </button>
    </div>
  )
}

export default PageButtons
