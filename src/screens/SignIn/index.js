import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Input } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';

import brand from '../../assets/brand.png';
import { Container, Brand, Title, Wrapper } from './styles';

export const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }

    return (
        <Container>
           <SafeAreaView>
                <Brand source={brand} />
                <Wrapper>
                    <Title>Faça Login</Title>
                    <Input
                        placeholder='E-mail'
                        type='email'
                        setInput={setEmail}
                    />
                    <Input
                        placeholder='Senha'
                        type='password'
                        isPassword={true}
                        setInput={setPassword}
                    />
                    <ButtonComponent
                        title="Entrar"
                        onPressFunction={handleSignIn}
                    />
                </Wrapper>
           </SafeAreaView>
        </Container>
    );
}