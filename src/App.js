import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Blog from './components/blog/Blog';
import Main from './components/main/Main';
import Store from './components/store/Store.jsx';
import Error404 from './components/error404/Error404';
import Cart from './components/cart/Cart';

const App = () => {

  return (
    <Container>
      <Menu>
        <NavLink to='/'>Main</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/store'>Store</NavLink>
      </Menu>

      <main>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/blog' component={Blog} exact />
          <Route path='/store' component={Store} exact />
          <Route path='*' component={Error404} exact />
        </Switch>
      </main>

      <aside>
        <Cart />
      </aside>

    </Container >
  );
}

const Container = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
