import { ProductList } from '../../components/Products/index';
import { Container } from './style';
import { Header } from '../../components/Header';

export const Home = () => {

    return (
        <Container>
            <Header />
            <ProductList />
        </Container>
    )
}