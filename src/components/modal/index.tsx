import React, { CSSProperties, PureComponent } from 'react';
import Dialog from './dialog';
import styles from './styles.module.scss';

export type IModalAnimationType =
  | 'zoom'
  | 'fade'
  | 'flip'
  | 'door'
  | 'rotate'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight';

export interface IModalProps {
  animation: IModalAnimationType;
  enterAnimation?: IModalAnimationType;
  leaveAnimation?: IModalAnimationType;
  visible: boolean;
  closeOnEsc?: boolean;
  toggle: () => void;
  onAnimationEnd?: () => void;
  duration?: number;
  closeMaskOnClick?: boolean;
  customMaskStyles?: CSSProperties;
  customStyles?: CSSProperties;
  showMask?: boolean;
  className?: string;
  width?: number;
  height?: number;
  measure?: 'px' | '%' | 'vh' | 'vw';
}

export interface IModalState {
  isShow: boolean;
  animationType: 'enter' | 'leave';
}

class Modal extends PureComponent<IModalProps, IModalState> {
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

  el: HTMLDivElement | null = null;

  state: IModalState = {
    isShow: false,
    animationType: 'leave',
  };

  componentDidMount() {
    if (this.props.visible) {
      this.enter();
    }
  }

  componentDidUpdate(prevProps: Readonly<IModalProps>) {
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
  onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { closeOnEsc, toggle } = this.props;

    if (!closeOnEsc || event.keyCode !== 27) {
      return;
    }

    toggle();
  };

  /**
   * Animation end event
   */
  animationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
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

export default Modal;
