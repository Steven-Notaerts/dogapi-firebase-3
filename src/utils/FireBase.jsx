import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, remove } from "firebase/database";

//config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);

// create item
export const writeItem = (item) => {
  set(ref(database, "dogFavorits/" + item.id), item);
};

//delete item
export const removeItem = async (id) => {
  await remove(ref(database, "dogFavorits/" + id));
};

//read items
export const readItem = async () => {
  const dbRef = ref(database);
  const snapshots = await get(child(dbRef, `dogFavorits/`));
  //test if
  if (snapshots.exists()) {
    snapshots.forEach((snapshot) => {
      var childKey = snapshot.key;
      var childData = snapshot.val();
      console.log(childData);
    });
    let data = [];
    data = snapshots.val();
    console.log(data);
    return data;
  } else {
    console.log("no favo");
  }
};
