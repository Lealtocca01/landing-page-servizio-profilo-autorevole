import React from 'react';

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
}: {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
}) => {
  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
    >
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
