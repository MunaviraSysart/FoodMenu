import React from 'react';
import { Table } from 'react-bootstrap';

export const SelectedFoodList = () => {
    const foodItems = JSON.parse(localStorage.getItem('items'));
    return (
        <>
            <div>
                <h3 style={{ margin: '20px' }}>Your choosen dishes are here...</h3>
                <div className='choosen'>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Item Name</th>
                                <th>Item Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foodItems?.map((val, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{val.date}</td>
                                            <td>{val.item}</td>
                                            <td><img src={val.img} width='150px' height='150px'/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
