import React from 'react';
import deepextend from 'deep-extend';
import column from './api/column.jsx';
import row from './api/row.jsx';
import styles from './styles.jss';
import defaults from './config';

const PAX5 = ({ name = 'PAX5', columns, config, ...props }) => {
    config = deepextend(defaults, config);

    return (
        <PAX5.row name={name} config={config} styles={[styles, config]} {...props}>
            {columns.map((column, index) => (
                <PAX5.column width={props['column-width']} name='column' config={config} key={index}>
                    {column}
                </PAX5.column>
            ))}
        </PAX5.row>
    );
}

Object.assign(PAX5, { row, column })

export default PAX5;