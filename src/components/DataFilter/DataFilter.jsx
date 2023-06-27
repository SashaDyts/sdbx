import styled from 'styled-components';

const DataFilter = ({ mainFilter, setMainFilter }) => {
  return (
    // <RadioContainer>
    <ElContainer>
      <Container
        isActive={mainFilter === 'user'}
        onClick={() => {
          setMainFilter('user');
        }}
      >
        <Text>User</Text>
      </Container>
      <Container
        isActive={mainFilter === 'parser'}
        onClick={() => {
          setMainFilter('parser');
        }}
      >
        <Text>Parser</Text>
      </Container>
    </ElContainer>
    // </RadioContainer>
  );
};

const ElContainer = styled.div`
  display: flex;
`;

//   background-color: ${p => (p.checked ? 'rgb(39,110,241)' : 'rgb(29, 33, 40)')};

const Container = styled.div`
  /* margin-left: 200px; */
  font-size: 14px;
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p =>
    p.isActive ? 'rgb(39, 110, 241)' : 'rgb(29, 33, 40)'};
  width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;

  /* border: 1px solid white; */
  cursor: pointer;
  border-radius: 3px;

  :hover {
    background-color: rgb(25, 102, 246);
  }

  :not(:last-child) {
    margin-right: 10px;
  }
`;

const Text = styled.p`
  color: rgb(255, 255, 234);
`;

export default DataFilter;
