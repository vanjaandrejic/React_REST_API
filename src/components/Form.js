import React from 'react'

export default function Form({ search }) {

  const inputHandle = (e) => {
    console.log(e.target.value)
    search(e.target.value)
  }

  return (
    <form>
      <input type="search" placeholder='Search' onChange={inputHandle}></input>
      <input type="search" placeholder='Filter by Author'></input>
    </form>
  )
}

