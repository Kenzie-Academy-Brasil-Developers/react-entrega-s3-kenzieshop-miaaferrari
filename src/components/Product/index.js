import { FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeFromCartThunk, addToCartThunk } from '../../store/modules/Cart/thunks';
import { Container } from './style';
import { Button } from "../Button";

export const ProductRender = ({product, isRemovable = false}) => {

    const dispatch = useDispatch();

   const { id, name, price, image } = product;

   const dolarCurrency = price.toLocaleString('en',{style: 'currency', currency: 'USD'});


    return (
        <Container>
            <img src={image} alt={name}></img>
            <p>{name}</p>
            <p>{dolarCurrency}</p>
            {isRemovable ? (
                <Button name='Delete'icon={<FiTrash2 />} type='button' onClick={() => dispatch(removeFromCartThunk(product))}></Button>
            ) : (
                <Button name='Buy' icon={<FiShoppingBag />} type='button' onClick={() => dispatch(addToCartThunk(product))}></Button>
            )}
        </Container>
    )
}