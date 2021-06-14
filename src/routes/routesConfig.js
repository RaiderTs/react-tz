import HomePage from '../views/HomePage';
import FavoritesPage from '../views/FavoritePage';
import NotFoundPage from '../views/NotFoundPage';



const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/favorites',
    exact: true,
    component: FavoritesPage,
  },
  {
    path: '/not-found',
    exact: true,
    component: NotFoundPage,
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
