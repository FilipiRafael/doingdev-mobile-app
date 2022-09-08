import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
      />
      <Routes />
    </>
  );
}