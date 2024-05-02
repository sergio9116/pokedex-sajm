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
      <img className='home__image' src='https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kr-HNDP0HsGnQHkkrTEmw0u-2CdfDWeEuF4INIUZTtgNGTRivDxJ0ArcwBzfUipWub8QBR4q0A8pqh90nBVV7jlzIN-8mOJ65hEiLYUz4V0bigac0EbrRLGXLU94ZbNpkK6ODXSegalSxV4i89Ah7VE4RbWBLmVziFEmGtw60tVyoCnOHUmrXwTo2yFT5XsVxkUIa6aQSCBmqFDGxj9AhCXEdE4A9IbLK51S8JlTl9VQV0PqW5kOhscULECBPK5ggTpbMIKRVM6y~JIIMXbJaFl7mu7KNDHNEea5UAcMT8xAIWNBEhzciTpVvUZZT5Hcy2D4a5DQOSXTqSgqoceacw__' alt="pokedex image" />
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