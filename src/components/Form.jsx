import { useState } from 'react';
import axios from 'axios';

export default function Form({ setTodos }) {
  const [input, setInput] = useState('');
  const handleSubmitForm = e => {
    e.preventDefault();
    // Ignore validate
    axios
      .post(
        'http://localhost:5555/todo',
        { title: input },
        { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      )
      .then(res => {
        console.log('success');
        setInput('');
        // axios
        //   .get('http://localhost:5555/todo', {
        //     headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        //   })
        //   .then(res => {
        //     setTodos(res.data.todos);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });

        // new Todo Obejct => res.data.todo
        setTodos(prev => [...prev, res.data.todo]);
      })
      .catch(err => console.log(err));
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="outline-none px-3 py-1.5 border rounded-md flex-grow"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <button className="bg-blue-800 px-3 py-1.5 text-white rounded-md">Create</button>
    </form>
  );
}
