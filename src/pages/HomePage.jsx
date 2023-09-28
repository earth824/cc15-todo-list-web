import { useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
import { useState } from 'react';

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  const createTodo = () => {};

  useEffect(() => {
    axios
      .get('http://localhost:5555/todo', {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      })
      .then(res => {
        setTodos(res.data.todos);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <Form setTodos={setTodos} createTodo={createTodo} />
      <List todos={todos} />
    </section>
  );
}
