import * as admin from 'firebase-admin';
import * as serviceAccount from '../../serviceAccountKey.json'
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://travel-project-28b8f-default-rtdb.firebaseio.com"
});
const db = admin.firestore();

export default db;