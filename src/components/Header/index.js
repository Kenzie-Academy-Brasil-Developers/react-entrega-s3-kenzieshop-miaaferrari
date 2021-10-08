import { Container } from "./style";
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';
import { useHistory } from "react-router";
import { Button } from "../Button";
import { useSelector } from "react-redux";

export const Header = () => {

    const history = useHistory();

    const cart = useSelector(store => store.cart)

    const handleClick = (path) => {
        history.push(path);

    }

    return (
        <Container>
            <div>
                <h3>KENZIE LIGHTSABER STORE</h3>
            </div>
            <div>
                <Button 
                    name='Cart' 
                    icon={<FiShoppingCart />} 
                    type='button' 
                    onClick={() => handleClick('/cart')}></Button>        

                <Button 
                    name='Login' 
                    icon={<FiLogIn />} 
                    type='button' 
                    onClick={() => handleClick('/login')} ></Button>   
            </div>            
        </Container>
    )
}