import hasModifier from './utilities/hasModifier';

/**
 * 
 */
export default (row, config) => {
    const columns = config.columns;
    const gutter = config.gutter;

    return {
        'display': 'flex',
        'margin-bottom': '1em',
        'flex-flow': 'wrap',
        'flex-direction': hasModifier(row, 'row-reverse', '-') ? 'row-reverse' : false,
        'margin-left': `-${gutter}`,

        column: column => {
            column.shouldBeStacked = shouldBeStacked(row, config);

            return {
                'flex' : !hasModifier(column, 'span', '-') && !hasModifier(column, 'breakpoint', '-') && !column.shouldBeStacked ? 1 : 'none',
                'color': 'red',
                'padding': '1em',
                'background': 'rgba(0,0,0,0.2)',
                'position': 'relative',
                'margin-left': `${gutter}`,
                'width': columnWidth(columns, row, column, gutter, config),
                'left' : hasModifier(column, 'push', '-') && !column.shouldBeStacked ? offsetWidth(columns, column, 'push') : 'initial',
                'right': hasModifier(column, 'pull', '-') && !column.shouldBeStacked ? offsetWidth(columns, column, 'pull') : 'initial'
            }
        }
    };
}

/**
 * Deterine what the width of a column should be
 * 
 * @param columns 
 * @param row 
 * @param column 
 * @param gutter 
 * @param config 
 */
function columnWidth(columns, row, column, gutter, config) {
    let width = '100%';

    const targetClass = [...column.classList].filter(c => c.indexOf(row.getAttribute('data-module')) === 0).join();
    const responsiveInterface = targetClass.split('breakpoint').slice(1).map(breakpoint => breakpoint.split('-').filter(n => !!n));

    if (responsiveInterface.length) {
        responsiveInterface.forEach(rule => {
            if (window.matchMedia(`(min-width: ${config.breakpoints[`breakpoint-${rule[0]}`]})`).matches) {
                if (hasModifier(column, `breakpoint-${rule[0]}`, '-')) {
                    return width = `${100 / rule[2] * rule[1]}%`;
                }
            }
        });
    } else {
        for (let i = 0; i < columns; i++) {
            if (hasModifier(column, `span-${i}`, '-')) {
                width = `${100 / columns * i}%`;
            }
        }
    }

    if (!hasModifier(row, 'no-gutter', '-')) {
        width = `calc(${width} - ${gutter})`;
    }

    if (column.shouldBeStacked && !hasModifier(column, 'breakpoint', '-')) {
        width = `calc(100% - ${gutter})`;
    }

    return width;
}

/**
 * Determine what the offset width of a column should be
 * 
 * @param columns 
 * @param column 
 * @param operator 
 */
function offsetWidth(columns, column, operator) {
    for (let i = 0; i < columns; i++) {
        if (hasModifier(column, `${operator}-${i}`, '-')) {
            return `${100 / columns * i}%`;
        }
    }
}

/**
 * Determine whether columns within a row should be stacked
 * 
 * @param row 
 * @param config 
 */
function shouldBeStacked(row, config) {
    for (let [breakpoint, width] of Object.entries(config.breakpoints)) {
        const customStack = hasModifier(row, `stack-${breakpoint}`, '-') && window.matchMedia(`(max-width: ${width})`).matches;

        if (customStack || window.matchMedia(`(max-width: ${config['default-stack']})`).matches) {
            return true;
        }
    }

    return false;
}