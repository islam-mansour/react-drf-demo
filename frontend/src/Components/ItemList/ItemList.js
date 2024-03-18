import React, { Component } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ItemList = ({ }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [refreshItems, setRefreshItems] = useState(true);

  const addItem = () => {
    navigate('item/add')
  }

  useEffect(() => {

    if (refreshItems){
      axios.get("http://localhost:8000/item/", {withCredentials: true}).then((res) => {
          setItems(res.data);
      });
      setRefreshItems(false);
    }

}, []);
  
    return (
      <>

        <button class="add-btn" onClick={addItem}> Add Item </button>

        <div class="listing-section">
     
          {
            items.length > 0 ?
              items.map((item) =>          
                <Item item={item} setRefreshItems={setRefreshItems}/>
              ):
            <h1> Empty List </h1>
          }

        </div>

      </>
    );

}

export default ItemList;