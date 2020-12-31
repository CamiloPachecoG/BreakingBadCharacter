import React from 'react';
import Header from './components/Header';
import CharacterItem from './components/CharacterItem';
import { useFetch } from './hooks/useFetch';
import { useCounter } from './hooks/useCounter';
import './App.css'

export const BreakingBad = () => {

    const { counter, increment } = useCounter(1); //inicializado en 1

    const { data } = useFetch( `https://www.breakingbadapi.com/api/characters/${ counter }` );
    
    return (
        <div className="container">
            <Header />
            <CharacterItem increment = { increment } data = { data } />
        </div>
    )
}
