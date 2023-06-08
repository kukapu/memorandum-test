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
    to: '/movies',
    path: 'movies',
    Component: Movies,
    name: 'Movies'
  },
  {
    to: '/series',
    path: 'series',
    Component: Series,
    name: 'Series'
  },
]