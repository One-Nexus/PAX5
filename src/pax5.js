import React from 'react';
import deepextend from 'deep-extend';

import Column from './api/column';
import Row from './api/row';
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

PAX5.row = Row;
PAX5.column = Column;

export default PAX5;