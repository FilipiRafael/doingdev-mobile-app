import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Ionicons } from '@expo/vector-icons';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerNavigator() {
    return (
        <Navigator
            screenOptions={{
                headerShown: true
            }}
        >
            <Screen
                name="Logar"
                component={SignIn}
                options={{
                    drawerLabel: 'Logar Conta',
                    drawerIcon: () => <Ionicons
                        name='log-in-outline'
                        size={20}
                        color='#121212'
                    />
                }}
            />
            <Screen
                name="Criar Conta"
                component={SignUp}
                options={{ 
                    drawerLabel: 'Criar Conta',
                    drawerIcon: () => <Ionicons
                        name='newspaper-outline'
                        size={20}
                        color='#121212'
                    />
                 }}
            />
        </Navigator>
    )
}