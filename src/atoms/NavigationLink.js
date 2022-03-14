import {NavLink} from 'react-router-dom';

const NavigationLink = ({children, path}) => {
  return (
    <NavLink className={navData => (navData.isActive ? 'active' : '')} to={path}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
