import React, { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const defaultReactPortalProps = {
    wrapperId: "overlay"
};

const overlay = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '2',
    cursor: 'pointer'
}


const ReactPortal = ({ children, wrapperId, hideOverlay }) => {
    const [wrapper, setWrapper] = useState(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);

        let created = false;
        if (!element) {
            created = true;
            const wrapper = document.createElement('div');
            wrapper.setAttribute('id', wrapperId);
            document.body.appendChild(wrapper);
            element = wrapper;
        }

        setWrapper(element);


        return () => {
            if (created && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };



    }, [wrapperId]);

    if (wrapper == null) {
        return null;
    }

    return createPortal(<div style={overlay} onClick={hideOverlay}>{children}</div>, wrapper);

};

ReactPortal.defaultProps = defaultReactPortalProps;
export default ReactPortal;