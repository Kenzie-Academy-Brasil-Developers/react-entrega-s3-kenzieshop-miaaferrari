import { FiCreditCard } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "../Button/index";

export const CartBoxResume = () => {

    const history = useHistory();

    const cart = useSelector(store => store.cart);
    const total = cart.reduce((acc, value) => {
       return value.price + acc}, 0);
    
    const realCurrency = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const handleClick = () => {
        history.push('/login');
    }

    return (
        <div>
            <h2>Order Resume</h2>
            <p>{cart.length} products</p>
            <p>Total: {realCurrency}</p>
            <Button icon={<FiCreditCard />} name='Finalize' type='button' onClick={() => handleClick()}></Button>
        </div>

    )
}