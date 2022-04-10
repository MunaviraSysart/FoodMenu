import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

export const Home = () => {
    return (
        <>
            <h5 className='text-center mt-2'><i>It's all about good food & taste</i></h5>
            <div className='carousal'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="/images/food3.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="/images/food4.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="/images/food5.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
