import React from 'react';
import { Card } from 'react-bootstrap';

export const CardComp = () => {
    return (
        <div>
            <div className="col-md-6 col-lg-3">
                <Card className="shadow rounded">
                    <Card.Img variant="top" src="./img/rice.jpg" />
                    <Card.Body>
                        <Card.Title>Fried Rice</Card.Title>
                        <Card.Text className="d-flex">
                            <p className="text-muted me-2">800</p>
                            <p className="text-muted">Killmanjaro</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}


export const CardComp2 = () => {
    return (
        <>
            <div className="card mb-3 border-0 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const CardComp3 = () => {
    return (
        <>
            <div className="card p-3 mb-3 border-0 shadow">
                <div className="row justify-content-center text-center border-bottom">
                    <h3 className="bg-warning w-25 p-2 rounded-circle">JD</h3>
                    <h6>John Doe</h6>
                </div>
                <div className="row justify-content-center text-center border-bottom">
                    <small className='text-warning'>Number</small>
                    <p>09038256254</p>
                </div>
                <div className="row justify-content-center text-center border-bottom">
                    <small className='text-warning'>Email</small>
                    <p>johndoe@yahoo.com</p>
                </div>
                <div className="row justify-content-center text-center">
                    <small className='text-warning'>Address</small>
                    <p>No 35 Onopa Street Amarata, Yenagoa</p>
                </div>
            </div>
        </>
    )
}


export const CardComp4 = () => {
    return (
        <>
            <div className="card p-3 mb-3 border-0 shadow">
                <div className="row">

                </div>
                <div className="row">
                    <p>Kilimanjaro</p>
                </div>
                <div className="row justify-content-between">
                    <div className="col-4 border border-2 border-warning rounded-3 text-center p-1  align-items-center d-flex flex-column">
                        <small className='m-0'>Menu</small>
                        <p className="bg-warning m-0 w-50 p-1 rounded-3">7</p>
                    </div>
                    <div className="col-4 border border-2 border-warning rounded-3 text-center p-1  align-items-center d-flex flex-column">
                        <small className='m-0 p-0'>Meals</small>
                        <p className="bg-warning m-0 w-50 p-1 rounded-3">7</p>
                    </div>
                    <div className="col-4 border border-2 border-warning rounded-3 text-center p-1  align-items-center d-flex flex-column">
                        <small className='m-0'>Orders</small>
                        <p className="bg-warning m-0 w-50 p-1 rounded-3">7</p>
                    </div>
                </div>

            </div>
        </>
    )
}


