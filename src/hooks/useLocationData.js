import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB844wuFu2A4QBEZ77iHoNWHyjIYZTYfFI",
  authDomain: "re-prime-dev.firebaseapp.com",
  databaseURL: "https://re-prime-dev.firebaseio.com",
  projectId: "re-prime-dev",
  storageBucket: "re-prime-dev.appspot.com",
  messagingSenderId: "119002103004",
  appId: "1:119002103004:web:9100fd395bb04f49c28819",
  measurementId: "G-561VWB9429"
};



// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export const useLocationData = (countryCode = "IN") => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authReady, setAuthReady] = useState(false); // 👈 new

  // 🔹 Ensure anonymous sign-in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        auth.signInAnonymously()
          .then(() => {
            console.log("✅ Signed in anonymously");
            setAuthReady(true);
          })
          .catch((err) => console.error("❌ Anonymous sign-in failed:", err));
      } else {
        setAuthReady(true);
      }
    });
    return () => unsubscribe();
  }, []);

  // 🔹 Fetch all states dynamically based on country
  useEffect(() => {
    const fetchStates = async () => {
      if (!countryCode || !authReady) return; // 👈 wait for auth
      try {
        const docRef = firestore
          .collection("realtimedb")
          .doc("statemaster")
          .collection(countryCode)
          .doc("data");

        const docSnap = await docRef.get();

        if (docSnap.exists) {
          const data = docSnap.data();        

          const stateList = data?.list?.map((state) => ({
            value: state.code,         
            label: state.description, 
            code: state.code 
          })) || [];

          setStates(stateList);
        } else {
          console.error(`❌ No 'statemaster/${countryCode}/data' document found!`);
          setStates([]);
        }
      } catch (err) {
        console.error(`❌ Failed to load states for ${countryCode}:`, err);
        setStates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, [countryCode, authReady]); // 👈 depends on authReady too

  // 🔹 Fetch cities for a state
  const fetchCities = async (stateCode) => {
    if (!authReady) return; // 👈 ensure auth before fetching
    try {
      const docRef = firestore
        .collection("realtimedb")
        .doc("citymaster")
        .collection(countryCode)
        .doc(stateCode);

      const docSnap = await docRef.get();

      if (docSnap.exists) {
        const data = docSnap.data();
        const cityList = data?.list?.map((city) => city.description) || [];
        setCities(cityList);
      } else {
        console.error(`❌ No 'citymaster/${countryCode}/${stateCode}' document found!`);
        setCities([]);
      }
    } catch (err) {
      console.error(`❌ Failed to load cities for ${stateCode}:`, err);
      setCities([]);
    }
  };

  return { states, cities, fetchCities, loading };
};
