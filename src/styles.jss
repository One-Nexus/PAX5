/**
 * 
 */
export default (row, globals) => {
    const columns = globals.options.columns;
    const gutter = globals.options.gutter;

    return {
        'display': 'flex',
        'margin-bottom': '1em',
        'flex-flow': 'wrap',
        'flex-direction': row.modifier('row-reverse') ? 'row-reverse' : false,
        'margin-left': `-${gutter}`,

        column: column => {
            column.shouldBeStacked = shouldBeStacked(row, globals);

            return {
                'flex' : !column.modifier('span') && !column.modifier('breakpoint') && !column.shouldBeStacked ? 1 : 'none',
                'color': 'red',
                'padding': '1em',
                'background': 'rgba(0,0,0,0.2)',
                'position': 'relative',
                'margin-left': `${gutter}`,
                'width': columnWidth(columns, row, column, gutter, globals),
                'left' : column.modifier('push') && !column.shouldBeStacked ? offsetWidth(columns, column, 'push') : 'initial',
                'right': column.modifier('pull') && !column.shouldBeStacked ? offsetWidth(columns, column, 'pull') : 'initial'
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
 * @param globals 
 */
function columnWidth(columns, row, column, gutter, globals) {
    let width = '100%';

    const targetClass = [...column.classList].filter(c => c.indexOf(row.getAttribute('data-module')) === 0).join();
    const responsiveInterface = targetClass.split('breakpoint').slice(1).map(breakpoint => breakpoint.split('-').filter(n => !!n));

    if (responsiveInterface.length) {
        responsiveInterface.forEach(rule => {
            if (window.matchMedia(`(min-width: ${globals.breakpoints[`breakpoint-${rule[0]}`]})`).matches) {
                if (column.modifier(`breakpoint-${rule[0]}`)) {
                    return width = `${100 / rule[2] * rule[1]}%`;
                }
            }
        });
    } else {
        for (let i = 0; i < columns; i++) {
            if (column.modifier(`span-${i}`)) {
                width = `${100 / columns * i}%`;
            }
        }
    }

    if (!row.modifier('no-gutter')) {
        width = `calc(${width} - ${gutter})`;
    }

    if (column.shouldBeStacked && !column.modifier('breakpoint')) {
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
        if (column.modifier(`${operator}-${i}`)) {
            return `${100 / columns * i}%`;
        }
    }
}

/**
 * Determine whether a columns within a row should be stacked
 * @param row 
 * @param globals 
 */
function shouldBeStacked(row, globals) {
    for (let [breakpoint, width] of Object.entries(globals.breakpoints)) {
        const customStack = row.modifier(`stack-${breakpoint}`) && window.matchMedia(`(max-width: ${width})`).matches;

        if (customStack || window.matchMedia(`(max-width: ${globals['default-stack']})`).matches) {
            return true;
        }
    }

    return false;
}