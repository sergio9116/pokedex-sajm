import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeinfo.css';

const PokeInfo = () => {

    const params = useParams();

    const [pokemon, getPokemon] = useFetch();

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        getPokemon(url);
    }, []);

    console.log(pokemon);

  return (
    <>
    <header className='pokeinfo__header'></header>
        <section className='pokeinfo'>
        <div className={`pokeinfo__clase${pokemon?.types[0].type.name}`}></div>
        <figure className='pokeinfo__img'>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image"/>
        </figure>
        <span className='pokeinfo__id'># {pokemon?.id}</span>
        <h2 className='pokeinfo__name'>{pokemon?.name}</h2>
        <ul className='pokeinfo__data'>
            <li><span>weight</span><span>{pokemon?.weight}</span></li>
            <li><span>height</span><span>{pokemon?.height}</span></li>
        </ul>
        <div className='pokeinfo__article'>
            <article>
                <h3 className='title'>type</h3>
                <ul className='pokeinfo__type'>
                    {
                     pokemon?.types.map(type => (
                        <li key={type.type.url} className={`pokeinfocard---${pokemon?.types[0].type.name}`}>{type.type.name}</li>
                     ))
                    }
                </ul>
            </article>
            <article>
                <h3 className='title'>skills</h3>
                <ul className='pokeinfo__abilities'>
                    {
                     pokemon?.abilities.map(skill => (
                        <li key={skill.ability.url}>{skill.ability.name}</li>
                     ))
                    }
                </ul>
            </article>
        </div>
        <h2 className='title'>Stats</h2>
        <ul className='pokeinfo__stats'>
            {
              pokemon?.stats.map(stat => (
                <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}/150</span>
                <div className='stats__bar'><div style={{width: `${stat.base_stat/1.5}%`}} className='stats__prog'></div></div></li>
              ))
            }
        </ul>
        <h2 className='pokeinfo__mov'>Movements</h2>
        <ul className='pokeinfo__move'>
            {
             pokemon?.moves.map(move => (
                <li className='list' key={move.move.url} >{move.move.name}</li>
             ))
            }
        </ul>
    </section>
    </>
  )
}

export default PokeInfo;

