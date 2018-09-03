import hasModifier from './hasModifier';

export default function shouldBeStacked(row, config) {
    for (let [breakpoint, width] of Object.entries(config.breakpoints)) {
        const customStack = hasModifier(row, `stack-${breakpoint}`, '-') && window.matchMedia(`(max-width: ${width})`).matches;

        if (customStack || window.matchMedia(`(max-width: ${config['default-stack']})`).matches) {
            return true;
        }
    }

    return false;
}