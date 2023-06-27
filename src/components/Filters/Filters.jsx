import styled from 'styled-components';

import SearchFilter from 'components/SearchFilter';

import { Container } from 'pages/UserPage';

const Filters = ({ setFilterAll, filterAll, data, setFilter, filter }) => {
  return (
    <PageContainer>
      <Container>
        <PC>
          <SearchFilter filter={filter} setFilter={setFilter} />
          <RadioContainer>
            <Info>Accounts:</Info>
            <Label checked={filterAll === 'all'}>
              All
              <Input
                type="radio"
                name="contact"
                value="all"
                checked={filterAll === 'all'}
                onChange={setFilterAll}
              />
              <Ep checked={filterAll === 'all'}>{data.all}</Ep>
            </Label>
            <Label checked={filterAll === 'opened'}>
              Opened
              <Input
                type="radio"
                name="contact"
                value="opened"
                checked={filterAll === 'opened'}
                onChange={setFilterAll}
              />
              <Ep checked={filterAll === 'opened'}>{data.opened}</Ep>
            </Label>
            <Label checked={filterAll === 'closed'}>
              Closed
              <Input
                type="radio"
                name="contact"
                value="closed"
                checked={filterAll === 'closed'}
                onChange={setFilterAll}
              />
              <Ep checked={filterAll === 'closed'}>{data.closed}</Ep>
            </Label>
            <Label checked={filterAll === 'blocked'}>
              blocked
              <Input
                type="radio"
                name="contact"
                value="blocked"
                checked={filterAll === 'blocked'}
                onChange={setFilterAll}
              />
              <Ep checked={filterAll === 'blocked'}>{data.blocked}</Ep>
            </Label>
          </RadioContainer>
        </PC>
      </Container>
    </PageContainer>
  );
};

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const PC = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

const RadioContainer = styled.div`
  display: flex;
`;

const PageContainer = styled.div`
  color: white;
  /* display: flex; */
  /* flex-direction: column; */

  background-color: rgb(20, 24, 29);
  border-bottom: 1px solid rgb(39, 39, 39);

  padding-top: 15px;
  padding-bottom: 8px;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;

  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: ${p => (p.checked ? 'rgb(39,110,241)' : 'rgb(29, 33, 40)')};
  padding: 5px 15px;
  border-radius: 20px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover:not(:checked) {
    background-color: rgb(25, 102, 246);
  }
`;

const Ep = styled.div`
  margin-left: 7px;
  padding: 5px;
  font-size: 12px;
  border-radius: 50%;
  background-color: ${p => (p.checked ? 'rgb(91,145,245)' : 'rgb(56, 62, 70)')};
`;

export default Filters;
