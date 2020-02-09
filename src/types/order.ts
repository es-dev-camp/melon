import firebase from "firebase/app";
import "firebase/firestore";

export const orderCollectionPath = "order";

/** 注文情報 */
export interface order {
  /** 品目 */
  item: product;
  /** 品目その他 */
  otherItemText: string;
  /** 数量 */
  count: number;
  /** 発送期限 */
  deadline: firebase.firestore.FieldValue | Date | null;
  /** 卸売 */
  isBusiness: boolean;
  /** 作成日 */
  createdAt: firebase.firestore.FieldValue | Date | null;
  /** 作成者アカウント */
  creatorAccount: string;
  /** 更新日 */
  modifiedAt: firebase.firestore.FieldValue | Date | null;
  /** 更新者アカウント */
  modifierAccount: string;
}

export enum product {
  melon = 0,
  rice = 1,
  blackBean = 2,
  spinach = 3,
  other = 99
}
