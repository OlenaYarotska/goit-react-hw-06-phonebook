import propTypes from 'prop-types';
import { FormWrapper, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts} from 'redux/reducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(state => state.contacts.filter);
  const onChangeInput = evt => dispatch(filterContacts(evt.target.value));
  return (
    <FormWrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filterSelector}
          onChange={onChangeInput}
        />
      </Label>
    </FormWrapper>
  );
};
export default Filter;

Filter.propTypes = {
  filter: propTypes.string,
  filterContacts: propTypes.func,
};
