import { useSelector } from "react-redux"
import { ProductRender } from "../Product";
import { BoxList, Container } from "./style";

export const CartComponent = () => {

    const cart = useSelector(store => store.cart);

    return (
        <Container>
            <h1>Shopping Cart</h1>
            {cart.length > 0 ? (
                <BoxList>
                    {cart.map((product, index) => <ProductRender key={index} product={product} isRemovable />)}
                </BoxList>
                
            ) : (
                <p>No products yet</p>
            )}
        </Container>
    )
}