import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth';

import { StackRoutes } from './stack.routes';
import { DrawerNavigator } from './drawer.routes';

export function Routes() {

    const { isAuth } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isAuth ? <DrawerNavigator /> : <StackRoutes />}
        </NavigationContainer>
    )
}