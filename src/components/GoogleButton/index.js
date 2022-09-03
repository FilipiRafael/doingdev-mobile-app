import { GoogleButtonComponent, TextButton } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const GoogleButton = ({ onPressFunction }) => {
    return (
        <GoogleButtonComponent
            onPress={() => onPressFunction()}
        >
            <Icon
                name='logo-github'
                size={30}
                color='#121212'
            />
            <TextButton>Conectar-se com o Google</TextButton>
        </GoogleButtonComponent>
    )
}