import { connect } from 'react-redux';
import CreateUserForm from './index';
import { mapStateToProps, mapDispatchToProps } from './index.props';

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm);
