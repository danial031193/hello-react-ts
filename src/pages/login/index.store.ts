import { connect } from 'react-redux';
import Login from './index';
import { mapStateToProps, mapDispatchToProps } from './index.props';

export default connect(mapStateToProps, mapDispatchToProps)(Login);
