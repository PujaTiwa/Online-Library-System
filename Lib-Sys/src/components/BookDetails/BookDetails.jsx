import Loading from '../Loader/Loader';
import coverImg from '../../assets/cover_not_found.jpg'
import {FaArrowLeft} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BookDetails.css';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    async function getBookDetails() {
      try {
        const resp = await fetch(`${URL}${id}.json`);
        const data = await resp.json()

        if(data) {
          const {description, title, covers, sub_places, sub_times, subjects} = data;
          const newBook = {
            description: description ? description : "No description found..",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            sub_places: sub_places ? sub_places.join(", ") : "No subject places found",
            sub_times: sub_places ? sub_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook)
        } else {
          setBook(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)     
      }
    }
    getBookDetails()
  }, [id]);

  console.log(book);
  if(loading) return <Loading />

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.cover_img} alt='cover img' />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span className='fw-6 fs-24'>{book?.description}</span>
            </div>
            <div className='book-details-item '>
            <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.sub_places}</span>
            </div>
            <div className='book-details-item '>
            <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.sub_times}</span>
            </div>
            <div className='book-details-item '>
            <span className='fw-6'>Subjects: </span>
              <span className='text-italic'>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails