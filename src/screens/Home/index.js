import { useState, useEffect } from 'react';
import { StyleSheet, Alert, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { 
    Container,
    Girl,
    TasksCard,
    GreetingText,
    RowTask,
    TaskDescription,
    AddButton,
    AddTaskButton,
    WrapperNewTaskInput,
    WrapperTaskListEmpty,
    TextEmptyList,
    ViewStyled
} from './styles';
import girl from '../../assets/girl.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { InputNewTask } from '../../components/InputNewTask';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { supabase } from '../../services/supabase';

export const Home = () => {

    const [taskList, setTaskList] = useState([]);
    const [isNewTask, setIsNewTask] = useState(false);
    const [inputDescription, setInputDescription] = useState('');

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

    const handleDeteleTask = (index) => {
        const newArrayTasks = [...taskList];
        newArrayTasks.splice(index, 1);
        setTaskList(newArrayTasks);
    }

    const showTrashSwipeable = ({ index }) => {
        return (
            <ViewStyled
                onPress={() => handleDeteleTask(index)}
            >
                <Icon
                    name='trash-outline'
                    size={30}
                    color='#f1f1f1'
                />
            </ViewStyled>
        )
    }

    const getTaskList = async () => {
        const { data, error } = await supabase
        .from('tasklist')
        .select();

        error && (
            console.error(error)
        );

        data && (
            setTaskList(data)
        );
    }

    useEffect(() => {   
        getTaskList();
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
                {!isNewTask && taskList.length === 0 && (
                    <WrapperTaskListEmpty>
                        <Icon
                            name='list-outline'
                            size={80}
                            color='#7C7C8A'
                        />
                        <TextEmptyList>
                            Você não tem tarefas registradas.
                        </TextEmptyList>
                    </WrapperTaskListEmpty>
                )}
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {taskList?.map((task, index) => (
                        <Swipeable
                            key={task.id}
                            renderRightActions={() => showTrashSwipeable(index)}
                        >
                            <RowTask>
                                <Checkbox
                                    color={task.done ? '#5770F7' : '#7C7C8A'}
                                    style={styles.checkbox}
                                    value={task.done}
                                    onValueChange={() => {
                                        updateTaskStatus(index);
                                    }}
                                />
                                <TaskDescription done={task.done}>
                                    {task.description}
                                </TaskDescription>
                            </RowTask>
                        </Swipeable>
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