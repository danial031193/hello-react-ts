import IState from '@interfaces/redux/IState';
import { IUserItem } from '@pages/user/item/index';

const mapStateToProps = (state: IState, ownProps: IUserItem) => ({
  username: state.users.list.find((user) => user.id === ownProps.id)?.username,
});

export { mapStateToProps };
