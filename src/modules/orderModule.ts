import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { orderCollectionPath, order, product } from "@/types/order";

export function getBlancOrderData(): Partial<order> {
  return {
    item: product.other,
    otherItemText: "",
    count: 0,
    deadline: new Date(),
    isBusiness: false
  };
}

export async function addOrder(payload: Partial<order>) {
  const user = firebase.auth().currentUser;
  if (!payload || !user) {
    throw new Error("Order data or user data undefined.");
  }

  payload.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  payload.creatorAccount = user.email || "";
  payload.modifiedAt = firebase.firestore.FieldValue.serverTimestamp();
  payload.modifierAccount = user.email || "";

  await firebase
    .firestore()
    .collection(orderCollectionPath)
    .add(payload);
}

export class orderCollection {
  private orderCache: order[] = [];
  private unsub: () => void = () => {};

  constructor() {
    this.sub();
  }

  get dataSet(): order[] {
    return this.orderCache;
  }

  private sub() {
    const collection = firebase.firestore().collection(orderCollectionPath);
    this.unsub = collection.onSnapshot(
      snapshot => {
        const orderData: order[] = [];
        snapshot.forEach(j => {
          orderData.push(j.data() as order);
        });
        this.orderCache = orderData;
      },
      err => {
        console.error(`Encountered error: ${err}`);
      }
    );
  }

  atouch() {
    this.sub();
  }

  detouch() {
    this.unsub();
  }
}