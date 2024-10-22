import { useEffect } from 'react';
import { AnecdoteForm } from './components/AnecdoteForm.jsx';
import { AnecdoteList } from './components/AnecdoteList.jsx';
import { Filter } from './components/Filter.jsx';
import { Notification } from './components/Notification.jsx';
import { getAnecdotes } from './services/anecdotes.js';
import { useDispatch } from 'react-redux';
import { setAnecdotes } from './reducers/anecdoteReducer.js';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAnecdotes = async () => {
      const anecdotes = await getAnecdotes();
      dispatch(setAnecdotes(anecdotes));
    };
    fetchAnecdotes();
  }, [dispatch]);
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
