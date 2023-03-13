import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const query = queryString.parse(location.search)
  const {q} = query

  console.log(query)

  const { onInputChange,searchText } = useForm({
    searchText:''
  })


  const onSubmit = (event) =>{
    event.preventDefault();
    if(searchText.trim().length  <= 1 ) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`)
    console.log({searchText})
  }
  

  return (
    <>
    <h1>Search</h1>
    <hr />
    <div className="row">
      <div className="col-5">
        <h4>Buscar</h4>
        <hr />
        <form onSubmit={onSubmit}>
          <input 
          type="text" 
          placeholder="Buscar heroe"
          className="form-control"
          name="searchText" 
          autoComplete="off" 
          onChange={onInputChange}
          value={searchText} />
          <button 
          className="btn btn-outline-primary mt-1">
            Buscar
          </button>
        </form>
      </div>
      
      <div className="col-7">
        <h4>Resultados</h4>
        <hr />

          <div className="alert alert-primary">
            Buscar un heroe
          </div>

          <div className="alert alert-danger">
            No hay heroes con ese nombre {q}
          </div>

          {/* <HeroCard/> */}

      </div>

    </div>
    </>
  )
}
