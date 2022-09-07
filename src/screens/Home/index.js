import { useState, useEffect } from 'react';
import { StyleSheet, Alert, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Container, Girl, TasksCard, GreetingText, RowTask, TaskDescription, AddButton, AddTaskButton, WrapperNewTaskInput } from './styles';
import girl from '../../assets/girl.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { InputNewTask } from '../../components/InputNewTask';

export const Home = () => {

    const [taskList, setTaskList] = useState([]);
    const [isNewTask, setIsNewTask] = useState(false);
    const [inputDescription, setInputDescription] = useState('');

    const taskListAPI = [
        {
            description: 'Go to Cofee',
            done: false,
        },
        {
            description: 'Buy movie tickets for Friday',
            done: false,
        },
        {
            description: 'Make a React Native tutorial',
            done: true,
        },
    ]

    const updateTaskStatus = (index) => {
        const newArrayTasks = [...taskList];

        newArrayTasks[index].done === true ?
        newArrayTasks[index].done = false :
        newArrayTasks[index].done = true;

        setTaskList(newArrayTasks);
    }

    const handleAddNewTask = (description) => {

        if (description) {
            const newArrayTasks = [...taskList];
            newArrayTasks.unshift({
                description: description,
                done: false
            });
    
            setTaskList(newArrayTasks);
            setIsNewTask(false);
            setInputDescription('');
        } else {
            Alert.alert('Nova Tarefa', 'Adicione uma descrição a tarefa.')
        }

    }

    useEffect(() => {
        setTaskList(
            [...taskListAPI]
        );
    }, []);

    return (
        <Container>
            <Girl source={girl} />
            <GreetingText>What's up, Filipi?</GreetingText>
            <TasksCard>
                {isNewTask && (
                    <WrapperNewTaskInput>
                        <InputNewTask
                            value={inputDescription}
                            setText={setInputDescription}
                        />
                        <AddTaskButton
                            onPress={() => handleAddNewTask(inputDescription)}
                        >
                            <Icon
                                name='checkmark-done-outline'
                                size={20}
                                color='#FBA94C'
                            />
                        </AddTaskButton>
                    </WrapperNewTaskInput>
                )}
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {taskList?.map((task, index) => (
                        <RowTask
                            key={index}
                        >
                            <Checkbox
                                color={task.done ? '#5770F7' : '#7C7C8A'}
                                style={styles.checkbox}
                                value={task.done}
                                onValueChange={() => {
                                    updateTaskStatus(index);
                                    console.info(taskList);
                                }}
                            />
                            <TaskDescription>
                                {task.description}
                            </TaskDescription>
                        </RowTask>
                    ))}
                </ScrollView>
            </TasksCard>
            <AddButton
                onPress={() => setIsNewTask(true)}
            >
                <Icon
                    name="add-outline"
                    size={30}
                    color='#fff'
                />
            </AddButton>
        </Container>
    );
}

const styles = StyleSheet.create({
    checkbox: {
        margin: 10,
        borderColor: '#7C7C8A'
    }
});