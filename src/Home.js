import "./Home.css";
import React from 'react';
import Product from './Product';

function Home() {
    return (
        <div className="home" >
            <div className="home__container">
                <img 
                className="home__image"
                src="https://raw.githubusercontent.com/Cher-253/LifeSaverImages/main/hospitalicon.webp"
                alt= ""
                />

                <div className="home__row">
                    <Product 
                    title ="Hospital Users Login below:"
                    // price = {39.99} 
                    image = "https://raw.githubusercontent.com/Cher-253/LifeSaverImages/main/hospitaliconSection.png"
                    // rating = {5}
                    />
                    

                    <Product 
                    title ="Donors Login below:"
                    // price = {59.99} 
                    image = "https://github.com/Cher-253/LifeSaverImages/blob/main/donoricon.jpeg?raw=true"
                    // rating = {4.}
                    />

                </div>

                <div className="home__row">
                    <Product 
                    title ="Apple Pencil (2nd Generation)"
                    price = {124.98} 
                    image = "https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_UL640_QL65_.jpg"
                    rating = {5}
                    />
                    <Product 
                    title ="SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN"
                    price = {20.99} 
                    image = "https://m.media-amazon.com/images/I/810o-i5jpiL._AC_UL640_QL65_.jpg"
                    rating = {5}
                    />
                    <Product 
                    title ='Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)'
                    price = {139.97} 
                    image = "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_FMwebp_QL65_.jpg"
                    rating = {4}
                    />


                </div>

                <div className="home__row">
                    <Product 
                    title ="AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
                    price = {289.00} 
                    image = "https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_UL640_FMwebp_QL65_.jpg"
                    rating = {5}
                    />

                </div>

            </div>  
        </div>
    )
}

export default Home
