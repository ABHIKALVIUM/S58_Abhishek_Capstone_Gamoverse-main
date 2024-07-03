import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './GameSwiper.css';

function GameSwiper() {
  const [data, setData] = useState([]);
  console.log(data,"data 11")

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8000/data/getdata");
      const fetchedData = await response.json();
      // console.log(fetchedData);
      return fetchedData;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(data);

  return (
    <> 
    {data.length>0 && data.map((element, index) => <h1>Game NAme</h1>
        // <SwiperSlide key={index}>
        // </SwiperSlide>
         )}
    <Swiper
      className='swiper'
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      {data.map((element, index) => <SwiperSlide key={index}>
          <img src={element.img_link} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
        
      )}
    </Swiper>
    </>
  );
  
}

export default GameSwiper;
