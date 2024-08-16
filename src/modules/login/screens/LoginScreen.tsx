import { useState } from "react";

import axios from 'axios';

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, TitleLogin } from "../styles/loginScreen.styles";
import SVGLogo from "../../../shared/components/icons/SVGLogo";
import { useRequests } from "../../../shared/hooks/useRequests";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { postRequest, loading } = useRequests();


    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        postRequest("http://localhost:8080/auth", {
            email: email, //entre aspas o nome do campo "email"
            password: password//entre aspas o nome do campo "password"
        });
        
    }

    return (
        <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
                    <SVGLogo/>
                <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                    <Input
                        title="Usuário"
                        margin="32px 0px 0px"
                        onChange={handleEmail}
                        value={email} />
                    <Input
                        type="password"
                        title="Senha"
                        margin="32px 0px 0px"
                        onChange={handlePassword}
                        value={password} />
                    <Button
                        loading={loading}
                        type="primary"
                        margin="64px 0px 16px 0px"
                        onClick={handleLogin}>ENTRAR
                    </Button>
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>);
};

export default LoginScreen; 