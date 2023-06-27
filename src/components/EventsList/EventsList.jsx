import styled from 'styled-components';

import MapsList from 'components/MapsList';

const EventsList = ({
  events,
  currentAcc,
  changeIsDone,
  changeIsFavorite,
  mainFilter,
}) => {
  console.log(events);
  return (
    <Container>
      {events.map(el => (
        <EventContainer key={el.eventName}>
          <EventNameContainer>
            Event: <EventName> {el.eventName}</EventName>
          </EventNameContainer>
          <EventEpContainer>
            EP to pass: <EventEp> {el.ep}</EventEp>
          </EventEpContainer>
          <EventEpContainer>
            Your EP:{' '}
            <EventEp>
              {' '}
              {el.maps.reduce(
                (acc, el) => acc + (el.isDone ? Number(el.EP) : 0),
                0
              )}
            </EventEp>
          </EventEpContainer>
          <MapsTxt>Maps: </MapsTxt>
          <MapsList
            maps={el.maps}
            currentAcc={currentAcc}
            changeIsDone={changeIsDone}
            changeIsFavorite={changeIsFavorite}
            mainFilter={mainFilter}
          />
        </EventContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const EventContainer = styled.div`
  color: white;
  :not(:first-child) {
    margin-top: 30px;
  }
`;
const EventNameContainer = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

const EventName = styled.p`
  margin-left: 20px;
  color: rgb(5, 231, 255);
`;
const EventEpContainer = styled.div`
  display: flex;
  color: white;
  margin-bottom: 5px;

  /* :not(:last-child) {
    margin-bottom: 5px;
  } */
`;

const EventEp = styled.p`
  margin-left: 20px;
  color: rgb(5, 231, 255);
`;

const MapsTxt = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
`;

export default EventsList;
