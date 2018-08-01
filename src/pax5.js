import { Module, Component } from '../../../Synergy/src/index';
import styles from './styles.jss';

const defaults = {
    'options' : {
        'columns': 12,
        'gutter': '3%',
        'col-break': '940px',
    },
    'settings' : {
        'responsive': true,
        'custom-stacking': true,
        'adaptive-columns': true,
        'flow-columns': true,
        'magic-columns': true,
        'block-columns': true,
        'no-gutter-columns': true,
        'reverse-columns': true,
        'pull-columns': true,
        'push-columns': true
    },
    'breakpoints' : {
        'breakpoint-0': '0px',
        'breakpoint-1': '460px',
        'breakpoint-2': '720px',
        'breakpoint-3': '940px',
        'breakpoint-4': '1200px'
    },
    'fractions' : {
        'full': [1, 1],
        'half': [1, 2],
        'third': [1, 3],
        'quarter': [1, 4],
        'sixth': [1, 6]
    }
}

const PAX5 = ({ name = 'PAX5', columns, config, ...props }) => {
    config = Module.config(defaults, config);

    return (
        <PAX5.row name={name} config={config} styles={node => Module.setStyles(node, styles, config)} {...props}>
            {columns.map((column, index) => (
                <PAX5.column name='column' key={index}>{column}</PAX5.column>
            ))}
        </PAX5.row>
    );
}

PAX5.row = ({ name ='PAX5', config, ...props }) => {
    config = Module.config(defaults, config);

    const columnTypes = [
        'block',
        'default',
        'flow',
        'magic',
        'no-gutter'
    ];

    return (
        <Module name={name} styles={node => Module.setStyles(node, styles, config)} {...props}>
            {props.children}
        </Module>
    );
};

PAX5.column = ({ name = 'column', width, ...props }) => {

    const span = width ? `span-${width}` : false;
    const push = props.push ? `push-${props.push}` : false;
    const pull = props.pull ? `pull-${props.pull}` : false;

    return (
        <Component modifiers={[span, push, pull]} name={name} {...props}>
            {props.children}
        </Component>
    )
};

export default PAX5;