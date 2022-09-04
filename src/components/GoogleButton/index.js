import { GoogleButtonComponent, TextButton } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const GoogleButton = ({ onPressFunction, title }) => {
    return (
        <GoogleButtonComponent
            onPress={() => onPressFunction()}
        >
            <Icon
                name='logo-google'
                size={30}
                color='#121212'
            />
            <TextButton>{title}</TextButton>
        </GoogleButtonComponent>
    )
}