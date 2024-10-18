import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer.js';
export function AnecdoteForm() {
  const dispatch = useDispatch();
  return (
    <>
      <h2>create new</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const anecdote = e.currentTarget.note.value;
          e.currentTarget.note.value = '';
          dispatch(createAnecdote(anecdote));
        }}
      >
        <div>
          <input name="note" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}
