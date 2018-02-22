import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export async function homeAPI(){
    const url ="https://swapi.co/api/people"
    return new Promise(function(resolve, reject){
        axios.get(url)
        .then((response) =>{
            console.log("===== Home API Response =====");
            console.log(response.data);
            if(response.status === 200)
                resolve(response.data);
        })
        .catch((error) => {
            console.log("axios error: ", error);
            reject("Error in request");
        });
    });
}