import { RouteProps } from 'react-router-dom';
import ErrorPage from '../pages/error';
import Forms from '../pages/forms';
import Home from '../pages/home';
import Login from '../pages/login/index.store';
import Posts from '../pages/posts/index.store';
import Register from '../pages/register/index.store';
import User from '../pages/user/index.store';
import Users from '../pages/users/index.store';
import withAuth from '../wrappers/withAuth';

/**
 * Project router
 */
export default class SiteRoutes {
  /**
   * Project routes
   */
  static routes: RouteProps[] = [
    {
      path: '/',
      component: withAuth(Home),
    },
    {
      path: '/forms',
      component: withAuth(Forms),
    },
    {
      path: '/users',
      component: withAuth(Users),
    },
    {
      path: '/user/:id',
      component: withAuth(User),
    },
    {
      path: '/posts',
      component: withAuth(Posts),
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '*',
      component: ErrorPage,
    },
  ];

  /**
   * Get site routes
   */
  static getList = (): RouteProps[] => {
    return [...SiteRoutes.routes];
  };
}
