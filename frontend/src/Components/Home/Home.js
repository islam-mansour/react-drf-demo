// Write your code here
import Navbar from '../Navbar/Navbar'

import ItemList from '../ItemList/ItemList'

import './Home.css'


const Home = ({ setUserState, name }) => {
    return (
        <>
            <div className="main-home-container">
            <Navbar  setUserState={setUserState} name={name} />
            <div className="home-container-light">
                <ItemList />
            </div>
            </div>
        </>
    )
};
export default Home