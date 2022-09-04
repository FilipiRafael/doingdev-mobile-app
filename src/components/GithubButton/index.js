import { GithubButtonComponent, TextButton } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const GithubButton = ({ onPressFunction, title }) => {
    return (
        <GithubButtonComponent
            onPress={() => onPressFunction()}
        >
            <Icon
                name='logo-google'
                size={30}
                color='#f1f1f1'
            />
            <TextButton>{title}</TextButton>
        </GithubButtonComponent>
    )
}