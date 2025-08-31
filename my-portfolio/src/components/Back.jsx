import { useNavigate } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Back = () => {

    const navigate =useNavigate();

  return (
    <>
    <div className="absolute mt-10 left-2">

      <button className="px-2" onClick={()=> navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} className="text-white text-xl" />
      </button>
    </div>
    </>
    
  )
}

export default Back
