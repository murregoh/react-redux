import styled from "styled-components";
import { useDispatch } from "react-redux";


const Product = ({ id, name }) => {

    const dispatch = useDispatch();

    const handleAddProduct = (id, name) => {
        dispatch({ type: 'ADD_CART_PRODUCT', id: id, name: name });
    };

    return (
        <ProductContainer>
            <p>{name}</p>
            <Bottom onClick={() => handleAddProduct(id, name)}>Add Product</Bottom>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

const Bottom = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;

export default Product;