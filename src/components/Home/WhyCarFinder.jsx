import React from 'react';
import { ImBullhorn } from 'react-icons/im';
import Minutes from '../../assets/img/whyCarFinder/Minutes.svg';
import carImg from '../../assets/img/whyCarFinder/car.svg';
import pricing from '../../assets/img/whyCarFinder/transparent.svg';
const WhyCarFinder = () => {
    return (
        <div className='why-car-Finder py-12'>
            <div className="container">
                <h2 className="text-4xl font-bold mb-7 text-center title__before">
                    <span className="bg-white px-6">
                        <ImBullhorn className="mr-3 inline-block text-primary"></ImBullhorn>
                        Why Car Finder?
                    </span>
                </h2>
                <div className="grid gap-2 md:grid-cols-3 grid-cols-1 mt-12">
                    <div className="why-car-Finder-item p-6 shadow-lg text-center border">
                        <div>

                            <div className="avatar">
                                <div className="w-24 ">
                                    <img src={pricing} alt="Author" />
                                </div>
                            </div>
                        </div>
                        <h2 className='font-semibold text-[1.375rem]'>Transparent pricing</h2>
                        <p className="">
                            No surprises here. See how much you'll pay on cars you like.
                        </p>
                    </div>
                    <div className="why-car-Finder-item p-6 shadow-lg text-center border">
                        <div>

                            <div className="avatar">
                                <div className="w-24 ">
                                    <img src={Minutes} alt="author" />
                                </div>
                            </div>
                        </div>
                        <h2 className='font-semibold text-[1.375rem]'>Minutes, not hours</h2>
                        <p className="">
                            Time saving tools to help you find the right car in a snap.
                        </p>
                    </div>
                    <div className="why-car-Finder-item p-6 shadow-lg text-center border">
                        <div>
                            <div className="avatar">
                                <div className="w-24 ">
                                    <img src={carImg} alt="author" />
                                </div>
                            </div>
                        </div>
                        <h2 className='font-semibold text-[1.375rem]'>Shop your way</h2>
                        <p className="">
                            Your own pace, your own space. Shop online where and when it's convenient for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyCarFinder;