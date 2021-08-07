import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Detail(props) {

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Detail