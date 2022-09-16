import app from './app.js'
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription){//usarei a subscribe no botão e para salvar no banco de dados somente 4 linhas de códigos
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, 'hellfire-clube');
    const docRef = await addDoc(hellfireClubCollection, subscription);
    return docRef.id;

}

//para buscar a lista no banco de dados e mostrar no console

export async function getHellfireClubSubscriptions(){ 
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, 'hellfire-clube');
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
    const subscriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}


