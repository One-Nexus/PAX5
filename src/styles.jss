import hasModifier from './utilities/hasModifier';
import columnWidth from './utilities/columnWidth';
import offsetWidth from './utilities/offsetWidth';
import shouldBeStacked from './utilities/shouldBeStacked';

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