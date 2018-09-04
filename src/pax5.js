import React from 'react';
import row from './api/row.jsx';
import column from './api/column.jsx';

const PAX5 = ({ name = 'PAX5', columns, ...props }) => {
    return (
        <PAX5.row name={name} {...props}>
            {columns.map((column, index) => (
                <PAX5.column width={props['column-width']} name='column' key={index}>
                    {column}
                </PAX5.column>
            ))}
        </PAX5.row>
    );
}

Object.assign(PAX5, { row, column })

export default PAX5;