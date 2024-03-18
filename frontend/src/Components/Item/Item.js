// Write your code here
import './Item.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Item = ({ item, setRefreshItems }) => {
    const navigate = useNavigate();

    const editItem = () => {
        navigate('item/edit/' + item.id)
    }

    const deleteItem = (id) => {
        axios.delete("http://localhost:8000/item/"+id, {withCredentials: true}).then((res) => {
            setRefreshItems(true);
            window.location.reload();
        });
    }

    return (
    <>
        {/* <div class="product">
            <div class="image-box">
                <div class="images" id="image-1"></div>
            </div>
            <div class="text-box">
                <h2 class="item"> {item.name} </h2>
                <h3 class="price"> ${item.price} </h3>
                <p class="description"> {item.description} </p>
                <label class="quantity">Quantity: {item.quantity} </label>
                <button class="edit-btn" onClick={editItem}> Edit </button>
                <button class="delete-btn" onClick={() => deleteItem(item.id)} > Delete </button>
            </div>
        </div> */}

        <div class="card">
            <div class="imgBx">
                <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" alt="nike-air-shoe"/>
            </div>

            <div class="contentBx">

                <h2> {item.name} </h2>

                <div class="size">
                    <h3>Price :</h3>
                    <span> {item.price} </span>
                </div>

                <div class="size">

                    <h3>Quantity :</h3>
                    <span> {item.quantity} </span>
                </div>

                <a href="#" onClick={editItem}> Edit </a>
                <a href="#" onClick={() => deleteItem(item.id)}> Delete </a>

            </div>

        </div>


    </>
    )
};
export default Item