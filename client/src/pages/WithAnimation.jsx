import React from 'react';
import { useInView } from 'react-intersection-observer';

const withAnimation = (WrappedComponent, animationClass) => {
    return (props) => {
        const { ref, inView } = useInView({
            triggerOnce: true, // trigger only once when in view
            threshold: 0.1, // element needs to be at least 10% in view
        });

        return (
            <div ref={ref} className={inView ? animationClass : ''}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withAnimation;
