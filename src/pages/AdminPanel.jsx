import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FaClipboardList } from 'react-icons/fa';
import { RiBuildingFill, RiDashboardFill } from 'react-icons/ri';
import { IoMdPeople, IoMdPerson } from 'react-icons/io';

// Components
import TableComp from '../components/TableComp';
import AdminHeader from '../components/AdminHeader';
import { CardComp2, CardComp3, CardComp4 } from '../components/CardComp';

import { vendors, users } from '../components/list';


const AdminPanel = () => {
    const vendor = vendors.map((vendor, index) => {
        return (
            <CardComp4
                key={index}
                {...vendor}
            />

        )
    });

    const user = users.map((user, index) => {
        return (
            <CardComp3
                key={index}
                {...user}
            />
        )
    })
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky text-center">
                            <Link to="#" class="navbar-brand fs-1 fw-bold text-dark" href="#">PEX</Link>
                            <div class="d-flex align-items-start mt-3">
                                <div class="nav flex-column nav-pills mx-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link rounded-pill text-start mb-2 active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"> <RiDashboardFill /> Dashboard </button>
                                    <button class="nav-link rounded-pill text-start mb-2" id="v-pills-orders-tab" data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab" aria-controls="v-pills-orders" aria-selected="false"> <FaClipboardList /> Orders </button>
                                    <button class="nav-link rounded-pill text-start mb-2" id="v-pills-customers-tab" data-bs-toggle="pill" data-bs-target="#v-pills-customers" type="button" role="tab" aria-controls="v-pills-customers" aria-selected="false"> <IoMdPeople /> Customers </button>
                                    <button class="nav-link rounded-pill text-start mb-2" id="v-pills-vendors-tab" data-bs-toggle="pill" data-bs-target="#v-pills-vendors" type="button" role="tab" aria-controls="v-pills-vendors" aria-selected="false"> <RiBuildingFill /> Vendors </button>
                                    <button class="nav-link rounded-pill text-start mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"> <IoMdPerson /> Profile </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 bg-light">

                        <div className="d-flex align-items-start">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <div className="container-fluid">
                                        <AdminHeader />
                                        <div class="row">
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-4">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-4">
                                                        <CardComp2 />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="h-100 p-5 bg-white border-0 shadow rounded-3">
                                                            <TableComp />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-12">
                                                    <div className="h-100 p-5 bg-white border-0 shadow rounded-3">
                                                        <h2>Add borders</h2>

                                                        <button className="btn btn-outline-secondary" type="button">Example button</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders-tab">
                                    <AdminHeader />
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pending</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Fulfilled</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Cancelled</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="container">
                                                <div className="row g-4">
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="container">
                                                <div className="row g-4">
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div class="container">
                                                <div class="row g-4">
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-customers" role="tabpanel" aria-labelledby="v-pills-customers-tab">
                                    <div className="container">
                                        <AdminHeader />
                                        <div className="row g-4">
                                            {user}
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-vendors" role="tabpanel" aria-labelledby="v-pills-vendors-tab">
                                    <AdminHeader />
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-verified-tab" data-bs-toggle="pill" data-bs-target="#pills-verified" type="button" role="tab" aria-controls="pills-verified" aria-selected="true">Verified</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-unverified-tab" data-bs-toggle="pill" data-bs-target="#pills-unverified" type="button" role="tab" aria-controls="pills-unverified" aria-selected="false">Unverified</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-verified" role="tabpanel" aria-labelledby="pills-verified-tab">
                                            <div className="container">
                                                <div className="row">
                                                    {vendor}
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="tab-pane fade" id="pills-unverified" role="tabpanel" aria-labelledby="pills-unverified-tab">
                                            <div className="container">
                                                <div className="row">
                                                    {vendor}
                                                </div>
                                            </div>
                                        </div>

                                    </div>                               
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="container-fluid">
                                        <AdminHeader />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
