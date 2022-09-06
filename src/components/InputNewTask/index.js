import { Input } from './styles';

export const InputNewTask = ({ handleKeyPress }) => {
    return (
        <Input
            keyboardType="text"
            autofocus
            placeholder="Digite a nova tarefa..."
        />
    )
}