import React, { useEffect, useState } from "react";
import "./add.css";
import axios from "axios";
import {
  useParams,
} from "react-router-dom";

import { useNavigate, NavLink } from "react-router-dom";
const EditItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const [item, setItemDetails] = useState({
    image: "",
    name: "",
    price: "",
    quantity: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setItemDetails({
      ...item,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    console.log(item)
    setItemDetails({
      image: e.target.files[0]
    })
  };

  const validateForm = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Name is required";
    }
    if (!values.price) {
      error.price = "price is required";
    }
    if (!values.image) {
      error.image = "image is required";
    }
    if (!values.quantity) {
      error.quantity = "quantity is required";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(item));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(id);
    axios.get("http://localhost:8000/item/"+id, {withCredentials: true}).then((res) => {
        setItemDetails(res.data);
    });


    if (Object.keys(formErrors).length === 0 && isSubmit) {
      let formData = new FormData();    //formdata object
      formData.append('name', item.name);
      formData.append('image', item.image);
      formData.append('price', item.price);
      formData.append('quantity', item.quantity);

      axios.put("http://localhost:8000/item/" + id, formData, {withCredentials: true, headers: {
        'content-type': 'multipart/form-data'
      }}).then((res) => {
        navigate("/", { replace: true });
      }).catch((err)=>{
        setRegisterError('Data not valid');
      });
    }
  }, [formErrors]);
  return (
    <>
      <div class="form">
        <form>
          <h1>Create new Item</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={changeHandler}
            value={item.name}
          />
          <p class="error">{formErrors.name}</p>

          <input type="file"
                   id="image"
                   accept="image/png"  onChange={handleImageChange} required/>
          <p class="error">{formErrors.image}</p>

          <input
            type="number"
            step=".01"
            name="price"
            id="price"
            placeholder="Price"
            onChange={changeHandler}
            value={item.price}
          />
          <p class="error">{formErrors.price}</p>

          <input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            onChange={changeHandler}
            value={item.quantity}
          />
          <p class="error">{formErrors.quantity}</p>

          <p class="error">{registerError}</p>
          <button class="button_common" onClick={signupHandler}>
            Update
          </button>
        </form>

      </div>
    </>
  );
};
export default EditItem;
