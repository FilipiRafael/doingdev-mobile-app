import { useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';

import { Input } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';
import { supabase } from '../../services/supabase';

import brand from '../../assets/brand.png';
import { Container, Brand, Title, Wrapper, Link, LinkButton, Span } from './styles';

export const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        if (email === '' || password === '') {
            Alert.alert('Logar', 'Preencha os campos de e-mail e senha');
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({
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
                        title="Acessar conta"
                        onPressFunction={handleSignIn}
                    />
                    <LinkButton
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Span>Não tem uma conta?</Span>
                        <Link>Cadastre-se</Link>
                    </LinkButton>
                </Wrapper>
           </SafeAreaView>
        </Container>
    );
}