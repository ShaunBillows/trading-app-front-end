
import {Link} from "react-router-dom";
import styled from "styled-components"

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  return (
    <Cont>
      <LinksCont>
        <NavItem>
          <Link to='/'>Landing</Link>
        </NavItem>
        <NavItem>
          <Link to='/Login'>Login</Link>
        </NavItem>
        <NavItem>
          <Link to='/Buy'>Buy</Link>
        </NavItem>
        <NavItem>
          <Link to='/Sell'>Sell</Link>
        </NavItem>
        <NavItem>
          <Link to='/Portfolio'>Portfolio</Link>
        </NavItem>
        <NavItem>
          <button onClick={ () => setIsLoggedIn( !isLoggedIn ) }>switch logged in</button>
        </NavItem>
      </LinksCont>
    </Cont>
  );
};

export default Navbar;

const Cont = styled.div`
`
const LinksCont = styled.ul`
  display: flex;
  justify-content: flex-end;
`
const NavItem = styled.li`
padding: 0 1rem`