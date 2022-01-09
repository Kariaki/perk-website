import React from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Popup = () => {
    return (
        <>
            {['bottom'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                            
                            <Popover.Body className='d-flex flex-column'>
                                
                                <Link to="#">Log Out</Link>
                               
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <Button variant="secondary" className='rounded-circle p-3 fw-bold'>PEX</Button>
                </OverlayTrigger>
            ))}
        </>
    )
};

export const Modals1 = () => {
    return (
        <>
           
        </>
    )
}

