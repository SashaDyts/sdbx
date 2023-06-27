import styled from 'styled-components';

import Spinner from 'components/Spinner';

import { changeMapDone } from 'api/actions';

const EP = ({
  text,
  changeIsDone,
  currentAcc,
  map,
  mapId,
  openedItem,
  setOpenedItem,
  isLoading,
  setLoading,
}) => {
  // const [isActive, setActive] = useState(false);
  const isActive = openedItem === map;
  // console.log(isLoading && isActive, map);

  const handleClick = () => {
    if (isLoading && !isActive) {
      return;
    }
    if (openedItem !== map) {
      setOpenedItem(map);
      return;
    }
    // setActive(!isActive);
    setOpenedItem(openedItem === '' ? map : '');
  };

  const handleDone = async () => {
    try {
      setLoading(true);
      await changeMapDone({
        accountName: currentAcc,
        map: { id: mapId, mapName: map },
        value: true,
      });

      changeIsDone(map, true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setOpenedItem('');
    }
  };

  const handleFail = async () => {
    try {
      setLoading(true);
      await changeMapDone({
        accountName: currentAcc,
        map: { id: mapId, mapName: map },
        value: false,
      });

      changeIsDone(map, false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setOpenedItem('');
    }
  };
  return (
    <GContainer>
      {isLoading && isActive ? (
        <div style={{ marginRight: '25px' }}>
          <Spinner isLoading={isLoading} size={29} />
        </div>
      ) : (
        <Container
          text={text}
          isActive={isActive}
          onClick={handleClick}
          bc={'main'}
          disabled={isLoading && !isActive}
        >
          <Text text={text} disabled={isLoading && !isActive}>
            {text ? 'done' : 'fail'}
          </Text>
        </Container>
      )}

      {isActive && !isLoading && (
        <>
          {!text ? (
            <Container text={false} bc={'done'} onClick={handleDone}>
              <Text2>Done</Text2>
            </Container>
          ) : (
            <Container text={false} bc={'fail'} onClick={handleFail}>
              <Text2>Fail</Text2>
            </Container>
          )}
        </>
      )}
    </GContainer>
  );
};

const bcolor = bc => {
  switch (bc) {
    case 'main':
      return 'rgb(33, 38, 45)';

    case 'done':
      return 'rgba(26, 148, 49, 0.5)';

    case 'fail':
      return 'rgba(250, 11, 51, 0.5)';
    default:
      break;
  }
};

const GContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const borderColor = text => {
  if (text === false) {
    return 'rgb(29, 33, 40)';
  }
  if (text !== false) {
    return 'rgb(5, 231, 255)';
  }
};

const hoverBacColor = (bc, disabled) => {
  if (disabled) {
    return 'rgb(33, 38, 45)';
  }
  if (bc === 'done') {
    return 'rgb(26, 148, 49)';
  }
  if (bc === 'fail') {
    return 'rgb(250, 11, 51)';
  }
  if (bc === 'main') {
    return 'rgb(46, 52, 60)';
  }
};

const Container = styled.div`
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => bcolor(p.bc)};
  width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;

  border: 2px solid ${e => borderColor(e.text)};

  border-radius: 3px;

  cursor: ${e => (e.disabled ? 'default' : 'pointer')};

  :hover {
    background-color: ${p => hoverBacColor(p.bc, p.disabled)};
  }
`;

const textColor = text => {
  if (text === false) {
    return 'rgb(255, 255, 234)';
  }
  if (text !== false) {
    return 'rgb(5, 231, 255)';
  }
};

const Text = styled.p`
  color: ${e => textColor(e.text)};
`;
const Text2 = styled.p`
  color: white;
`;

export default EP;
