import { useState } from 'react'
import './Search.css'

const Search = ({SearchPru}) => {

  const [IntValue, setIntValue] = useState('')

  const onSearch = (e) =>{
    e.preventDefault();
    SearchPru(IntValue)
    setIntValue('')
   
}
  return (
    <div>
    <nav className="navbar navbar-light bg-gray mx-shadow" >
    <div className="container-fluid">
      <a className="navbar-brand " href='/'><i class="fa-brands fa-product-hunt"></i>roduct</a>
      <form className="d-flex">
        <input className="form-control me-2"
         type="search" 
         placeholder="Search"
         onChange={(e)=>setIntValue(e.target.value)}
            value={IntValue}
        
        aria-label="Search"/>
        <button onClick={onSearch} className="btn btn-primary" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  </nav>
    </div>
  )
}

export default Search
