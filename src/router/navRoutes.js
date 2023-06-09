import { Home } from "../components/Home";
import { Movies } from "../components/Movies";
import { Series } from "../components/Series";


export const navRoutes = [
  {
    to: '/',
    path: '',
    Component: Home,
    name: 'HOME'
  },
  {
    to: '/movie',
    path: 'movie/:page?',
    Component: Movies,
    name: 'Movie'
  },
  {
    to: '/series',
    path: 'series/:page?',
    Component: Series,
    name: 'Series'
  },
]