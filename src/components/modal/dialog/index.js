import React, { useMemo } from 'react';
import styles from './styles.module.scss';

const Dialog = ({
  width,
  height,
  measure,
  duration,
  customStyles,
  animation,
  animationType,
  enterAnimation,
  leaveAnimation,
  children,
}) => {
  /**
   * Set animation type
   */
  const resAnimation = useMemo(() => {
    return (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation;
  }, [animation, animationType, enterAnimation, leaveAnimation]);

  /**
   * Set container main styles
   */
  const style = useMemo(() => {
    return {
      width: width + measure,
      height: height + measure,
      animationDuration: duration + 'ms',
    };
  }, [duration, height, measure, width]);

  /**
   * Set container styles
   */
  const mergedStyles = useMemo(() => {
    return { ...style, ...customStyles };
  }, [customStyles, style]);

  return (
    <div
      style={mergedStyles}
      className={[styles.dialog, `modal-${resAnimation}-${animationType}`].join(' ')}
    >
      {children}
    </div>
  );
};

export default Dialog;
