import { useState, useEffect } from 'react';

import { getAccMaps } from 'api/actions';

const useAccount = () => {
  const [currentAcc, setCurrentAcc] = useState(null);
  const [accMaps, setAccMaps] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accEp, setAccEp] = useState(null);
  const [filter, setFilter] = useState('');
  const [filterAll, setFilterAll] = useState('all');
  const [requiredEvents, setRequiredEvents] = useState([]);

  const probablyEP = accMaps.reduce(
    (acc, el) => acc + (el.isDone ? Number(el.EP) : 0),
    0
  );

  const favoritesEP = accMaps.reduce(
    (acc, el) => acc + (el.isFavorite ? Number(el.EP) : 0),
    0
  );

  const opened = accMaps.filter(el => el.isDone);
  const closed = accMaps.filter(el => !el.isDone);
  const favorites = accMaps.filter(el => el.isFavorite);

  const events =
    requiredEvents.length === 0
      ? []
      : requiredEvents.map(el => {
          const mapsOfEvent = el.eventMaps.map(item => {
            return accMaps.find(el => el.mapName === item);
          });

          return { eventName: el.eventName, maps: mapsOfEvent, ep: el.eventEP };
        });

  const reset = () => {
    setFilter('');
    setFilterAll('all');
  };

  const accsToFilter = () => {
    if (filterAll === 'all') {
      return accMaps;
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
  };

  const handleSetAccEp = ep => {
    setAccEp(prevState => ({ ...prevState, isClosed: ep }));
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

  const filteredMaps =
    filterAll === 'required'
      ? []
      : filter === ''
      ? accsToFilter()
      : accsToFilter().filter(el =>
          el.mapName.toLowerCase().includes(filter.toLowerCase())
        );

  const changeIsDone = (map, value) => {
    const res = accMaps.map(el => {
      if (el.mapName === map) {
        return { ...el, isDone: value };
      } else {
        return { ...el };
      }
    });

    setAccMaps(res);
  };

  const changeIsFavorite = (map, value) => {
    const res = accMaps.map(el => {
      if (el.mapName === map) {
        return { ...el, isFavorite: value };
      } else {
        return { ...el };
      }
    });

    setAccMaps(res);
  };

  useEffect(() => {}, [currentAcc]);

  useEffect(() => {
    const getMaps = async () => {
      if (!currentAcc) {
        return;
      }
      setLoading(true);
      try {
        const { maps, required } = await getAccMaps(currentAcc);

        setAccMaps(maps);

        setRequiredEvents(required);
        // setRequiredEvents([]);

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    getMaps();
  }, [currentAcc]);

  return {
    currentAcc,
    setCurrentAcc,
    accMaps: filterAll === 'required' ? events : filteredMaps,
    isLoading,
    setAccMaps,
    error,
    accEp,
    setAccEp,
    handleSetAccEp,
    changeIsDone,
    changeIsFavorite,
    filter,
    setFilter: handleFilterChange,
    setFilterAll: handleFilterAllChange,
    filterAll,
    data: {
      all: accMaps.length,
      opened: opened.length,
      closed: closed.length,
      favorites: favorites.length,
      required:
        requiredEvents.length === 0
          ? 0
          : events.reduce((acc, el) => el.maps.length + acc, 0),
    },
    reset,
    EPdata: {
      probablyEP,
      favoritesEP,
    },
  };
};

export default useAccount;
