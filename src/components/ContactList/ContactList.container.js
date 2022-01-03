
import { connect } from 'react-redux';
import ContactList  from './ContactList';
import { contactsOperations, contactsSelectors } from 'redux/contacts'



const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoading: contactsSelectors.getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);