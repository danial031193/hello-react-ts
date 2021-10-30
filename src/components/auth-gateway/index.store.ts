import { connect } from 'react-redux';
import AuthGateway from './index';
import { mapStateToProps } from './index.props';

export default connect(mapStateToProps)(AuthGateway);
