import React from 'react'

const CharacterCards = ({ item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.photoUrl} alt='character' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Affiliation:</strong> {item.affiliation}
                        </li>
                        <li>
                            <strong>Allies:</strong> {item.allies}
                        </li>
                        <li>
                            <strong>Enemies:</strong> {item.enemies}
                        </li>
                    </ul>
                     </div>
                </div>
                </div>
    )
}

export default CharacterCards
