import styled from "styled-components";
import { useSelector } from "react-redux";

const Cart = () => {

    const cartProducts = useSelector(s => s.cartProducts);

    return (
        <>
            <h3>Cart</h3>
            {
                cartProducts.length > 0
                    ? cartProducts.map((c, i) => {
                        return (
                            <Product key={i}>
                                <ProductName>{c.name}</ProductName>
                                Cantidad: {c.amount}
                            </Product>
                        )
                    })
                    :
                    <p>You've not added products</p>
            }
        </>
    );
}

const Product = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const ProductName = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

export default Cart;