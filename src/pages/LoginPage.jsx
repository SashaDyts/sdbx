import styled from 'styled-components';
// import LoginBtn from 'components/LoginBtn';

import useLogin from 'hooks/useLogin';
const LoginPage = ({ setIsLoggined, setUsername }) => {
  const {
    error,
    isLoading,
    setPassword,
    setTgNick,
    onLogin,
    password,
    tgNick,
  } = useLogin(setIsLoggined, setUsername);

  return (
    <Container>
      <Form onSubmit={onLogin}>
        <Label>
          {/* Nick */}
          <Input
            type="text"
            value={tgNick}
            onChange={setTgNick}
            isError={error}
            placeholder="Nick"
          />
        </Label>
        <Label>
          {/* Password */}
          <Input
            type="password"
            value={password}
            onChange={setPassword}
            isError={error}
            placeholder="Password"
          />
        </Label>

        <BtnContainer>
          <Btn type="submit" isLoading={isLoading}>
            Login
          </Btn>
        </BtnContainer>
        {error && <ErrorTxt>{error.message}</ErrorTxt>}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Form = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
`;

const inputOutlineColor = (error, type) => {
  if (!error) {
    return 'none';
  }

  if (
    error.message === 'Nick and password is required' ||
    error.message === 'Nick or password is wrong'
  ) {
    return '2px solid rgb(178, 50, 50)';
  }

  if (error.message === 'Password is required' && type === 'password') {
    return '2px solid rgb(178, 50, 50)';
  }
  if (error.message === 'Nick is required' && type === 'text') {
    return '2px solid rgb(178, 50, 50)';
  }
};
const inputOutlineFocusColor = (error, type) => {
  if (!error) {
    return '2px solid rgb(25, 102, 246)';
  }

  if (
    error.message === 'Nick and password is required' ||
    error.message === 'Nick or password is wrong'
  ) {
    return '2px solid red';
  }

  if (error.message === 'Password is required' && type === 'password') {
    return '2px solid red';
  }
  if (error.message === 'Nick is required' && type === 'text') {
    return '2px solid red';
  }

  return '2px solid rgb(25, 102, 246)';
};

const Input = styled.input`
  background-color: rgb(29, 33, 40);
  border: none;
  border-radius: 2px;
  color: white;
  padding: 5px 10px;

  outline: ${p => inputOutlineColor(p.isError, p.type)};

  &:focus-visible {
    outline: ${p => inputOutlineFocusColor(p.isError, p.type)};
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 15px;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  color: white;
  /* width: 50%; */
  background-color: ${p => (p.isLoading ? 'gray' : 'rgb(74, 87, 110)')};
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;

  :hover {
    background-color: ${p => (p.isLoading ? 'gray' : 'rgb(25, 102, 246)')};
  }
`;

const ErrorTxt = styled.p`
  margin-top: 15px;
  color: rgb(178, 50, 50);
`;

export default LoginPage;
