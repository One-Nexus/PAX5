export default function offsetWidth(columns, column, operator) {
    for (let i = 0; i < columns; i++) {
        if (column.PAX5[operator] == i) {
            return `${100 / columns * i}%`;
        }
    }
}