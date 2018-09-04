import PropTypes from 'prop-types';
import React from 'react';

export default function column(props, context) {
    const config = Object.assign(context.config, props.custom);
    const block = props.block || context.block || 'PAX5';

    const ref = node => {
        if (node) {
            node.PAX5 = { ...props };
        }
    }

    return (
        <props.tag className={block + config.componentGlue + props.name} ref={ref}>
            {props.children}
        </props.tag>
    );
}

column.defaultProps = {
    name: 'column',
    tag: 'div'
}

column.contextTypes = {
    block: PropTypes.string,
    config: PropTypes.object
};