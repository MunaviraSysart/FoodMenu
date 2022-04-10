import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';


export const FoodItemCard = ({ items }) => {
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(moment().format().substring(0, 10));
    const [endDate, setEndDate] = useState(moment().add(5, 'days').format().substring(0, 10));
    const [dateList, setDateList] = useState();
    const [checkedDate, setCheckedDate] = useState();
    const [chooseItems, setChooseItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const navigate = useNavigate();

    //for modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //dates between two dates
    const getDaysBetweenDates = function (startDate, endDate) {
        let now = moment(startDate).clone(), dates = [];
        while (now.isSameOrBefore(endDate)) {
            dates.push(now.format('DD-MM-YYYY'));
            now.add(1, 'days');
        }
        return dates;
    };

    useEffect(() => {
        const dateList = getDaysBetweenDates(startDate, endDate);
        setDateList(dateList);
    }, [startDate]);

    // console.log('start date', startDate)
    // console.log('end date', endDate)
    // console.log('date list', dateList)
    // console.log('itemsssss.....', chooseItems)
    // console.log('checked date', checkedDate)

    return (
        <>
            <div className='itemcard'>
                <div className='row'>
                    <div className='col-md-2 datediv'>
                        <Form>
                            <div style={{ marginTop: '30px', marginLeft: '20px' }}>
                                {
                                    dateList?.map((date, index) => {
                                        return (
                                            <Form.Check type="checkbox" key={index}>
                                                <Form.Check.Input type="checkbox" isValid value={date} onClick={(e) =>{
                                                       setCheckedDate(e.target.value)
                                                }}/>
                                                <Form.Check.Label>{date}</Form.Check.Label>
                                            </Form.Check>
                                        )
                                    })
                                }
                            </div>
                        </Form>

                        <Button variant="success" style={{ marginTop: '20px', marginLeft: '10px' }} onClick={handleShow}>
                            Select Custom Dates</Button>

                    </div>
                    {
                        items?.slice(0, 5)?.map(item => {
                            return (
                                <div className='col-md-2 itemdiv' key={item.idCategory}>
                                    <img src={item.strCategoryThumb} alt="item" className='itemImg' />
                                    <h6 className='text-center'><i>{item.strCategory}</i></h6>
                                    <Button variant="outline-success" size='sm' style={{ marginLeft: '65px', marginTop: '5px' }}
                                      onClick={() =>{
                                        setChooseItems([...chooseItems, { date: checkedDate, item: item.strCategory, img: item.strCategoryThumb } ])
                                      }}
                                    >Choose</Button>
                                </div>
                            )
                        })
                    }

                </div>
                <Button variant="success" className='btn_proceed' onClick={() => {
                    localStorage.setItem('items', JSON.stringify(chooseItems));
                    navigate('/selectedItems')
                }}>Proceed</Button>
            </div>

            {/* date picker modal */}
            <Modal show={show} onHide={handleClose} size='sm' centered >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Calendar
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(moment(date).format().substring(0, 10));
                            setEndDate(moment(date).add(5, 'days').format().substring(0, 10))
                        }}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
