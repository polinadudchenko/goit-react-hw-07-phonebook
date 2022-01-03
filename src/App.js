import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from './components/Section'
import {contactsOperations, contactsSelectors} from 'redux/contacts'


function App({ contacts, fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts])

  return (
      <div className={s.App}>
        <h1 className={s.App_title}>Phonebook</h1>
        <div className={s.App_content}>
        <Section title="Create a new Contact">
        <ContactForm/>
        </Section>
       
        <Section title="Your contacts">
          {contacts.length === 0 ?
            <p>You don't have any contacts yet, please add one to the form on the left</p>
            :
            <>
            <Filter/>
            <ContactList /> 
            </>
          }
        </Section>
        <ToastContainer autoClose={3000}/>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

