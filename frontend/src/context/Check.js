import React from 'react';
import { useAuth } from './auth';

function Check() {
    const[auth,setAuth]=useAuth();
    console.log(auth);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Check;
