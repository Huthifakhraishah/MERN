import React ,{useState,useEffect} from 'react'
import axios from  'axios'

const Product = (props) => {
const [title, settitle] = useState("")
const [price, setprice] = useState(0)
const [description, setdescription] = useState("")
const [product, setProduct] = useState({})
useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + props.id)
        .then(res => setProduct(res.data))
}, [])

const showProcuct  = e=>{
e.preventDefault();
axios.post('http://localhost:8000/api/products/new',{
    title,price,description ,
})

.then(res=>console.log(res))
.catch(err=>console.log(err));
settitle("");
setprice("");
setdescription("");


}

    return (
        <div>
            <form>
            <label>Title</label>
            <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}></input>
            <label>Price</label>
            <input type="text" onChange={(e)=>setprice(e.target.value)} value={price}></input>
            <label>Description</label>
            <input type="text" onChange={(e)=>setdescription(e.target.value)} value={description}></input>
            <button onClick={showProcuct}>Create</button>
            </form>
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            
        </div>
    )
}

export default Product
