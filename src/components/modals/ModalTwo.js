import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

function ModalTwo(props) {
    console.log(props)
    return (
        <Modal
            {...props}
            size="lg"

            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: '#8f9090' }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    USER DETAILED INFORMATION
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#282c34' }}>
                <div className="row">
                    <div className="col-6 d-flex align-center justify-content-center">
                        <Figure className="mx-auto" >
                            <Figure.Image
                                width={200}
                                height={200}
                                alt="171x180"
                                src={props.id.image}
                            />
                        </Figure>
                    </div>
                    <div className="col-6 text-white">
                        <p className="text-center"> —————— ABOUT ——————</p>
                        <div className="ml-3" style={{marginLeft: '60px'}}>
                            <p>Username: {props.id.username}</p>
                            <p>Name: {props.id.firstName} {props.id.lastName}</p>
                            <p>Age: {props.id.age}, Birth Date: {props.id.birthDate}</p>
                            <p>E-mail: {props.id.email}</p>
                            <p>Phone: {props.id.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-white">
                    <p className="text-center"> —————— ADDRESS ——————</p>
                    <div className="ml-3" style={{marginLeft: '60px'}}>
                    <p>{props.id.address?.address}, {props.id.address?.city} - {props.id.address?.state}</p>
                    </div>
                </div>


                <div className="col-12 text-white">
                    <p className="text-center"> —————— JOB INFO ——————</p>
                    <div className="ml-3" style={{marginLeft: '60px'}}>
                    {props.id.company?.title} in {props.id.company?.department} Department at {props.id.company?.name}
                    </div>
                    
                </div>

            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#8f9090' }}>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ModalTwo;