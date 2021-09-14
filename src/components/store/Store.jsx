
import { useSelector } from "react-redux";
import styled from "styled-components";

// Components
import Product from "../product/Product";

const Store = () => {

    const products = useSelector(s => s.products);

    return (
        <div>
            <h2>Store</h2>
            <div>
                <h4>Products</h4>
                <ProductsContainer>
                    {
                        products.map((p, i) => <Product key={i} id={p.id} name={p.name} />)
                    }
                </ProductsContainer>

            </div>
        </div>
    );
}

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

export default Store;