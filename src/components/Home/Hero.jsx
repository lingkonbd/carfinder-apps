import React from 'react';
import herobg from '../../assets/hero-bg.png';
import car from '../../assets/hero-img.webp';

const Hero = () => {
    return (
        <div className="hero__area" style={{ backgroundImage: `url(${herobg})` }}>
            <div className="container mx-auto px-4">
                <div className="row">
                    <div className="lg:w-1/3 w-full pt-[40px] md:pt-[70px]">
                        <h1 className="md:text-6xl text-4xl font-bold leading-tight mb-5 text-white">Easy way to find the right car</h1>
                        <p className="text-lg text-white opacity-70">Finder is a leading digital marketplace for the automotive industry that connects car shoppers with sellers.</p>
                    </div>
                    <div className="lg:w-3/5 w-full ml-auto p-8 md:p-12">
                        <img className='mx-w-[800px]' src={car}  alt="car"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;