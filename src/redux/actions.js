import * as types from "./actionTypes";
import db from "../firebase"; 


const getContacts = (contacts) => ({
    type: types.GET_CONTACTS,
    payload: contacts,

});

const addContacts = () => ({
    type: types.ADD_CONTACT,
});

export const getContactsInitiate = () => {
    return function(dispatch){
        db.collection("contacts").onSnapshot((querySnapshot) => {
            const contacts = [];
            querySnapshot.forEach((doc) => {
                contacts.push({...doc.data(), id: doc.id})
            })
            dispatch(getContacts(contacts));
        });
    };
};

export const addContactInitiate = (contact) => {
    return function (dispatch){
        db.collection("contacts").doc().set(contact);
        dispatch(addContacts());
    };
};