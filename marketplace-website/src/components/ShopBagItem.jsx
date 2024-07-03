import React, {useContext} from 'react';
import './ShopBagItem.css';
import {AppContext} from '../App';

function ShopBagItem(game,index) {
  const {bag,setBag}=useContext(AppContext);

  const handleRemoveFromBag = game =>{
    setBag(bag.filter(item=>item._id !==game._id));
  };

  return (
    <tr className="ShopBagItem">
        <th scope="row">{index+1}</th>
        <td>
            <img src={game.img_link} alt="" className='img-fluid'></img>
        </td>
        <td>{game.name}</td>
        <td>
          <a href='#' onClick={()=>handleRemoveFromBag(game)}>
            <i class="bi bi-trash"></i>
          </a>
        </td>
    </tr>
    
  )
}

export default ShopBagItem;