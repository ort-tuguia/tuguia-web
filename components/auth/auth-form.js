import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import classes from './auth-form.module.css'; 

/* async function createUser(username, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  }); 

 const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
} */

function AuthForm() {
  const usernameInputRef = useRef();
  const enteredPasswordRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    // optional: Add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        username: enteredUsername,
        password: enteredPassword,
      });

      if (!result.error) {
        // set some auth state (in context or redux)
        router.replace('/Guia/HomeGuia/1');
      }
    } else {
      try {
        const result = await createUser(enteredUsername, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      {/* <h1>{isLogin ? 'Login' : 'Sign Up'}</h1> */}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='username' id='username' required ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            ref={usernameInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Ingresar</button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm; 