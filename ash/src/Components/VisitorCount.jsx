import React, { useState, useEffect } from 'react';
import { db } from '../firebaseconfig'; // Adjust the path as needed
import { doc, onSnapshot, collection, query } from 'firebase/firestore';

function VisitorCount() {
  const [visitors, setVisitors] = useState();

  useEffect(() => {
    const q = query(collection(db, 'col1'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setVisitors(data.visitors);
      });
    });

    return () => {
      unsub();
    };
  },);

  return (
    <div>
      <h2>Visitor Count: {visitors}</h2>
    </div>
  );
}

export default VisitorCount;
