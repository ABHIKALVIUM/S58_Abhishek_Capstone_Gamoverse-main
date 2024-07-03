import React, { useState } from 'react';
import './Bag.css';
import ShopBagItem from '../components/ShopBagItem';

function Bag({games,reference}) {
  const [total,setTotal]=useState(0);

  return <section id="bag" className="bag" ref={reference}>
    <div className='container-fluid'>
      <div className='row mb-3'>
      <h1>My Bag</h1>
      </div>
    </div>
    {
      games.length===0?(
        <h2>Your bag is empty</h2>
      ):(
        <>
        <div className="row">
        <div className="table-responsive">
          <table className="shopBagTable table table-borderless align-middle">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Preview</th>
                <th scope="col">Game</th>
                <th scope="col">Price</th>
                <th scope="col">Discount</th>
                <th scope="col">Payment</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game,index)=>(
                <ShopBagItem index={index} key={game._id} game={game} />
              ))}
            </tbody>
          </table>
        </div>
        </div>
        <div className='row d-flex justify-content-between mt-5'>
          <div className='col-lg-2 d-flex align-items-center'>
            <p className="itemCount">Total Items: {games.length}</p>
          </div>
          <div className='col-log-10 d-flex justify-content-eng'>
            <div className='payment'>
              Total:
              <a href="#">
                Check out <i className='bi bi-wallet-fill'></i>
              </a>
            </div>
          </div>
        </div>
        </>
      )
    }
  </section>
}

export default Bag