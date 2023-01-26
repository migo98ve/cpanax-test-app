import React, { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import One from "./One";
import Two from "./Two";

function Main() {
    const [key, setKey] = useState('home');
    const [showMessage, setshowMessage] = useState(true)

    return (
        <div style={{ justifyContent: 'none' }} className="App-header">
            {showMessage ? (
            <p>PLEASE SELECT A CHALLENGE</p>
            ) : (
                null
            )}
            <Tabs
                id=""
                activeKey={key}
                onSelect={(k) => setKey(k)}
                onClick={() => setshowMessage(false)}
                className="mb-3"
                style={{paddingTop: '20px'}}
            >
                <Tab eventKey="One" title="Challenge 1">
                    <One></One>
                </Tab>
                <Tab eventKey="Two" title="Challenge 2">
                    <Two></Two>
                </Tab>

            </Tabs>


        </div>
    );
}




export default Main;