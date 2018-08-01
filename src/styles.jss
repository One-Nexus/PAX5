
export default (row, globals) => {
    return {
        'display': 'flex',
        'flex-flow': 'wrap',
        'flex-direction': row.modifier('row-reverse') ? 'row-reverse' : false,
        'margin-left': `-${globals.options.gutter}`,

        column: column => {
            const columns = globals.options.columns;
            const gutter = globals.options.gutter;

            const columnWidth = (columns, column, gutter, operator) => {
                let width;

                for (let i = 0; i < columns; i++) {
                    if (column.modifier(`${operator}-${i}`)) {
                        width = `${100 / columns * i}%`;

                        if (!row.modifier('no-gutter') && operator !== 'push' && operator !== 'pull') {
                            width = `calc(${width} - ${gutter})`;
                        }
                    }
                }

                return width;
            }

            return {
                'color': 'red',
                'position': 'relative',
                'flex' : column.modifier('span') ? false : '1',
                'margin-left': `${gutter}`,
                'width': columnWidth(columns, column, gutter, 'span'),
                'left': columnWidth(columns, column, gutter, 'push'),
                'right': columnWidth(columns, column, gutter, 'pull')
            }
        }
    };
}