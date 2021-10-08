import { useSelector } from "react-redux";
import { ProductRender } from "../Product";
import { BoxList, ContainerList } from "./style"; 

export const ProductList = () => {
    const products = useSelector(store => store.product);

    return (
        <ContainerList>
            <BoxList>
                {products.map((item, index) => <ProductRender key={index} product={item}/>)}
            </BoxList>
        </ContainerList>
    )
}