import { useDispatch } from 'react-redux';
import { filter } from '../reducers/filterReducer.js';

function Filter() {
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        Filter{' '}
        <input
          name="filter"
          onChange={(e) => dispatch(filter(e.currentTarget.value))}
        />
      </label>
    </div>
  );
}

export { Filter };
