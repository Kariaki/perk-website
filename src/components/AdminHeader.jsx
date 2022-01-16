import React from 'react';
// import { Popup } from './Modals';



const AdminHeader = () => {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-between py-3">
                <div className="d-flex align-items-start mb-md-0 me-md-auto text-dark text-decoration-none flex-column">
                    <h2>
                        Dashboard
                    </h2>
                    <p><small>date</small></p>
                </div>

                <div className="d-flex align-items-center mb-md-0 ms-md-auto text-dark text-decoration-none">
                    <h4 className='me-3'>
                        Admin
                    </h4>

                    {/* <Popup/> */}
                   
                </div>
            </header>
        </>
    )
}

export default AdminHeader
