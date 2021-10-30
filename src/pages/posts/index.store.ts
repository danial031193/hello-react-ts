import { connect } from 'react-redux';
import Posts from './index';
import { mapStateToProps, mapDispatchToProps } from './index.props';

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
