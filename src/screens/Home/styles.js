import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
    background-color: #5770F7;
    width: ${width}px;
    height: ${height}px;
    justify-content: flex-end;
    align-items: center;
`;

export const Girl = styled.Image`
    width: 250px;
    height: 180px;
    position: absolute;
    top: 0px;
`;

export const TasksCard = styled.View`
    width: ${width}px;
    height: ${height - 180}px;
    background-color: #121212;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
`;

export const GreetingText = styled.Text`
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    position: absolute;
    top: 130px;
    left: 25px;
`;

export const RowTask = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const TaskDescription = styled.Text`
    color: #f5f5f5;
    margin-left: 4px;
    font-size: 16px;
`;

export const AddButton = styled.Pressable`
    width: 64px;
    height: 64px;
    background-color: #5770F7;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    bottom: 20px;
    justify-content: center;
    align-items: center;
    padding: 0;
`;