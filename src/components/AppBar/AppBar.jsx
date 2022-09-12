import { Head } from './AppBar.styled';
import Navigation from 'components/Navigation';
// import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <Head>
            <Navigation />
        </Head>
    );
};

export default Header;