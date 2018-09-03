import hasModifier from './hasModifier';

export default function offsetWidth(columns, column, operator) {
    for (let i = 0; i < columns; i++) {
        if (hasModifier(column, `${operator}-${i}`, '-')) {
            return `${100 / columns * i}%`;
        }
    }
}