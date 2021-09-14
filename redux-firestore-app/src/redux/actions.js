import * as types from "./actionTypes";
import db from "../firebase";

const getContacts = (contacts) => ({
    type: types.GET_CONTACTS,
    payload: contacts,
});

 const deleteContact = () => ({
     type: types.DELETE_CONTACT,
 });

 const addContact = () => ({
    type: types.ADD_CONTACT,
});

const getContact = (contact) => ({
     type: types.GET_CONTACT,
     payload: contact,
 });

 export const getContactsInitiate = () => {
     return function(dispatch){
         db.collection("contacts").onSnapshot ((QuerySnapshot) => {
             const contacts = [];
             QuerySnapshot.forEach((doc) => {
                 contacts.push({...doc.data(), id: doc.id})
             });
             dispatch(getContacts(contacts));
         });
     };
 };

 export const addContactInitiate = (contact) => {
     return function(dispatch) {
       db.collection("contacts").doc().set(contact);
       dispatch(addContact());
     };
 };

 export const deleteContactInitiate = (id) => {
    return function(dispatch) {
      db.collection("contacts").doc(id).delete();
      dispatch(deleteContact());
    };
};

export const getContactInitiate = (id) => {
    return function(dispatch) {
      db.collection("contacts")
        .doc(id)
        .get()
        .then((contact) =>{
            dispatch(getContact({...contact.data()}));
      })
      .catch((error) => console.log(error));
    };
};