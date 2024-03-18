import React, { useEffect, useState } from "react";
import "./add.css";
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
const AddItem = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const [item, setItemDetails] = useState({
    name: "",
    price: "",
    image: null,
    quantity: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setItemDetails({
      ...item,
      [name]: value,
    });
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
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(item);
      axios.post("http://localhost:8000/item/", item, {withCredentials: true, 
      headers: {
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
                   accept="image/png"  onChange={changeHandler} required/>
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
            Add
          </button>
        </form>

      </div>
    </>
  );
};
export default AddItem;
