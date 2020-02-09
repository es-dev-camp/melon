import firebase from "firebase/app";
import "firebase/auth";

export async function signIn(payload: {
  email: string;
  password: string;
}): Promise<void> {
  await firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .catch(err => {
      console.log("error: ", err);
      throw err;
    });
  console.log("signIn");
}

export async function signOut(): Promise<void> {
  await firebase
    .auth()
    .signOut()
    .catch(err => {
      console.log("error: ", err);
      throw err;
    });
}
