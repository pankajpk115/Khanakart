// import React from 'react'
import {  useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import './Add.css'
import { toast } from 'react-toastify'

const Add = ({url}) => {
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const OnchangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",data.price);
    formData.append("category",data.category);
    formData.append("image",image);

    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false);
      toast.success(response.data.message);
    }
    else{
      console.log("Not sent");
      toast.error(response.data.message)
    }
  }
 
  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} className="flex-col">
        <div className="add-image-upload flex-col"> 
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={OnchangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={OnchangeHandler} value={data.description} name="description" rows="10" placeholder='Write content here' required></textarea>
        </div>
        <div className="add-category-price ">
          <div className="add-category">
            <p>Product category</p>
            <select onChange={OnchangeHandler} value={data.category} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price">
            <p>Product price</p>
            <input onChange={OnchangeHandler} value={data.price} type="number" name='price' placeholder='$20'/>
          </div>
        </div>
          <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add