import React, { useState, useContext } from 'react';
import './GameCard.css';
import GameRating from './GameRating';
import { AppContext } from '../App';

function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToLibrary = game => {
    setLibrary([...library, game]);
  };

  const handleRemoveFromLibrary = game => {
    setLibrary(library.filter(item => item._id !== game._id));
  };

  const handleAddToBag = game => {
    if (bag.includes(game)) return;
    setBag([...bag, game]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='col-xl-3 col-lg-4 col-md-6'>
      <div className="gameCard">
        <img src={game.img_link} alt={game.name} className='img-fluid' />
        <a href='#' className={`like ${library.includes(game) ? 'active' : ''}`} onClick={library.includes(game) ? () => handleRemoveFromLibrary(game) : () => handleAddToLibrary(game)}>
          <i className='bi bi-heart-fill'></i>
        </a>
        <div className='gameFeature'>
          <div className='gameTitle mt-4 mb-1'>{game.name} GAME</div>
        </div>
        <a href="#" className='addBag' onClick={() => handleAddToBag(game)}>
          <i className='bi bi-bag-plus-fill'></i>
        </a>
        <button className='buyButton' onClick={toggleModal}>Buy</button>
        {isModalOpen && (
          <div className='modal'>
            <div className='modalContent'>
              <span className='closeButton' onClick={toggleModal}>&times;</span>
              <h2 className='modalGameName'>{game.name}</h2>
              <p className='modalDescription'>{game.description}</p>
              <div className='links'>
                <a href={game.Epic} target='_blank' rel='noopener noreferrer'>Epic Games</a>
                <a href={game.Steam} target='_blank' rel='noopener noreferrer'>Steam</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameCard;