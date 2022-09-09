import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar
        barStyle='light-content'
      />
      <Routes />
    </AuthProvider>
  );
}