import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer.js';
import {
  notification,
  removeNotification,
} from '../reducers/notificationReducer.js';
export const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filteredAnecdotes = anecdotes.filter((a) => {
      return a.content.includes(filter);
    });
    return filteredAnecdotes.sort((a, b) => {
      return b.votes - a.votes;
    });
  });
  const dispatch = useDispatch();
  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button
          onClick={() => {
            dispatch(vote(anecdote.id));
            dispatch(notification(`you voted '${anecdote.content}'`));
            setTimeout(() => dispatch(removeNotification()), 5000);
          }}
        >
          vote
        </button>
      </div>
    </div>
  ));
};
