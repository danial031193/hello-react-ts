import { connect } from 'react-redux';
import User from './index';
import { mapStateToProps, mapDispatchToProps } from './index.props';

export default connect(mapStateToProps, mapDispatchToProps)(User);
