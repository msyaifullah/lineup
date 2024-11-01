import { useState, useEffect } from "react";

function useIndexedDB(databaseName: string, storeName: string, key: string) {
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    const request = window.indexedDB.open(databaseName);

    request.onerror = function(event: any) {
      console.error("Error opening IndexedDB database");
    };

    request.onupgradeneeded = function(event: any) {
      const db = event.target.result;
      db.createObjectStore(storeName);
    };

    request.onsuccess = function(event: any) {
      const db = event.target.result;
      const transaction = db.transaction(storeName, "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(key);
      request.onerror = function(event: any) {
        console.error("Error getting value from IndexedDB");
      };
      request.onsuccess = function(event: any) {
        setValue(event.target.result);
      };
    };
  }, [databaseName, storeName, key]);

  function setValueToIndexedDB(newValue: any) {
    const request = window.indexedDB.open(databaseName);
    request.onerror = function(event: any) {
      console.error("Error opening IndexedDB database");
    };

    request.onsuccess = function(event: any) {
      const db = event.target.result;
      const transaction = db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.put(newValue, key);
      request.onerror = function(event: any) {
        console.error("Error saving value to IndexedDB");
      };
      request.onsuccess = function(event: any) {
        setValue(newValue);
      };
    };
  }

  return [value, setValueToIndexedDB] as const;
}

export default useIndexedDB;