import React, { useState, useRef} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import People from '../../assets/people-talking.svg';
import Arrow from '../../assets/arrow.svg';
import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles.js'

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser])

    navigate("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItems>

        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

      </ContainerItems>
    </Container>
  );
}

export default App