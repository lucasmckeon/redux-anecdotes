import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer.js';
import {
  notification,
  removeNotification,
} from '../reducers/notificationReducer.js';
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
          dispatch(notification(`created anecdote: ${anecdote}`));
          setTimeout(() => dispatch(removeNotification()), 5000);
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
