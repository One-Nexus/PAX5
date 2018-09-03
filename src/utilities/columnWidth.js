import hasModifier from './hasModifier';

export default function columnWidth(columns, row, column, gutter, config) {
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