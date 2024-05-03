import styled from 'styled-components';
import Background from '../../assets/background1.svg';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItems = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(45px);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1`
    font-style: normal;
    font-size: 34px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 80px;
`;

export const Button = styled.button`
    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFFFFF;
    width: 342px;
    margin-top: 120px;
    height: 74px;
    color: #FFFFFF;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: rotateY(180deg);
    }
`;

export const User = styled.li`
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 58px;
    border: none;
    outline: none;

    p {
        color: #FFFFFF;
        font-style: normal;
        font-size: 24px;
        font-weight: normal;
        line-height: 28px;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;