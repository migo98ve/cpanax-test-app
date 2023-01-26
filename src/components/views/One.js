import React, { useState, useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
const baseURL = "https://dummyjson.com/products";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

function One() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log('productos', response)
            setProducts(response.data);
        });
    }, []);
    return (
        <div style={{ justifyContent: 'none' }} className="App-header">

            <p>
                HELLOO challenge ONEEEEEEEE
            </p>
            <div>
                <Pagination>{items}</Pagination>
                <br />

                <Pagination size="lg">{items}</Pagination>
                <br />

                <Pagination size="sm">{items}</Pagination>
            </div>

        </div>
    );
}




export default One;