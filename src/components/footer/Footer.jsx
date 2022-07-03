import React from 'react';
import Button from '../details/Button.jsx';


const thisYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer fixed-bottom bg-dark text white pb-3">
            <div className="row d-flex justify-content-center">
                <Button
                    title = "Create Record"
                    classes="btn btn-warning btn-lg d-inline-block d-lg-none"
                    toggle="modal"
                    modalId="#modalFormNewRecord"
                />
            </div>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-around pt-3">
                    <div>
                        <p className="text-white mb-0">Expenses Tracker version: 2.0.0.</p>
                    </div>
                    <div>
                        <p className="text-white mb-0">
                            All rights reserved - {thisYear}
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/AlexBlacksmith/exps-tracker-v2" target="_blank" className="nav-link text-white p-0">GitHub Repo.</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;