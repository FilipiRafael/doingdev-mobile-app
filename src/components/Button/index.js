import { ButtonStyled, Title } from './styles';

export const ButtonComponent = ({ title, onPressFunction }) => {
    return (
        <ButtonStyled
            onPress={() => onPressFunction()}
        >
            <Title>{title}</Title>
        </ButtonStyled>
    )
}