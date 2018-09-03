import React from 'react';
import polymorph from '../../../Polymorph/src/polymorph';
import deepextend from 'deep-extend';

import styles from './styles.jss';

const defaults = {
    'columns': 12,
    'gutter': '3%',
    'default-stack': '720px',
    'breakpoints' : {
        'breakpoint-0': '0px',
        'breakpoint-1': '460px',
        'breakpoint-2': '720px',
        'breakpoint-3': '940px',
        'breakpoint-4': '1200px'
    }
}

const PAX5 = ({ name = 'PAX5', columns, config, ...props }) => {
    config = deepextend(defaults, config);

    return (
        <PAX5.row name={name} config={config} styles={[styles, config]} {...props}>
            {columns.map((column, index) => (
                <PAX5.column width={props['column-width']} name='column' config={config} key={index}>
                    {column}
                </PAX5.column>
            ))}
        </PAX5.row>
    );
}

PAX5.row = ({ name ='PAX5', config, tag = 'div', ...props }) => {
    config = deepextend(defaults, config);

    const Tag = tag;
    const modifierGlue = '-';

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
};

PAX5.column = ({ name = 'column', width, config, tag = 'div', ...props }) => {
    config = deepextend(defaults, config);

    const modifierGlue = '-';
    const Tag = tag;

    let modifiers = [], responsiveInterface = '';

    if (width) {
        if (typeof width === 'string') {
            modifiers.push(`span-${width}`);
        } 
        if (typeof width === 'object') {
            Object.keys(width).forEach(i => {
                const rule = `${i}-${width[i].join('-')}`;
    
                responsiveInterface += responsiveInterface ? `-${rule}` : rule;
            });

            modifiers.push(responsiveInterface);
        }
    }

    if (props.push) {
        modifiers.push(`push-${props.push}`);
    }

    if (props.pull) {
        modifiers.push(`pull-${props.pull}`);
    }

    Object.keys(config.breakpoints).forEach(breakpoint => {
        if (props[breakpoint]) {
            modifiers.push(`${breakpoint}-${props[breakpoint].join('-')}`);
        }
    });

    const namespace = 'PAX5_' + name + (modifiers.length ? (modifierGlue + modifiers.join('-')) : '');

    return (
        <Tag className={namespace} data-component={name}>
            {props.children}
        </Tag>
    )
};

export default PAX5;