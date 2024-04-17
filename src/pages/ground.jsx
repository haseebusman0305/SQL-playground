import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import axios from 'axios'; 
import dotenv from 'dotenv';
dotenv.config();
const API_URL = process.env.API_ENDPOINT || 'http://localhost:5001';
console.log("Api url here "+API_URL);

const Ground = () => {
    const [isConnected, setIsConnected] = useState(false);

    const handleButtonClick = () => {
        if (isConnected) {
    
            axios.get(`${API_URL}/disconnect`)
                .then((response) => {
                    console.log(response.data);
                    setIsConnected(false); 
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            
            axios.get(`${API_URL}/connect`)
                .then((response) => {
                    console.log(response.data);
                    setIsConnected(true); 
                 })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <>
            <Button onClick={handleButtonClick} variant="soft">
                {isConnected ? 'Disconnect mySQL' : 'Connect mySQL'}
            </Button>
            <p>Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
        </>
    );
};

export default Ground;
