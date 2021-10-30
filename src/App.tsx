import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Modal, Navbar } from '@components/index';
import { ThemeProvider } from '@context/ThemeContext';
import { toggleLayoutModal } from '@store/layout/action-creators';
import SiteRoutes from './router';
import IState from '@interfaces/redux/IState';
import styles from './styles.module.scss';

const App = () => {
  const accountId = useSelector((state: IState) => state.account.id);
  const isModalOpen = useSelector((state: IState) => state.layout.isOpen);

  const dispatch = useDispatch();

  const toggleModal = () => dispatch(toggleLayoutModal());

  return (
    <ThemeProvider>
      <div className={styles.app}>
        {accountId && <Navbar />}

        <Modal
          visible={isModalOpen}
          width={300}
          heigh={300}
          toggle={toggleModal}
          enterAnimation="slideUp"
          leaveAnimation="slideDown"
        >
          <p className={styles.modal}>Modal</p>
          <button onClick={toggleModal}>Close</button>
        </Modal>

        <div className={styles.body}>
          <button onClick={toggleModal}>Toggle modal</button>

          <Switch>
            {SiteRoutes.getList().map((item) => (
              <Route
                key={`${item.path}`}
                exact={item?.exact ?? true}
                path={item.path}
                component={item.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
