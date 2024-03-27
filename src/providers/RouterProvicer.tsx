import { FC } from 'react';
import { route } from '../routes';
import { RouterProvider } from "react-router-dom";

interface RouterProviderProps {
  
}

export const ReactRouterProvider: FC<RouterProviderProps> = ({}) => {
   return <RouterProvider router={ route } />  
};
