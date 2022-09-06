import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Container, Girl, TasksCard, GreetingText, RowTask, TaskDescription, AddButton } from './styles';
import girl from '../../assets/girl.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { InputNewTask } from '../../components/InputNewTask';

export const Home = () => {

    const [taskList, setTaskList] = useState([]);
    const [isNewTask, setIsNewTask] = useState(false);

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

    const handleNewTask = () => {
        setIsNewTask(true);

        // Set a new task and to task list
        // const newArrayTasks = [...taskList];
        // newArrayTasks.push({
        //     description: '',
        //     done: false
        // })

        // setTasksList()

        // setIsNewTask(false);
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
                {isNewTask && <InputNewTask />}
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
            </TasksCard>
            <AddButton
                onPress={handleNewTask}
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