import styled from 'styled-components';

import SearchFilter from 'components/SearchFilter';
import SortComp from 'components/SortComp';

// import { Container } from 'pages/UserPage';

const MapsFilters = ({
  setFilterAll,
  filterAll,
  data,
  setFilter,
  filter,
  EPdata,
  sortBy,
  setSortBy,
}) => {
  return (
    <PageContainer>
      {/* <Container> */}
      <PC>
        <InnerContainer>
          <SearchFilter filter={filter} setFilter={setFilter} />
          <SortComp sortBy={sortBy} setSortBy={setSortBy} />
        </InnerContainer>
        <RadioContainer>
          <Info>Maps:</Info>
          {data.required !== 0 && (
            <Label checked={filterAll === 'required'}>
              Required
              <Input
                type="radio"
                name="contact"
                value="required"
                checked={filterAll === 'required'}
                onChange={setFilterAll}
              />
              <Ep checked={filterAll === 'required'}>{data.required}</Ep>
            </Label>
          )}
          <Label checked={filterAll === 'favorites'}>
            Favorites
            <Input
              type="radio"
              name="contact"
              value="favorites"
              checked={filterAll === 'favorites'}
              onChange={setFilterAll}
            />
            <Ep checked={filterAll === 'favorites'}>{data.favorites}</Ep>
          </Label>
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
            Done
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
            Fail
            <Input
              type="radio"
              name="contact"
              value="closed"
              checked={filterAll === 'closed'}
              onChange={setFilterAll}
            />
            <Ep checked={filterAll === 'closed'}>{data.closed}</Ep>
          </Label>
        </RadioContainer>
        {/* <EPinfo EPdata={EPdata} /> */}
      </PC>
      {/* </Container> */}
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
`;

const RadioContainer = styled.div`
  display: flex;
  background-color: rgb(29, 33, 40);
  padding-left: 15px;
`;

const PageContainer = styled.div`
  color: white;
  /* display: flex; */
  /* flex-direction: column; */

  /* background-color: rgb(20, 24, 29);
  border-bottom: 1px solid rgb(39, 39, 39); */

  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 10px;
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

export default MapsFilters;
