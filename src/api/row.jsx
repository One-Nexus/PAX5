import PropTypes from 'prop-types';
import React from 'react';
import deepextend from 'deep-extend';
import polymorph from '../../../../Polymorph/src/polymorph';
import defaults from '../config';
import styles from '../styles.jss';

export default function row({ name ='PAX5', Tag = 'div', custom, ...props }) {
    const config = deepextend(defaults, custom);
    const modifierGlue = config.modifierGlue || (window.Synergy && Synergy.modifierGlue) || '-';

    const ref = node => {
        if (node) {
            let timer;
    
            window.addEventListener('resize', () => {
                clearTimeout(timer);
            
                timer = setTimeout(node.repaint, 100);
            }, false);
    
            polymorph(node, styles, config);
        }
    }

    let modifiers = [];

    if (props.stack) {
        modifiers.push(`stack-${props.stack}`);
    }

    const namespace = name + (modifiers.length ? (modifierGlue + modifiers.join('-')) : '');

    return (
        <Tag className={namespace} data-module={name} ref={ref}>
            {props.children}
        </Tag>
    );
}

// export default class row extends React.Component {
//     constructor(props, context) {
//         super(props, context);

//         console.log(props);

//         const config = deepextend(defaults, props.custom);
//         const modifierGlue = config.modifierGlue || (window.Synergy && Synergy.modifierGlue) || '-';

//         let modifiers = [];

//         if (props.stack) {
//             modifiers.push(`stack-${props.stack}`);
//         }

//         this.name = props.name;
//         this.tag = props.tag;

//         this.ref = node => {
//             if (node) {
//                 let timer;
        
//                 window.addEventListener('resize', () => {
//                     clearTimeout(timer);
                
//                     timer = setTimeout(node.repaint, 100);
//                 }, false);
        
//                 polymorph(node, styles, config);
//             }
//         }

//         this.namespace = this.name + (modifiers.length ? (modifierGlue + modifiers.join('-')) : '');
//     }

//     render() {
//         return (
//             <this.tag className={this.namespace} data-module={this.name} ref={this.ref}>
//                 {this.props.children}
//             </this.tag>
//         );
//     }
// }

row.childContextTypes = {
    block: PropTypes.string
};