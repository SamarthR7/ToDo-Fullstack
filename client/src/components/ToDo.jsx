import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { baseURL } from "../utils/constant";

const ToDo = ({text, id, setUpdateUI}) => {

  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <>
    <div className="contains">
        <div className="toDo">{text}</div>
        <div className="icons">
            <ImCancelCircle className="icon" onClick={deleteTodo}/>
        </div>
    </div>
    </>
    
  )
}

export default ToDo;