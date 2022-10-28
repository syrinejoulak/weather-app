import React from 'react';

import Card from '../Card/Card';

import './SearchBox.scss';

const SearchBox = () => {
  return (
    <Card className="searchbox-card">
      <input type="text" className="searchbox-input" defaultValue={'Tunis'} />
    </Card>
  );
};

export default SearchBox;
