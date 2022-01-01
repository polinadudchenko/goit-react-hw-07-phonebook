import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterContacts } from '../../redux/contacts/actions'
import s from './Filter.module.css'

function Filter({ filter, onHandleFilter }) {
    
    return <label className={s.filter_form__label}> Find a contact
                <input
                    type="text"                
                    className={s.filter_form__input}
                    name="filter"
                    value={filter}
                    onChange={onHandleFilter}
                />
            </label>
}

Filter.propTypes = {
       onHandleFilter: PropTypes.func.isRequired,
}
    
const mapStateToProps = state => ({
    filter: state.filter
})

const mapDispatchtoProps = dispatch => ({
    onHandleFilter: e => dispatch(filterContacts(e.currentTarget.value))
})

export default connect(mapStateToProps, mapDispatchtoProps)(Filter)