import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase()
{
    const firebaseConfig = {
        apiKey: "AIzaSyB_ZFgaiEqP3ykPkvjX1P3uoEJDf2PNTCs",
        authDomain: "cryptid-games.firebaseapp.com",
        projectId: "cryptid-games",
        storageBucket: "cryptid-games.appspot.com",
        messagingSenderId: "949870455773",
        appId: "1:949870455773:web:84c3f33307539d5b156434",
        measurementId: "G-STNWTX55TL"
    };

    const app = initializeApp(firebaseConfig);

    return getDatabase(app);
}

export default StartFirebase;