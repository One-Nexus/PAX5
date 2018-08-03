import { Synergy } from '../../../Synergy/src/index';

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
        'flex-direction': Synergy(row).modifier('row-reverse') ? 'row-reverse' : false,
        'margin-left': `-${gutter}`,

        column: column => {
            column.shouldBeStacked = shouldBeStacked(row, config);

            return {
                'flex' : !Synergy(column).modifier('span') && !Synergy(column).modifier('breakpoint') && !Synergy(column).shouldBeStacked ? 1 : 'none',
                'color': 'red',
                'padding': '1em',
                'background': 'rgba(0,0,0,0.2)',
                'position': 'relative',
                'margin-left': `${gutter}`,
                'width': columnWidth(columns, row, column, gutter, config),
                'left' : Synergy(column).modifier('push') && !column.shouldBeStacked ? offsetWidth(columns, column, 'push') : 'initial',
                'right': Synergy(column).modifier('pull') && !column.shouldBeStacked ? offsetWidth(columns, column, 'pull') : 'initial'
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
                if (Synergy(column).modifier(`breakpoint-${rule[0]}`)) {
                    return width = `${100 / rule[2] * rule[1]}%`;
                }
            }
        });
    } else {
        for (let i = 0; i < columns; i++) {
            if (Synergy(column).modifier(`span-${i}`)) {
                width = `${100 / columns * i}%`;
            }
        }
    }

    if (!Synergy(row).modifier('no-gutter')) {
        width = `calc(${width} - ${gutter})`;
    }

    if (column.shouldBeStacked && !Synergy(column).modifier('breakpoint')) {
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
        if (Synergy(column).modifier(`${operator}-${i}`)) {
            return `${100 / columns * i}%`;
        }
    }
}

/**
 * Determine whether a columns within a row should be stacked
 * @param row 
 * @param config 
 */
function shouldBeStacked(row, config) {
    for (let [breakpoint, width] of Object.entries(config.breakpoints)) {
        const customStack = Synergy(row).modifier(`stack-${breakpoint}`) && window.matchMedia(`(max-width: ${width})`).matches;

        if (customStack || window.matchMedia(`(max-width: ${config['default-stack']})`).matches) {
            return true;
        }
    }

    return false;
}