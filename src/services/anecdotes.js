import axios from 'axios';

async function getAnecdotes() {
  const response = await axios.get('/anecdotes');
  return response.data;
}

async function createAnecdote(content) {
  const response = await axios.post('/anecdotes', { content, votes: 0 });
  return response.data;
}
export { getAnecdotes, createAnecdote };
