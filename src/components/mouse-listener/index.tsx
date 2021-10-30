import React, { FC, ReactNode, useEffect, useState } from 'react';

interface ICoords {
  x: number;
  y: number;
}

interface IMouseListener {
  children: (coords: ICoords) => ReactNode;
}

const MouseListener: FC<IMouseListener> = ({ children }) => {
  const [coordinates, setCoordinates] = useState<ICoords>({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    setCoordinates({ x: e.x, y: e.y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return <div>{children(coordinates)}</div>;
};

export default MouseListener;
