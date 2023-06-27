import AccList from 'components/AccList';
import Filters from 'components/Filters';

import { Container } from './UserPage';

import useAccs from 'hooks/useAccs';
import Spinner from 'components/Spinner';

const AccsPage = ({ setCurrentAcc, setAccEp, mainFilter, setAccsPage }) => {
  const { accs, isLoading, setFilter, setFilterAll, filterAll, data, filter } =
    useAccs(mainFilter);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '48%',
            zIndex: '100',
            color: 'red',
          }}
        >
          <Spinner size={40} />
        </div>
      ) : (
        <>
          <Filters
            setFilterAll={setFilterAll}
            filterAll={filterAll}
            data={data}
            setFilter={setFilter}
            filter={filter}
          />

          <Container>
            <AccList
              accs={accs}
              setCurrentAcc={setCurrentAcc}
              setAccEp={setAccEp}
              setAccsPage={setAccsPage}
              mainFilter={mainFilter}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default AccsPage;
