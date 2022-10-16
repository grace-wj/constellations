import React from 'react';
import { firebase } from 'firebase';

function Firebase() {
    const firebaseApp = firebase.apps[0];
    return (
        <div>
            <h1>React & Firebase</h1>
            <h2>By Grace</h2>
            <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        </div>
    );
}

export default Firebase;