import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (id, content) => {
    console.log('PUT to the db');
      const jateText = await openDB('theOneDB', 1);
      const readText = jateText.transaction('theOneDB', 'readwrite');
      const store = readText.objectStore('theOneDB');
      const request = store.put({ id: id, content: content });
      const result = await request;
      console.log('Your words are now written in the stars', result);
  };
  
  export const getDb = async () => {
    console.log('GET from the db');
      const jateText = await openDB('theOneDB', 1);
      const readText = jateText.transaction('theOneDB', 'readonly');
      const store = readText.objectStore('theOneDB');
      const request = store.getAll();
      const result = await request;
      console.log('result.value', result);
      return result;
  };

initdb();
