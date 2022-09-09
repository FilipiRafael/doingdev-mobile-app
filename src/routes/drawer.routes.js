import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Home } from '../screens/Home';
// import { SignIn } from '../screens/SignIn';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerNavigator() {

    return (
        <Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#121212'
                },
                headerTintColor: '#f1f1f1'
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => <Ionicons
                        name='home-outline'
                        size={20}
                        color='#121212'
                    />
                }}
            />
            {/* <Screen
                name="Deslogar"
                component={SignIn}
                options={{
                    drawerLabel: 'Sair',
                    drawerIcon: () => <Ionicons
                        name='log-out-outline'
                        size={20}
                        color='#121212'
                    />
                }}
            /> */}
        </Navigator>
    )
}