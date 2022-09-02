import { InputComponent } from './styles';

export const Input = ({ placeholder, type, setInput, isPassword = false }) => {
    return (
        <InputComponent
            placeholder={placeholder}
            type={type}
            secureTextEntry={isPassword}
            onChangeText={setInput}
        />
    );
}