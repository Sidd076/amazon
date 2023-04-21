import React from 'react';
import Rating from '@mui/material/Rating';
import './card.css';
import { useStateValue } from '../../StateProvider';
function Card({ image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("basket >>>>", basket);
    const addToBasket = (e) => {
      e.preventDefault();
  
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          title,
          price,
          image,
          rating,
        },
      });
    };
    return (
        <div className='container'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="desc">
                <h3>
                {title}
                </h3>
                <Rating
                    name="text-feedback"
                    precision={0.5}
                    defaultValue={rating}
                    readOnly
                />
                <p>{price}</p>
                <button onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;