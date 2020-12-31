import React from 'react'

const CharacterItem = ({ data, increment }) => {

    const { img, name, birthday, nickname, portrayed, status } = !!data && data[0];

  return (
    <div className="container">

        <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
            <img src={ img } alt='' />
            </div>
            <div className='card-back'>
            <h1>{ name }</h1>
            <ul>
                <li>
                <strong>Actor Name:</strong> { portrayed }
                </li>
                <li>
                <strong>Nickname:</strong> { nickname }
                </li>
                <li>
                <strong>Birthday:</strong> { birthday }
                </li>
                <li>
                <strong>Status:</strong> { status } 
                </li>
            </ul>
            </div>
        </div>
        </div>

        <button onClick={ increment } className="btn">Next Character</button>
    </div>
  )
}

export default CharacterItem