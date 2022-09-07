import { Input } from './styles';

export const InputNewTask = ({ value, setText }) => {
    return (
        <Input
            keyboardType="text"
            autoFocus={true}
            placeholder="Digite a nova tarefa..."
            value={value}
            onChangeText={(e) => setText(e)}
        />
    )
}