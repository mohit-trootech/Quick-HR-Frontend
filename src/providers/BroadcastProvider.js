import { BroadcastContext } from "../context/Contexts";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { GetRequest } from "../utils/AxiosRequest";
import { BaseUrlPath } from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { PushNotification } from "../utils/PushNotifications";
const BroadcastProvider = ({ children }) => {
  const pageLoadTimestamp = Date.now();
  const [app, setApp] = useState();
  const [db, setDb] = useState();
  const getFirestoreConfiguration = async () => {
    let response = await GetRequest(`${BaseUrlPath}/firestore`, getBearerToken);
    response && setApp(initializeApp(response.data));
  };

  const createCollectionDocument = async (data) => {
    let obj = { created: Date.now() };
    data.forEach((value, key) => (obj[key] = value));
    if (db) {
      try {
        await addDoc(collection(db, "broadcasts"), obj);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const collectionSnapshot = async () => {
    if (db) {
      try {
        await onSnapshot(collection(db, "broadcasts"), (snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.data().created > pageLoadTimestamp) {
              PushNotification(doc.data().title);
            }
          });
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  if (db) {
    collectionSnapshot();
  }
  const data = {
    app,
    getFirestoreConfiguration,
    createCollectionDocument,
    setDb,
  };
  return (
    <BroadcastContext.Provider value={data}>
      {children}
    </BroadcastContext.Provider>
  );
};
export default BroadcastProvider;
