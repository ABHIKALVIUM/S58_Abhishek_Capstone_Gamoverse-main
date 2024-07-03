import React from 'react';
import './Home.css';
import GameSwiper from '../components/GameSwiper';
import GameCard from '../components/GameCard';

function Home({games,reference}) {
  console.log(games,"line 7","home")
  return (
    <section id="home" className='home active' ref={reference} >
        <div className="container-fluid">
            <div className="row mb-4 mt-4">
              <h1  id="game1">Game Swiper</h1>
                <GameSwiper games={games} />
            </div>
            {/* <div className='row'>
              <div className='col-lg-6'>
                <h2 className='sectionTitle'>Games on promotion</h2>
              </div>
              <div className='col-lg-6 d-flex justify-content-end align-items-center'>
                <a href="#" className='viewMore'>
                  View More Games <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div> */}
            <div >
              <div id='promo' >
                <h2 >Games on promotion</h2>
              </div>
              <div >
                <a href="#">
                  View More Games <i></i>
                </a>
              </div>
            </div>
            <div className='row'>              {
                games.length>0 && games.map(game=>{
                  return <GameCard key={game._id} game={game}/>
                  
                  // <h1>game gsme</h1>
                })
              }
            </div>
        </div> 
    </section>
  )
}

export default Home