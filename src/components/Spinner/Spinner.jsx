import { Watch } from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = ({ isLoading, size }) => {
  return (
    <Container>
      <Watch
        visible={isLoading}
        height={size}
        width={size}
        ariaLabel="comment-loading"
        // wrapperStyle={{
        //   position: 'relative',
        //   display: 'flex',
        //   top: '40%',
        //   justifyContent: 'center',
        // }}
        // wrapperClass="comment-wrapper"
        color="rgb(5, 231, 255)"
        backgroundColor="#F4442E"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
