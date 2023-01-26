import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Paginate from './Paginate';
import Form from 'react-bootstrap/Form';


import ModalOne from "../modals/ModalOne";
const baseURL = "https://dummyjson.com/products";



function One() {
    const [products, setProducts] = useState([]);
    const [cardNumbers, setCardNumbers] = useState('col-3 pt-5 mx-auto');
    const [showProduct, setShowProduct] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage, setProdsPerPage] = useState(8);
    const [modalShow, setModalShow] = useState(false);


    const getProducts = async () => {
        axios.get(baseURL).then((response) => prod(response.data))
            .catch((error) => console.error('this is the error', error))
    }

    const prod = (json) => {
        console.log(json)
        setProducts(json['products'])
    }


    useEffect(() => {
        getProducts()
    }, []);

    const indexOfLastPost = currentPage * prodsPerPage;
    const indexOfFirstPost = indexOfLastPost - prodsPerPage;
    const currentProds = products.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(products.length / prodsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const cardsQuantity = (e) => {
        console.log(e)
        const quantity = (12/e)
        console.log(quantity)
        setCardNumbers('col-'+quantity +' pt-5 mx-auto')
        setProdsPerPage((e * 2))
    };


    return (

        <div style={{ justifyContent: 'none' }} className="App-header">
            <div className="row">
            <Form.Select onChange={e => cardsQuantity(e.target.value)} aria-label="Default select example">
                <option>Cantidad cartas por fila</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="12">12</option>
            </Form.Select>
            </div>
           
            <div className="row mx-auto" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                {currentProds.map((products) => (
                    <div className={cardNumbers} key={products.id}>
                        <Card onClick={() => { setModalShow(true); setShowProduct(products) }} className="h-100 card" style={{ color: 'black', backgroundColor: '#8f9090' }}>
                            <Card.Img style={{ height: '250px' }} variant="top" src={products.thumbnail} />
                            <Card.Body>
                                <Card.Title className="text-center">{products.brand} - {products.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <Paginate
                prodsPerPage={prodsPerPage}
                totalProds={products.length}
                currentPage={currentPage}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
            />
            <ModalOne
                id={showProduct}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

/* ReactDOM.render(
    <One itemsPerPage={4} />,
    document.getElementById('container')
  ); */




export default One;