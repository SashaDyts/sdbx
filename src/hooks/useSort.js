import { useState } from 'react';

const useSort = (maps, filterAll) => {
  const [sortBy, setSortBy] = useState('Сортування');

  // const str = '19/21';

  // console.log(str.split('/')[0]);

  const sortMaps = () => {
    if (filterAll === 'required') {
      return maps;
    }

    switch (sortBy) {
      case 'Сортування':
        return maps;

      case 'По зростанню EP':
        return [...maps].sort(
          (a, b) =>
            Number(a.EP.length > 2 ? a.EP.split('/')[0] : a.EP) -
            Number(b.EP.length > 2 ? b.EP.split('/')[0] : b.EP)
        );
      case 'По спаданню EP':
        return [...maps].sort(
          (a, b) =>
            Number(b.EP.length > 2 ? b.EP.split('/')[0] : b.EP) -
            Number(a.EP.length > 2 ? a.EP.split('/')[0] : a.EP)
        );

      default:
        break;
    }
  };

  const sortedMaps = sortMaps();

  return {
    sortBy,
    setSortBy,
    sortedMaps: sortedMaps,
  };
};

export default useSort;
