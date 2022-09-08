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
    width: ${width - 40}px;
    height: 50px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #121212;
`;

export const TaskDescription = styled.Text`
    color: ${props => props.done ? '#7C7C8A' : '#f5f5f5'};
    margin-left: 4px;
    font-size: 16px;
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
    text-decoration-color: #7C7C8A;
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

export const WrapperNewTaskInput = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

export const AddTaskButton = styled.Pressable`
    width: 36px;
    height: 36px;
    background-color: transparent;
    border-radius: 5px;
    margin-left: 8px;
    border-width: 2px;
    border-color: #7C7C8A;
    justify-content: center;
    align-items: center;
`;

export const WrapperTaskListEmpty = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 18px 0;
`;

export const TextEmptyList = styled.Text`
    color: #7C7C8A;
    font-size: 16px;
    margin-top: 10px;
`;

export const ViewStyled = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #ed4755;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 8px;
    margin: 2px 0;
`;