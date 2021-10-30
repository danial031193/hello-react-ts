import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import Dialog from './dialog';
import styles from './styles.module.scss';

class Modal extends PureComponent {
  static defaultProps = {
    width: 400,
    height: 240,
    measure: 'px',
    visible: false,
    showMask: true,
    closeOnEsc: true,
    closeMaskOnClick: true,
    animation: 'fade',
    enterAnimation: '',
    leaveAnimation: '',
    duration: 300,
    className: '',
    customStyles: {},
    customMaskStyles: {},
  };

  el;

  state = {
    isShow: false,
    animationType: 'leave',
  };

  componentDidMount() {
    if (this.props.visible) {
      this.enter();
    }
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (visible && !prevProps.visible) {
      this.enter();
    }

    if (!visible && prevProps.visible) {
      this.leave();
    }
  }

  /**
   * Show modal
   */
  enter = () => {
    document.body.style.overflow = 'hidden';
    this.setState({ isShow: true, animationType: 'enter' });
  };

  /**
   * Close modal
   */
  leave = () => {
    document.body.style.overflow = 'auto';
    this.setState({ animationType: 'leave' });
  };

  /**
   * Close modal on press 'esc' button
   */
  onKeyUp = (event) => {
    const { closeOnEsc, toggle } = this.props;

    if (!closeOnEsc || event.keyCode !== 27) {
      return;
    }

    toggle();
  };

  /**
   * Animation end event
   */
  animationEnd = (event) => {
    const { animationType } = this.state;
    const { closeOnEsc, onAnimationEnd } = this.props;

    if (animationType === 'leave') {
      this.setState({ isShow: false });
    } else if (closeOnEsc) {
      this.el?.focus();
    }

    if (event.target === this.el && onAnimationEnd) {
      onAnimationEnd();
    }
  };

  /**
   * Get modal state
   */
  getStyle = () => {
    const { duration } = this.props;
    const { isShow } = this.state;

    return {
      display: isShow ? '' : 'none',
      animationDuration: duration + 'ms',
    };
  };

  render() {
    const { closeMaskOnClick, toggle, customMaskStyles, showMask, className, children } =
      this.props;
    const { animationType } = this.state;

    return (
      <div
        style={this.getStyle()}
        className={[styles.modal, `modal-fade-${animationType}`, className].join(' ')}
        onAnimationEnd={this.animationEnd}
        tabIndex={-1}
        ref={(el) => {
          this.el = el;
        }}
        onKeyUp={this.onKeyUp}
      >
        {showMask && (
          <div
            className={styles.mask}
            style={customMaskStyles}
            onClick={() => (closeMaskOnClick ? toggle() : null)}
          />
        )}
        <Dialog {...this.props} animationType={animationType}>
          {children}
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  animation: PropTypes.oneOf([
    'zoom',
    'fade',
    'flip',
    'door',
    'rotate',
    'slideUp',
    'slideDown',
    'slideLeft',
    'slideRight',
  ]),
  enterAnimation: PropTypes.oneOf([
    'zoom',
    'fade',
    'flip',
    'door',
    'rotate',
    'slideUp',
    'slideDown',
    'slideLeft',
    'slideRight',
  ]),
  leaveAnimation: PropTypes.oneOf([
    'zoom',
    'fade',
    'flip',
    'door',
    'rotate',
    'slideUp',
    'slideDown',
    'slideLeft',
    'slideRight',
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.oneOf(['px', '%', 'vh', 'vw']),
  customStyles: PropTypes.object,
  visible: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  closeMaskOnClick: PropTypes.bool,
  toggle: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  customMaskStyles: PropTypes.object,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default Modal;
