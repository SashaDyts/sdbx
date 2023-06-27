import styled from 'styled-components';

import AccListEl from './AccListEl';

const AccList = ({
  accs,
  setCurrentAcc,
  setAccEp,
  setAccsPage,
  mainFilter,
}) => {
  return (
    <Container>
      <List>
        {accs.map(el => (
          <ListItem key={el.account}>
            <AccListEl
              item={el}
              setCurrentAcc={setCurrentAcc}
              setAccEp={setAccEp}
              setAccsPage={setAccsPage}
              mainFilter={mainFilter}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin: -5px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
`;

const ListItem = styled.li`
  width: calc((100% - 30px) / 3);
  margin: 5px;
`;

export default AccList;
