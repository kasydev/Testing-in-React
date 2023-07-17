import React from 'react';

const Login = () => {

    const a = 2;
    const b = 4;

    return (
      <div>
        Login Page
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>

        <h1 data-testid="mytestid"> Hello </h1>
        <span title='sum'>{a + b}</span>
      </div>
    );
}
 
export default Login;