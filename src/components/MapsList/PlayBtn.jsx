import styled from 'styled-components';

const PlayBtn = ({ url }) => {
  const handleClick = () => {
    window.open(url);
  };

  return (
    <Container onClick={handleClick}>
      <Text>Play</Text>
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(33, 38, 45);
  width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;

  border: 2px solid white;
  cursor: pointer;
  border-radius: 3px;

  :hover {
    background-color: rgba(5, 231, 255, 0.5);
  }
`;

const Text = styled.p`
  color: rgb(255, 255, 234);
`;

export default PlayBtn;
