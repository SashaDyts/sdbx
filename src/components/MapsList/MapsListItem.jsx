import styled from 'styled-components';

import EP from './EP';
import AccEP from './AccEP';
import Video from './Video';
import PlayBtn from './PlayBtn';
import FavBtn from './FavBtn';

const MapsListItem = ({
  item,
  currentAcc,
  changeIsDone,
  changeIsFavorite,
  mainFilter,
  openedItem,
  setOpenedItem,
  isLoading,
  setLoading,
}) => {
  return (
    <ItemContainer isDone={item.isDone}>
      <Top>
        <MapNameText isDone={item.isDone}>
          <FavBtn
            isFavorite={item.isFavorite}
            changeIsFavorite={changeIsFavorite}
            map={item.mapName}
          />
          {item.mapName}
        </MapNameText>
        <EP
          text={item.isDone}
          currentAcc={currentAcc}
          changeIsDone={changeIsDone}
          map={item.mapName}
          mapId={item.mapId}
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
          isLoading={isLoading}
          setLoading={setLoading}
        />
      </Top>
      <Top>
        <TimeByVideo>
          Час проходження по відео:
          <TimeText>{item.timeByVideo ? item.timeByVideo : '-'}</TimeText>
        </TimeByVideo>

        <AccEP isClosed={item.isDone} ep={item.EP} />
      </Top>

      <Middle>
        <Video url={item.videoUrl} />
        {item.gameUrl ? <PlayBtn url={item.gameUrl} /> : <></>}
      </Middle>

      {item.questions && (
        <Bottom>
          <div>
            Відповіді:
            {item.questions.split('\n').map(el => (
              <p key={el}>{el}</p>
            ))}
          </div>
        </Bottom>
      )}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  color: white;
  background-color: rgb(20, 24, 29);
  padding: 10px 20px;
  border: 1px solid ${p => (p.isDone ? 'rgb(5, 231, 255)' : 'rgb(33, 38, 45)')};
  border-radius: 4px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
`;

const MapNameText = styled.div`
  display: flex;
  align-items: center;
  color: ${p => (p.isDone ? 'rgb(5, 231, 255)' : 'white')};
`;

const TimeByVideo = styled.p`
  font-size: 14px;
`;

const TimeText = styled.span`
  color: rgb(5, 231, 255);
  margin-left: 10px;
`;

export default MapsListItem;
