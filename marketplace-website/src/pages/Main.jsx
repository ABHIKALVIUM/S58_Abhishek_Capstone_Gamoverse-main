import React, { useState, useEffect,useRef,useContext} from "react";
import {AppContext} from '../App'
import './Main.css';
import Sidemenu from "../components/Sidemenu";
import Home from "./Home";
import Header from "./Header";
import Bag from './Bag';
import Categories from './Categories';
import MyLibrary from './MyLibrary';

function Main() {
    const {library,bag}=useContext(AppContext);
    const [active, setActive] = useState(false);
    const [games, setGames] = useState([]);

    const homeRef=useRef();
    const categoriesRef=useRef();
    const libraryRef=useRef();
    const bagRef=useRef();

    const sections=[ 
        {
            name:'home',
            ref:homeRef,
            active:true,
        }, 
        {
            name:'categories',
            ref:categoriesRef,
            active:false,
        },
        {
            name:'library',
            ref:libraryRef,
            active:false,
        },
        {
            name:'bag',
            ref:bagRef,
            active:false,
        },

    ]


    const handleToggleActive = () => {
        setActive(!active);
    }

    const handleSectionActive=target=>{
        sections.map(section=>{
            section.ref.current.classList.remove('active');
            if(section.ref.current.id===target){
                section.ref.current.classList.add('active');
            }
            return section;
        });
    };

    const fetchData = () => {
        fetch('http://localhost:8000/data/getdata')
            .then(res => res.json())
            .then(data => {
                setGames(data);
                console.log(data);
            })
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(games, "line 29");

    return (
        <main>
            
            <Sidemenu active={active} sectionActive={handleSectionActive} />            

            <div className={`banner ${active ? 'active' : undefined}`}>
            <Header toggleActive={handleToggleActive}/>
            <div className="container-fluid">
                {games && games.length>0 &&(                
                 <>
                 <Home games={games} reference={homeRef}/>
                 <Categories games={games} reference={categoriesRef}/>
                <MyLibrary games={library} reference={libraryRef}/>
                <Bag games={bag} reference={bagRef}/>
                </>
           ) }
                
                </div>

                

            </div>
        </main>
    )
}

export default Main;
