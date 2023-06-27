import { AiFillCaretLeft } from 'react-icons/ai';
import styled from 'styled-components';

const BackBtn = ({ setCurrentAcc, setAccsPage }) => {
  return (
    <Container>
      <Btn
        onClick={() => {
          setCurrentAcc(null);
          setAccsPage(true);
        }}
      >
        <AiFillCaretLeft color="white" />
        Back
      </Btn>
    </Container>
  );
};

const Container = styled.div``;

const Btn = styled.button`
  cursor: pointer;
  color: inherit;
  display: inline-flex;
  background-color: inherit;
  border: none;
  font-size: 16px;
  padding: 0;
  :hover {
    color: rgb(5, 231, 255);
  }
`;

export default BackBtn;
