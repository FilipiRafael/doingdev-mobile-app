import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Input } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';
import { GithubButton } from '../../components/GithubButton';
import { GoogleButton } from '../../components/GoogleButton';

import brand from '../../assets/brand.png';
import { Container, Brand, Title, Wrapper, Link, LinkButton, Span } from './styles';

export const SignIn = ({ navigation }) => {

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
                        title="Acessar conta"
                        onPressFunction={handleSignIn}
                    />
                    <GithubButton />
                    <GoogleButton />
                    <LinkButton
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Span>Não tem uma conta?</Span>
                        <Link>Cadastre-se</Link>
                    </LinkButton>
                </Wrapper>
           </SafeAreaView>
        </Container>
    );
}