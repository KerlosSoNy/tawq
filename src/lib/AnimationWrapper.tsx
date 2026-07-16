import React from 'react';

const AnimationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div suppressHydrationWarning className={"animation-wrapper"}>
            {children}
        </div>
    );
};

export default AnimationWrapper;