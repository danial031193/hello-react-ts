import { connect } from 'react-redux';
import UserItem from './index';
import { mapStateToProps } from './index.props';

export default connect(mapStateToProps)(UserItem);
