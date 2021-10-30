import { connect } from 'react-redux';
import Users from './index';
import { mapStateToProps, mapDispatchToProps } from './index.props';

export default connect(mapStateToProps, mapDispatchToProps)(Users);
