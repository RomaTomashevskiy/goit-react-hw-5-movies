import { Nav, Link } from './Navigation.styled';

const Navigation = () => {
    return (
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
        </Nav>
    );
};

export default Navigation;