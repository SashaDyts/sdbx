import styled from 'styled-components';
import { AiFillYoutube } from 'react-icons/ai';

const Video = ({ url }) => {
  const handleClick = () => {
    window.open(url);
  };

  return (
    <>
      {url ? (
        <Container onClick={handleClick}>
          <Text>Відео-проходження</Text>
          <VideoSp className="vv">
            <AiFillYoutube size={25} />
          </VideoSp>
        </Container>
      ) : (
        <ContainerNon>
          <Text>Відео відсутнє</Text>
        </ContainerNon>
      )}
    </>
  );
};

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(33, 38, 45);
  padding: 5px 10px;
  border-radius: 6px;

  :hover {
    background-color: rgba(5, 231, 255, 0.5);
  }

  :hover .vv {
    color: red;
    background-color: white;
  }
`;

const ContainerNon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(33, 38, 45);
  padding: 8px 10px;
  border-radius: 6px;
`;

const Text = styled.p`
  margin-right: 10px;
`;

const VideoSp = styled.span`
  display: inline-flex;
  border-radius: 6px;
  padding: 0px 3px;
`;

export default Video;
