import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
    background-color: #5770F7;
    width: ${width}px;
    height: ${height}px;
`;