import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import axios from "axios";
import { FaEye } from 'react-icons/fa';
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import ModalTwo from "../modals/ModalTwo";
import Paginate from "./Paginate";
const baseURL = "https://dummyjson.com/users";

function Two() {
    const [data, setData] = useState([])
    const [showUser, setShowUser] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage, setProdsPerPage] = useState(10);

    const getUsers = async () => {
        axios.get(baseURL).then((response) => prod(response.data))
            .catch((error) => console.error('this is the error', error))
    }

    const prod = (json) => {
        console.log(json)
        setData(json['users'])
    }

    const indexOfLastProds = currentPage * prodsPerPage;
    const indexOfFirstProds = indexOfLastProds - prodsPerPage;
    const currentProds = data.slice(indexOfFirstProds, indexOfLastProds);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(data.length / prodsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const generateData = (columns, count = 10, prefix = "row-") =>
    currentProds.map((data, rowIndex) => {
            return columns.reduce(
                (rowData, column, columnIndex) => {
                    rowData[`column-01`] = data.firstName;
                    rowData[`column-02`] = data.lastName;
                    rowData[`column-03`] = data.age;
                    rowData[`column-04`] = data.username;
                    rowData[`column-05`] = data.ip;
                    rowData[`column-06`] = <Figure>
                    <Figure.Image
                      width={50}
                      height={50}
                      alt="171x180"
                      src={data.image}
                    />
                  </Figure>;
                   rowData[`column-07`] = <Button onClick={() => { setModalShow(true); setShowUser(data) }}><FaEye /></Button>;
                    return rowData;
                },
                {
                    id: `${prefix}${rowIndex}`,
                    parentId: null
                }
            );
        });

    const columns = [
        {
            key: `column-01`,
            dataKey: `column-01`,
            title: `Name`,
            width: 150
        },
        {
            key: `column-02`,
            dataKey: `column-02`,
            title: `Last Name`,
            width: 150
        },
        {
            key: `column-03`,
            dataKey: `column-03`,
            title: `Age`,
            width: 150
        },
        {
            key: `column-04`,
            dataKey: `column-04`,
            title: `Username`,
            width: 150
        },
        {
            key: `column-05`,
            dataKey: `column-05`,
            title: `IP Address`,
            width: 150
        },
        {
            key: `column-06`,
            dataKey: `column-06`,
            title: `Image`,
            width: 150
        },
        {
            key: `column-07`,
            dataKey: `column-07`,
            title: `Action`,
            width: 150
        },

    ]
    const datax = generateData(columns, 10);

    useEffect(() => {
        getUsers()
    }, []);


    return (
        <div style={{ justifyContent: 'none' }} className="App-header">
            <BaseTable style={{color: 'black'}} fixed data={datax} columns={columns} width={1050} height={550}>
            </BaseTable>
            <Paginate
                prodsPerPage={prodsPerPage}
                totalProds={data.length}
                currentPage={currentPage}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
            />
            <ModalTwo
                id={showUser}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}




export default Two;