import firebase from "firebase/app";
import "firebase/firestore";

/** 注文情報 */
export interface order {
  /** 品目 */
  item: number;
  /** 数量 */
  count: number;
  /** 発送期限 */
  deadline: firebase.firestore.Timestamp;
  /** 卸売 */
  isBusiness: boolean;
  /** 作成日 */
  createdAt: firebase.firestore.Timestamp;
  /** 作成者アカウント */
  creatorAccount: string;
  /** 更新日 */
  modifiedAt: firebase.firestore.Timestamp;
  /** 更新者アカウント */
  modifierAccount: string;
}
