import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
    background-color: #5770F7;
    width: ${width}px;
    height: ${height}px;
    justify-content: flex-start;
    align-items: center;
`;

export const Brand = styled.Image`
    width: 300px;
    height: 100px;
    margin: auto;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Wrapper = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const LinkButton = styled.Pressable`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const Span = styled.Text`
    font-size: 16px;
    color: #fff;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.Text`
    font-size: 16px;
    color: #FBA94C;
    margin-left: 6px;
`;