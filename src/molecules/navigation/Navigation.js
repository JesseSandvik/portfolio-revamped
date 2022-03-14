import NavigationLink from '../../atoms/NavigationLink';
import {pageRoutes} from '../../data/routing/routes';

const Navigation = () => {
  const navigationList = pageRoutes.map((route, index) => (
    <li key={index}>
      <NavigationLink path={route.path}>{route.name}</NavigationLink>
    </li>
  ));

  return (
    <nav className="item">
      <ul>{navigationList}</ul>
    </nav>
  );
};

export default Navigation;
