import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;


`;

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;

`;

export const TitleLogin = styled(Title)`
    color: #006397;


`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    right: 0;
    top: 0;
    padding: 22px;
    z-index: 2;


`

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;


`

