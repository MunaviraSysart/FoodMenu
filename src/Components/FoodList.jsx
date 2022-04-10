import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { FoodItemCard } from './FoodItemCard';

export const FoodList = ({ props }) => {
    const [items, setItems] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    //get food items
    const foodList = async () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const res = await axios.get(url);
        res?.data && setItems(res?.data?.categories)
        setIsLoaded(false)
    }

    useEffect(() => {
        foodList();
    }, []);

    //console.log('itemss', items)

    return isLoaded ? (
        <div className="loading" />
    ) : (
        <>
            {
                !props ?
                    <div className='alertbox'>
                        <Alert variant="danger">
                            <Alert.Heading>Oh snap! Please login..!</Alert.Heading>
                            <p>
                                Please login with your credentials and try again.... As per your recomended
                                calorie, choose your favourite food items and enjoy it.
                                It's all about good food and taste.
                            </p>
                        </Alert>
                    </div> :

                    <div>
                        <h2 className='text-center mt-3'><b>Choose your Dishes</b></h2>
                        <p className='text-center mt-4'>As per your recomended calorie, choose your dishes from below</p>

                        <FoodItemCard items={items}/>
                    </div>
            }

        </>
    )
}
