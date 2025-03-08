import React from 'react';
import ShoppingCart from './../../component/Shopping Cart/Shopping Cart';


const Review = () => {
  return (

    <div className="reviews">          {/* blocks  */}

      <div className="customerReviews">
        <div className="leftcontiner">
          <span>Customer reviews</span>
          <span className='stars'>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            4.7 out of 5
          </span>
          <span className='stars'>7,900 global ratings</span>
        </div>
        <div className="rightcontiner">
          <div className="star">
            <span>5 Star </span>
            <div className="tape"></div>
            <span>95%</span>
          </div>
          <div className="star">
            <span>5 Star </span>
            <div className="tape"></div>
            <span>95%</span>
          </div>
          <div className="star">
            <span>5 Star </span>
            <div className="tape"></div>
            <span>95%</span>
          </div>
          <div className="star">
            <span>5 Star </span>
            <div className="tape"></div>
            <span>95%</span>
          </div>
          <div className="star">
            <span>5 Star </span>
            <div className="tape"></div>
            <span>95%</span>
          </div>
        </div>
      </div>

      <div className="CustomerSay">
        <p>Lorem ipsum dveniam error voluptatem laudantium. Quibusdam maiores facere beatae animi mollitia fugiat aliquam molestias nisi quo dolorum ad et nihil praesentium, asperiores impedit optio architecto. ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatum a hic culpa fugiat tenetur atque omnis consequuntur ratione? Tempore doloremque iure adipisci nobis doloribus beatae delectus quaerat odio eius? Mollitia nobis consectetur nisi qui quae, repellendus est eos? Earum repellendus esse distinctio pariatur deserunt. Omnis iure suscipit ab assumenda!</p>
        <div className="filter">
          <span className='colo'><i class="fa-regular fa-square-check"></i> Ease of assembly</span>
          <span className='colo'><i class="fa-regular fa-square-check"></i> value</span>
          <span className='colo'><i class="fa-regular fa-square-check"></i> Back support</span>
          <span>comfort</span>
          <span>Quality</span>
          <span>Durability</span>
          <span>fit</span>
          <span className='colo2'><i class="fa-solid fa-minus"></i>Size</span>

        </div>





      </div>

    </div>
  );
}

export default Review;