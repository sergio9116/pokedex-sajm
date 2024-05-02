import React from 'react';
import './styles/pokePage.css';

const PokePages = ({page, setPage, total}) => {

    const handlePrev = (num) => {
        if (page > num) {
            setPage(page - num);
        } else {
            setPage(total);
        }
    }

    const handleNext = (num) => {
        if (page < total - num){
            setPage(page + num);
        } else {
            setPage(1);
        }
    }

   return (
     <div className='pokepage'>
         <button onClick={()=>{handlePrev(3)}}>{'<<'}</button>
         <button onClick={()=>{handlePrev(1)}}>{'<'}</button>
         <span>{page} / {total} </span>
         <button onClick={()=>{handleNext(1)}}>{'>'}</button>
         <button onClick={()=>{handleNext(3)}}>{'>>'}</button>
     </div>
  )
}

 export default PokePages;