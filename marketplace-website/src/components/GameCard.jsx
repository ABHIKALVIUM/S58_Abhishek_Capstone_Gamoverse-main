import React,{useContext} from 'react';
import './GameCard.css';
import GameRating from './GameRating';
import { AppContext } from '../App';

function GameCard({game}) {
  console.log(game,"game 7")
  const {library,setLibrary,bag,setBag}=useContext(AppContext);
  const handleAddToLibrary=game=>{
    setLibrary([...library,game])
  }

  const handleRemoveFromLibrary=game=>{
    setLibrary(library.filter(item=>item._id!==game._id))
  }

  const handleAddToBag=game=>{
    if(bag.includes(game)) return;
    setBag([...bag,game]);
  }
  return (
    <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className="gameCard">
        <img src={game.img_link} alt={game.name} className='img-fluid'/>
        <a href='#' className={`like ${library.includes(game)?'active':undefined}`}onClick={library.includes(game) ? ()=>handleRemoveFromLibrary(game):()=>handleAddToLibrary(game)}>
            <i className='bi bi-heart-fill'></i>
        </a>
        <div className='gameFeature'>
            {/* <span className='gameType'>{game.level}</span> */}
            {/* <GameRating rating={game./> */}
            <div className='gameTitle mt-4 mb-1'>{game.name} game</div>
        </div>
        <a href="#" className='addBag' onClick={()=>handleAddToBag(game)}>
          <i className='bi bi-bag-plus-fill'></i>
        </a>
        </div>
        </div>
  )
}

export default GameCard;