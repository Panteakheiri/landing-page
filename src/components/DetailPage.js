import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const params = useParams()
    return (
        <div>
            <h1>detail page - product number is {params.id}</h1>
        </div>
    );
};

export default DetailPage;