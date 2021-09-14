import styled from 'styled-components';

const Error404 = () => {
    return (
        <ErrorMessageContainer>
            <h2>Error 404</h2>
            <p>The page does not exist</p>
        </ErrorMessageContainer>
    );
}

const ErrorMessageContainer = styled.div`
    text-align: center;
    grid-column: span 2;
`;

export default Error404;