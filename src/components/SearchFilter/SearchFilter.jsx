import styled from 'styled-components';

const SearchFilter = ({ filter, setFilter }) => {
  return (
    <>
      <SearchInputContainet>
        <SearchInput
          type="text"
          onChange={setFilter}
          value={filter}
          placeholder="search"
        />
        <Clear onClick={setFilter}>x</Clear>
      </SearchInputContainet>
    </>
  );
};

const SearchInput = styled.input`
  background-color: rgb(29, 33, 40);
  border: none;
  border-radius: 2px;
  color: white;
  padding: 5px 10px;

  &:focus-visible {
    outline: 2px solid rgb(25, 102, 246);
  }
`;

const SearchInputContainet = styled.div`
  /* height: 100%; */
  display: flex;
  position: relative;
  background-color: rgb(29, 33, 40);
`;

const Clear = styled.div`
  cursor: pointer;
  font-size: 20px;
  line-height: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  /* margin-bottom: 10px; */
  padding-right: 10px;
  padding-left: 10px;
  color: rgb(141, 143, 148);
  /* background-color: red; */

  &:hover {
    color: rgb(25, 102, 246);
  }
`;

export default SearchFilter;
