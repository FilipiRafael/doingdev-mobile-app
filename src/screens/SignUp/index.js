import { useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';

import { Input } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';

import brand from '../../assets/brand.png';
import { Container, Brand, Title, Wrapper, Link, LinkButton, Span } from './styles';

import { supabase } from '../../services/supabase';

export const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (email === '' || password === '') {
            Alert.alert('Criar Conta', 'Preencha os campos e-mail e senha');
            return;
        }

        const { error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) Alert.alert('Erro', error.message);
    }

    return (
        <Container>
            <SafeAreaView>
                <Brand source={brand} />
                <Wrapper>
                    <Title>Crie Sua Conta</Title>
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
                        title="Criar Conta"
                        onPressFunction={handleSignUp}
                    />
                    <LinkButton
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Span>Já tem uma conta?</Span>
                        <Link>Faça Login</Link>
                    </LinkButton>
                </Wrapper>
            </SafeAreaView>
        </Container>
    );
}