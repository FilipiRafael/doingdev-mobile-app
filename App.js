import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
      />
      <Home />
      {/* <Routes /> */}
    </>
  );
}