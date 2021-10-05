import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/userAction';
import Loading from './Loading';
import DataTable from './DataTable';
import Heading from './Heading';

import schema from '../schema.json';

function Home() {
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.users);
  const { loading, users, error } = usersList;

  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const search = (rows) => {
    return rows.filter((row) => row.name.toLowerCase().indexOf(query) > -1);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      {loading && <Loading error={error} />}
      <>
        <Heading />
        <div className='box'>
          <i className='fa fa-search' aria-hidden='true'></i>
          <input
            placeholder=' Search...'
            type='text'
            value={query}
            onChange={handleChange}
          />
        </div>
        <DataTable headers={Object.keys(schema)} rows={search(users)} />
      </>
    </div>
  );
}

export default Home;
