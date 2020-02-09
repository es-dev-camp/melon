import firebase from "firebase/app";
import "firebase/firestore";

export interface order {
  item: number;
  count: number;
  deadline: firebase.firestore.Timestamp;
  isBusiness: boolean;
  createdAt: firebase.firestore.Timestamp;
  creatorAccount: string;
  modifiedAt: firebase.firestore.Timestamp;
  modifierAccount: string;
}
