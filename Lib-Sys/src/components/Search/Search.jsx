import {FaSearch} from 'react-icons/fa';
import './Search.css';
import { useGlobalContext } from '../../context';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const {setSearchItem, setResultTitle} = useGlobalContext()
  const searchText = useRef('')
  const navigate = useNavigate()

  useEffect(() => searchText.current.focus(), [])
  const handleSubmit = (e) => {
    e.preventDefault()
    let tempsearchItem = searchText.current.value.trim();

    if((tempsearchItem.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchItem("the lost world..")
      setResultTitle("Enter book which you are searching ...")
    } else {
      setSearchItem(searchText.current.value)
    }

    navigate('/book')
  };

  return (
    <div className="search">
      <div className="container">
        <div className="search-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-element flex flex-sb bg-white">
              <input type="text" 
              className="form-control"
              placeholder="The Lost World ..." ref={searchText} />
              <button type="submit" className="flex flex-c">
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search;