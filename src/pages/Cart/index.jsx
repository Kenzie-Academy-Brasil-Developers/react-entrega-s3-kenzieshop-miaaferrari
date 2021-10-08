import { CartComponent } from '../../components/Cart';
import { CartBoxResume } from '../../components/CartBoxResume';
import { ContainerCart } from './style';

export const Cart = () => {

    return (
        <ContainerCart>
                <CartComponent />
                <CartBoxResume />
        </ContainerCart>
    )
}