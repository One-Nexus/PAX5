/**
 * 
 */
export default (row, globals) => {
    const columns = globals.options.columns;
    const gutter = globals.options.gutter;

    return {
        'display': 'flex',
        'flex-flow': 'wrap',
        'flex-direction': row.modifier('row-reverse') ? 'row-reverse' : false,
        'margin-left': `-${gutter}`,

        column: column => {
            return {
                'color': 'red',
                'position': 'relative',
                'flex' : column.modifier('span') ? false : '1',
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
            let responsiveWidth;

            for (let [breakpoint, width] of Object.entries(globals.breakpoints)) {
                if (window.matchMedia(`(min-width: ${width})`).matches) {
                    for (let [fraction, value] of Object.entries(globals.fractions)) {
                        if (column.modifier(`${breakpoint}-${fraction}`)) {
                            responsiveWidth = `${100 / value[1] * value[0]}%`;
                        }
                    }
                }
            }

            width = responsiveWidth || `${100 / columns * i}%`;

            if (!row.modifier('no-gutter')) {
                width = `calc(${width} - ${gutter})`;
            }
        }
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