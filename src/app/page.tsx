import Image from 'next/image';
import React from 'react';
import './page.css'; // Import the CSS file
import Link from 'next/link';

const milkshakes = [
  { name: 'Strawberry Delight', image: '/arrival1.jpg' },
  { name: 'Chocolate Bliss', image: '/arrival2.jpg' },
  { name: 'Vanilla Dream', image: '/arrival3.jpeg' },
  { name: 'Minty Fresh', image: '/arrival4.jpeg' },
];

const Page = () => {
  return (
    <>
      <div className="responsive-div">
        <div className="text-container">
          <h1 className="heading">Milkshakes</h1>
          <p className="description">Indulge in our creamy, delicious milkshakes made with the finest ingredients. Perfect for any time of the day!</p>
          
          <div className="button-container">
            <button className="milkshake-button"><Link href="/contact">🍓 Order Now </Link></button>
            <button className="milkshake-button"> <Link href={"/menu"}>🍓 View Menu </Link> </button>
          </div>
        </div>
        
        <Image 
          src="/vector2.png" 
          alt="Lower Right Vector" 
          className="lower-right-image" 
          width={40} 
          height={40} 
        />
        <Image 
          src="/sm1.png" 
          alt="Right Side Image" 
          className="right-side-image" 
          width={500} 
          height={500} 
        />
      </div>

      {/* New Section for Latest Arrival Milkshakes */}
      <div className="latest-arrivals">
        <h2 className="arrivals-heading">Latest Arrival Milkshakes</h2>
        <div className="cards-container">
          {milkshakes.map((milkshake, index) => (
            <div className="milkshake-card" key={index}>
              <Image 
                src={milkshake.image} 
                alt={milkshake.name} 
                className="milkshake-image" 
                width={150} 
                height={150} 
              />
              <h3 className="milkshake-name">{milkshake.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;