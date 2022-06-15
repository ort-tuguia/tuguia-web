import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import classes from './auth-form.module.css';
import apiLogin from '../../pages/api/apiLogin';
import Layout from "../layout/layout";

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
      apiLogin.userLogin(enteredUsername, enteredPassword)
        .then(result => {
          let token = result.headers['authorization'] // TODO: Save in gloabl variable
          console.log("Token en login " + token)
          localStorage.setItem("token",token);
          router.replace(`/Admin/HomeAdmin/${result.data.username}`)
        })
        .catch(err => {
          console.error(err)
        })
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
      <Layout>
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
            ref={enteredPasswordRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Ingresar</button>
        </div>
      </form>
    </section>
      </Layout>
  );
}

export default AuthForm; 