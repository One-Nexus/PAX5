import deepextend from 'deep-extend';
import PropTypes from 'prop-types';
import React from 'react';
import defaults from '../config';

export default function column(props, context) {
    const config = deepextend(defaults, props.custom);
    const componentGlue = config.componentGlue || (window.Synergy && Synergy.componentGlue) || '_';
    const block = props.block || context.block || 'PAX5';

    const ref = node => {
        if (node) {
            node.PAX5 = { ...props };
        }
    }

    return (
        <props.tag className={block + componentGlue + props.name} ref={ref}>
            {props.children}
        </props.tag>
    );
}

column.defaultProps = {
    name: 'column',
    tag: 'div'
}

column.contextTypes = {
    block: PropTypes.string
};