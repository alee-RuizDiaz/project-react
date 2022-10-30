
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyADWkm5BYAHHUXFBrfCiPsU_yidO2lqlT0",
  authDomain: "tecnocommerce-c6979.firebaseapp.com",
  projectId: "tecnocommerce-c6979",
  storageBucket: "tecnocommerce-c6979.appspot.com",
  messagingSenderId: "764708751333",
  appId: "1:764708751333:web:e7fbb74961c69c9ccf110c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);