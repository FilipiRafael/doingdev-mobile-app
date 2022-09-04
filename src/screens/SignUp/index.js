import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Input } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';
import { GithubButton } from '../../components/GithubButton';
import { GoogleButton } from '../../components/GoogleButton';

import brand from '../../assets/brand.png';
import { Container, Brand, Title, Wrapper, Link, LinkButton, Span } from './styles';

export const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
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
                    <GithubButton
                        title="Registrar-se com o Github"
                    />
                    <GoogleButton
                        title="Registrar-se com o Google"
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