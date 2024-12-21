import React from 'react'
import Image from 'next/image';


function page() {
  const products = [
    {
      name: "Espresso Martini",
      price: "£10.00",
      image: "/espresso.jpeg",
    },
    {
      name: "Cappuccino",
      price: "£10.00",
      image: "/capuccino.jpeg",
    },
    {
      name: "Latte",
      price: "£10.00",
      image: "/latte.jpeg",
    },
    {
      name: "Mocha",
      price: "£10.00",
      image: "/mocha.jpeg",
    },
  ];

  return (
    <>
    <div className='h-full'>
      <div className='main'>
        <div className='main-text'>
          <p className='poppins p'>Try Our</p>
          <h1 className='gravitas h1'>COFFEE</h1>
          <p className='poppins p'>Savor your coffee just the way you love it—hot or iced, black or creamy, sweetened or bold. Customize your brew and discover new ways to enjoy your favorite beverage.</p>
          <div className='home-buttons'>
            <button>Shop Beans</button>
            <button>Our Cafes</button>
          </div>
        </div>
        <div>
          <Image src={'/home.jpeg'} width={600} height={600} alt='' className=''/>
        </div>
      </div>
    </div>
    <div className='cont'>
        <ul>
          <li>Get 10% Off Your First Order</li>
          <li>Free Delivery in Pak</li>
          <li>Taste For Everyone</li>
        </ul>
    </div>
    <div className="product-section">
      <h2 className="section-title">Our Coffee</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Image src={product.image} alt={product.name} className="product-image" width={200} height={200}/>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
      <div className='coffee-buttons'>
        <button>Buy Now</button>
      </div>
    </div>
    </>
  )
}

export default page
