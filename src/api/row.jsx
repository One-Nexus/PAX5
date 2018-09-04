import deepextend from 'deep-extend';
import polymorph from '../../../../Polymorph/src/polymorph';
import PropTypes from 'prop-types';
import React from 'react';
import defaults from '../config';
import styles from '../styles.jss';

export default class row extends React.Component {
    constructor(props, context) {
        super(props, context);

        const config = deepextend(defaults, props.custom);

        this.ref = node => {
            if (node) {
                let timer;
        
                window.addEventListener('resize', () => {
                    clearTimeout(timer);
                
                    timer = setTimeout(node.repaint, 100);
                }, false);

                node.PAX5 = { ...props };
        
                polymorph(node, styles, config);
            }
        }
    }

    getChildContext() {
        return { 
            block: this.props.name
        };
    }

    render() {
        return (
            <this.props.tag className={this.props.name} ref={this.ref}>
                {this.props.children}
            </this.props.tag>
        );
    }
}

row.defaultProps = {
    name: 'PAX5',
    tag: 'div'
}

row.childContextTypes = {
    block: PropTypes.string
};