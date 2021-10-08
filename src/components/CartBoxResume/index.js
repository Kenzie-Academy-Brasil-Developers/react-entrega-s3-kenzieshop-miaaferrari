import { FiCreditCard } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "../Button/index";

export const CartBoxResume = () => {

    const history = useHistory();

    const cart = useSelector(store => store.cart);
    const total = cart.reduce((acc, value) => {
       return value.price + acc}, 0);
    
    const dolarCurrency = total.toLocaleString('en',{style: 'currency', currency: 'USD'});

    const handleClick = () => {
        history.push('/login');
    }

    return (
        <div>
            <h2>Order Resume</h2>
            <p>{cart.length} products</p>
            <p>Total: {dolarCurrency}</p>
            <Button icon={<FiCreditCard />} name='Finalize' type='button' onClick={() => handleClick()}></Button>
        </div>

    )
}