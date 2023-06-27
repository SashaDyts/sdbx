import styled from 'styled-components';

import icon from '../AccList/icon.png';

const AccEP = ({ ep, isClosed }) => {
  return (
    <Container ep={ep} minEp={isClosed}>
      <Text ep={ep} minEp={isClosed}>
        {ep ? ep : '-'}
      </Text>
      <Img src={icon} alt="logo" width="30" height="30" />
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

  border: 2px solid rgb(29, 33, 40);

  border-radius: 3px;
`;

const Img = styled.img`
  position: absolute;
  right: -15px;
`;

const Text = styled.p`
  color: rgb(255, 255, 234);
`;

export default AccEP;
