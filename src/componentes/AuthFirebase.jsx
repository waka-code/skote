import React, { useState } from 'react';
import 'firebase/auth';
import "firebase/firestore";
import { useFirebaseApp } from "reactfire";


 /*falta completar*/
function AuthFirebase(props){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
   
    const firebase = useFirebaseApp();

    const submit = async (e)=>{
        e.preventDefault();
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    return(
        <form className="firebase">
          <div className="row mb-3">
           <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" onChange={(ev)=> setEmail(ev.target)}>Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" />
          </div>
          </div>
         <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" onChange={(ev)=> setPassword(ev.target)}>Pass</label>
           <div className="col-sm-10">
            <input type="password" className="form-control" />
          </div>
          </div>
            <button type="submit" className="btn btn-primary" onClick={submit}>Sign in</button>
         </form>
    );
}

export default AuthFirebase;