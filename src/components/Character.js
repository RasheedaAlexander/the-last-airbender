import React from 'react'
import CharacterCards from './CharacterCards'


const Character = ({ items, isLoading }) => {
    return isLoading ? (
    <h1>Loading...</h1> 
    ) : (
    <section className="cards">
        {items.map((item) => (
            <CharacterCards key={item._id} item={item}></CharacterCards>
        ))}
    </section>
    )
}

export default Character
