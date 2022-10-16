import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/style.module.scss';

const Home: NextPage = () => {

  // stated
  const [todo, setTodo] = useState({});

  // handle change
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo,[e.target.name]:e.target.value});
  }

  // handle submit 
  const handleTodoSubmit = (e) => {
    e.preventDefault();

    
  }

  return (
    <div className={styles.app}>
      <div>
        <h1>todo app</h1>
        <form onSubmit={handleTodoSubmit}>
          <input
            className={styles.input}
            type="text"
            name="todo"
            id=""
            onChange={handleTodoChange}
            required
          />
          <button
            className=''
            type="submit"
            >Submit</button>
        </form>
        
      </div>
      <div>

      </div>
      
    </div>
  )
}

export default Home
