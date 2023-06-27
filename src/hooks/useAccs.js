import { useState, useEffect } from 'react';
import { getAccs } from 'api/actions';

import { settings } from 'settings';

const MIN_EP = settings.minEP;

const useAccs = mainFilter => {
  const [isLoading, setLoading] = useState(true);
  const [accs, setAccs] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterAll, setFilterAll] = useState('all');
  const [error, setEror] = useState(null);

  const epToShow = mainFilter === 'user' ? 'isClosed' : 'parserEP';

  // const mainFilteredAccMaps =
  //   mainFilter === 'user'
  //     ? accs
  //     : accs.map(el => ({
  //         ...el,
  //         isClosed: el.isClosed === 'blocked' ? 'blocked' : el.parserEP,
  //       }));

  const opened = accs.filter(el => {
    return Number(el[epToShow]) < MIN_EP && el.isClosed !== 'blocked';
  });
  const closed = accs.filter(el => Number(el[epToShow]) >= MIN_EP);
  const favorites = accs.filter(el => el.isFavorite);
  const blocked = accs.filter(el => el.isClosed === 'blocked');

  const accsToFilter = () => {
    if (filterAll === 'all') {
      return accs;
    }
    if (filterAll === 'opened') {
      return opened;
    }
    if (filterAll === 'closed') {
      return closed;
    }
    if (filterAll === 'favorites') {
      return favorites;
    }
    if (filterAll === 'blocked') {
      return blocked;
    }
  };

  const handleFilterChange = e => {
    if (e._reactName === 'onClick') {
      setFilter('');
      return;
    }

    setFilter(e.target.value);
  };

  const handleFilterAllChange = e => {
    setFilterAll(e.target.value);
  };

  const filteredAccs =
    filter === ''
      ? accsToFilter()
      : accsToFilter().filter(el =>
          el.account.toLowerCase().includes(filter.toLowerCase())
        );

  useEffect(() => {
    const getAccsE = async () => {
      try {
        const data = await getAccs();

        setAccs(data);
        setLoading(false);
      } catch (error) {
        setEror(error);
      }
    };

    getAccsE();
  }, []);

  return {
    accs: filteredAccs,
    filter,
    isLoading,
    setFilter: handleFilterChange,
    setFilterAll: handleFilterAllChange,
    filterAll,
    data: {
      all: accs.length,
      opened: opened.length,
      closed: closed.length,
      favorites: favorites.length,
      blocked: blocked.length,
    },
    error,
    mainFilter,
  };
};

export default useAccs;
