let db;
console.log("HERE!");
const request = indexedDB.open('budgeTracker', 1);
console.log('request: ' + request);
// When a new version is available, its data is saved to `db` and an ObjectStore is created
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('newBalance', { autoIncrement: true });
};

// If the app is connected, it syncs the data from the user's device
request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.onLine) {
        syncBudget();
    }
};

request.onerror = function (event) {
    console.log(event.target.errorCode);
};

// If the user tries to use app w/o a connection, this saves their data until the app is connected again
function saveRecord(record) {
    const transaction = db.transaction(['newBalance'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('newBalance');
    budgetObjectStore.add(record);
}

// Syncs budget when there's a connection, if data is present in the db that's not in the API
function syncBudget() {
    const transaction = db.transaction(['newBalance'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('newBalance');
    const getAll = budgetObjectStore.getAll();

    // sends data in the db to the API
    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(serverResponse => {
                    if (serverResponse.message) {
                        throw new Error(serverResponse);
                    }

                    const transaction = db.transaction(['newBalance'], 'readwrite');
                    const budgetObjectStore = transaction.objectStore('newBalance');
                    budgetObjectStore.clear();
                    alert('All saved transactions have been submitted!');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
}

window.addEventListener('online', syncBudget);