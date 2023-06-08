import { Routes, Route, Navigate } from 'react-router';
import { navRoutes } from './navRoutes';


export const Navigation = () => {
  return (

        <Routes>
          {
            navRoutes.map( route => {
              return (
                <Route 
                  key={ route.to }
                  path={ `${route.path}/` } 
                  element={ <route.Component /> } 
                />
              )
            })
          }
          <Route path="*" element={ <Navigate to={ navRoutes[0].to } replace /> }/>

        </Routes>

  )
}
