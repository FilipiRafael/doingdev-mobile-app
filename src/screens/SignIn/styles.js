import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
    background-color: #5770F7;
    width: ${width};
    height: ${height};
    justify-content: flex-start;
    align-items: center;
`;

export const Brand = styled.Image`
    width: 300;
    height: 120;
    margin: auto;
    position: absolute;
    top: 50;
    left: 0;
    right: 0;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 22;
    margin-bottom: 20;
`;

export const Wrapper = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 60%;
`;

export const Link = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 16px;
`;