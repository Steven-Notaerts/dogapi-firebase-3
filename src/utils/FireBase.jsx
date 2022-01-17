import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};
console.log;
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);

export const writeItem = (item) => {
  set(ref(database, "dogFavorits/" + item.id), item);
};

export const removeItem = async (id) => {
  await remove(ref(database, "dogFavorits/" + id));
};

export const readItem = async () => {
  const dbRef = ref(database);
  const snapshots = await get(child(dbRef, `dogFavorits/`));
  if (snapshots.exists()) {
    snapshots.forEach((snapshot) => {
      var childKey = snapshot.key;
      var childData = snapshot.val();
      // console.log(childData);
    });
    //  console.log(snapshots.val());
    let data = [];
    data = snapshots.val();
    console.log(data);
    return data;
  } else {
    console.log("no favo");
  }
};
