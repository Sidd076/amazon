import React from 'react';
import Navbar from './navbar';
import './home.css';
import Card from './card';
function Home({image, title,price,rating}) {
    return (
        <div class = "home">
            <Navbar/>
            <div className="banner">
                <img src="./banner.jpg" alt="banner" />
                <img src="./mobile_banner.jpg" alt="banner" />
            </div>
            <div className="main">
            <Card
  image={'https://m.media-amazon.com/images/I/71okYxJxqAL._AC_SY200_.jpg'}
  price={25000}
  rating={3}
  title={'Laptop'}
/>
<Card
  image={'https://m.media-amazon.com/images/I/71okYxJxqAL._AC_SY200_.jpg'}
  price={25000}
  rating={3}
  title={'Laptop'}
/>
<Card
  image={'https://m.media-amazon.com/images/I/71okYxJxqAL._AC_SY200_.jpg'}
  price={25000}
  rating={3}
  title={'Laptop'}
/>
<Card
  image={'https://m.media-amazon.com/images/I/71okYxJxqAL._AC_SY200_.jpg'}
  price={25000}
  rating={3}
  title={'Laptop'}
/>

                
                

            </div>

        </div>
    );
}

export default Home;