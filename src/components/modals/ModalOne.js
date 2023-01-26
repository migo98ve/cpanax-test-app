import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function ModalOne(props) {
    const [gallery, setGallery] = useState([]['0'])
    console.log([props.id.images]['0'])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Galeria de Imagenes de {props.id.brand} - {props.id.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Carousel>
      {props.id.images?.map((img, index) => (
            <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
          style={{height: '500px'}}
        />
      </Carousel.Item>

      
      ))}
    </Carousel>
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ModalOne;