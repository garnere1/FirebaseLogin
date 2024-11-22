
# Firebase Login Page :fire:	

This project is a frontend login and signup page using firebase authentication and user management. It is easy to use and provides a forgot password page, email verification and error checking.




## Authors

- [@garnere1](https://www.github.com/garnere1)


## Run Locally :computer:	

Clone the project

```bash
  git clone https://github.com/garnere1/FirebaseLogin.git
```

Go to the project directory

```bash
  cd my-project
```

Add the following file to src/data/firebase.js

```bash
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  COPY FROM YOUR FIREBASE APP
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

Create node virtual env (optional)

```bash
  pip install nodeenv
  virtualenv env
  . env/bin/activate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Screenshots

<img src="https://githubreadmepics.s3.us-east-2.amazonaws.com/FirebaseLogin.png"  width="400" height="400">
<img src="https://githubreadmepics.s3.us-east-2.amazonaws.com/FirebaseSignUp.png"  width="400" height="400">
<img src="https://githubreadmepics.s3.us-east-2.amazonaws.com/FirebaseForgotPassword.png"  width="400" height="400">

