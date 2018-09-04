export default function shouldBeStacked(row, config) {
    for (let [breakpoint, width] of Object.entries(config.breakpoints)) {
        const customStack = row.PAX5.stack == breakpoint && window.matchMedia(`(max-width: ${width})`).matches;

        if (customStack || window.matchMedia(`(max-width: ${config.defaultStack})`).matches) {
            return true;
        }
    }

    return false;
}