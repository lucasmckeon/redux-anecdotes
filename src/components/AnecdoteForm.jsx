import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer.js';
import { createAnecdote as serverCreateAnecdote } from '../services/anecdotes.js';
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
        onSubmit={async (e) => {
          e.preventDefault();
          const anecdote = e.currentTarget.note.value;
          e.currentTarget.note.value = '';
          const createdAnecdote = await serverCreateAnecdote(anecdote);
          dispatch(createAnecdote(createdAnecdote));
          dispatch(
            notification(`created anecdote: ${createdAnecdote.content}`)
          );
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
