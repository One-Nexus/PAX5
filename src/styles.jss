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
            return {
                'color': 'red',
                'padding': '1em',
                'background': 'rgba(0,0,0,0.2)',
                'position': 'relative',
                // 'flex' : column.modifier('span') ? false : '1',
                'margin-left': `${gutter}`,
                'width': columnWidth(columns, row, column, gutter, globals),
                'left': column.modifier('push') ? offsetWidth(columns, column, 'push') : false,
                'right': column.modifier('pull') ? offsetWidth(columns, column, 'pull') : false
            }
        }
    };
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

    for (let i = 0; i < columns; i++) {
        if (column.modifier(`span-${i}`)) {
            width = `${100 / columns * i}%`;
        }

        for (let [breakpoint, value] of Object.entries(globals.breakpoints)) {
            if (window.matchMedia(`(min-width: ${value})`).matches) {
                for (let [fraction, value] of Object.entries(globals.fractions)) {
                    if (column.modifier(`${breakpoint}-${fraction}`)) {
                        width = `${100 / value[1] * value[0]}%`;
                    }
                }
            }
        }
    }

    if (!row.modifier('no-gutter')) {
        width = `calc(${width} - ${gutter})`;
    }

    for (let [breakpoint, width] of Object.entries(globals.breakpoints)) {
        if (row.modifier(`stack-${breakpoint}`)) {
            if (window.matchMedia(`(min-width: ${width})`).matches) {
                width = '100%';
            }
        }
    }

    return width;
}