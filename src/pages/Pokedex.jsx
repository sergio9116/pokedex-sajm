import React, { useEffect, useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import './styles/pokedex.css';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';
import PokePages from '../components/pokedex/PokePages';

const Pokedex = () => {

    const [page, setPage] = useState(1);
    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [pokemons, getPokemons, getType] = useFetch();

    const trainer = useSelector(store => store.trainer);

    useEffect(() => {
        if (selectValue) {
            getType(selectValue);
        } else {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=1302';
            getPokemons(url);
        }
    }, [selectValue]);
    
    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue(textInput.current.value.toLowerCase().trim());
        textInput.current.value = '';
        setPage (1); 
    }

    const pokeSearch = (poke) => {
        const perName = poke.name.includes(inputValue);
        return perName;
    }

    const quantity = 10;
    const total = Math.ceil(pokemons?.results.filter(pokeSearch).length / quantity); 
    const pagination = () => {
        const end = quantity * page;  
        const start = end - quantity;
        return pokemons?.results.filter(pokeSearch).slice(start, end); 
    }

    //console.log(pagination);

  return (
    <>
    <header className='pokedex__header'></header>
    <section className='pokedex'>
        <h2 className='pokedex__title'><span>Welcome {trainer},  </span>  Here you can find your favorite pokemon</h2>
        <div className='pokedex__form'>
            <form onSubmit={handleSubmit}>
                <input ref={textInput} type="text" placeholder='Search your pokemon'/>
                <button>Search</button>
            </form>
            < PokeSelect
                setSelectValue={setSelectValue}  
            />
        </div>
        <PokePages
            page={page}
            setPage={setPage}
            total={total}
        />
        <div className='pokedex__container'>
            {
               pagination()?.map((poke) => (
                <PokeCard
                    key={poke.url}
                    url={poke.url}
                />
               )) 
            }
        </div>
        <PokePages
            page={page}
            setPage={setPage}
            total={total}
        />
    </section>
    </>
  )
}

export default Pokedex;