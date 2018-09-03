import PropTypes from 'prop-types';
import deepextend from 'deep-extend';
import defaults from '../config';

export default function column({ block = 'PAX5', name = 'column', Tag = 'div', width, custom, ...props }, context) {
    const config = deepextend(defaults, custom);
    const modifierGlue = config.modifierGlue || (window.Synergy && Synergy.modifierGlue) || '-';
    const componentGlue = config.componentGlue || (window.Synergy && Synergy.componentGlue) || '_';

    let modifiers = [];
    let responsiveInterface = '';

    console.log(context);

    if (width) {
        if (typeof width === 'string') {
            modifiers.push(`span-${width}`);
        } 
        if (typeof width === 'object') {
            Object.keys(width).forEach(i => {
                const rule = `${i}-${width[i].join(modifierGlue)}`;
    
                responsiveInterface += responsiveInterface ? `${modifierGlue + rule}` : rule;
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
            modifiers.push(`${breakpoint}-${props[breakpoint].join(modifierGlue)}`);
        }
    });

    const namespace = block + componentGlue + name + (modifiers.length ? (modifierGlue + modifiers.join(modifierGlue)) : '');

    return (
        <Tag className={namespace} data-component={name}>
            {props.children}
        </Tag>
    );
}

column.contextTypes = {
    block: PropTypes.string
};