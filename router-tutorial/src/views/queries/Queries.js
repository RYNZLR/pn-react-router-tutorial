import React from 'react';
import {
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Queries(){

    const query = useQuery();

    return(
        <main>
            <h1>Queries</h1>
            <p><strong>Name-querystring: </strong> {query.get("name")}</p>
            <p><strong>Age-querystring: </strong> {query.get("age")}</p>
        </main>
    )

}