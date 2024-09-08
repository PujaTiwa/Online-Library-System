/* eslint-disable no-unused-vars */
import React from 'react';
import { BiLoaderCircle } from "react-icons/bi";
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      {/* <img src={LoaderImg} alt='loader' /> */}
      <BiLoaderCircle />
    </div>
  )
}

export default Loader