import React from 'react';
import {
    useParams
  } from "react-router-dom";

export default function Parameters(){

    const { id, text } = useParams();

    return(
        <main>
            <h1>Parameters</h1>
            <p><strong>Id:</strong> {id}</p>
            <p><strong>Text:</strong> {text}</p>
        </main>
    )

}