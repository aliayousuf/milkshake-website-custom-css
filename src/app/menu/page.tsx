import "./menu.css";
import Image from 'next/image';

const menuItems = [
  { name: 'Strawberry Delight', image: '/card1.avif' },
  { name: 'Chocolate Bliss', image: '/card2.avif' },
  { name: 'Vanilla Dream', image: '/card3.avif' },
  { name: 'Minty Fresh', image: '/card4.jpg' },
  { name: 'Banana Bonanza', image: '/card5.avif' },
  { name: 'Caramel Swirl', image: '/card6.avif' },
  { name: 'Cookies & Cream', image: '/card7.jpg' },
  { name: 'Mango Tango', image: '/card8.jpg' },
];

export default function Menupage() {
    return (
        <div className="menu-container">
            <h1 className="menu-title">Our Delicious Milkshakes</h1>
            <div className="cards-container">
                {menuItems.map((item, index) => (
                    <div className="milkshake-card" key={index}>
                        <Image 
                            src={item.image} 
                            alt={item.name} 
                            className="milkshake-image" 
                            width={300} 
                            height={300} 
                        />
                        <h3 className="milkshake-name">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}