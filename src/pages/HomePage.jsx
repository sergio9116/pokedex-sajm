import React, { useRef }from 'react';
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import './styles/homepage.css';

const HomePage = () => {

  const dispatch= useDispatch();

  const navigate = useNavigate();

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');
  }

  return (
    <div className='home'>
      <img className='home__image' src='./assets/pokedex.webp' alt="pokedex image" />
      <h1 className='home__trainer'>Hi Trainer</h1>
      <h2 className='home__name'>To start give me your name</h2>
        <form className='home__form' onSubmit={handleSubmit}>
            <input ref={textInput} type="text" placeholder='your name' />
            <button>Start</button>
        </form>
      <footer className='home__footer'>
      </footer>
    </div>
  )
}

export default HomePage;