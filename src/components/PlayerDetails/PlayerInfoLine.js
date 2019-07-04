import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import theme from '../ThemeProvider/theme';

function PlayerInfoLine(props) {
    return (
        <div className={css(styles.line)}>
            <span className={css(styles.title)}>{props.title}:</span>
            <span className={css(styles.value)}>{props.value}</span>
        </div>
    );
}

const styles = StyleSheet.create({
    line: {
        display: 'table-row',
    },
    title: {
        color: theme.secondary.color,
        fontWeight: 500,
        display: 'table-cell',
        paddingTop: 4
    },
    value: {
        color: theme.secondary.color,
        paddingLeft: 8,
        display: 'table-cell'
    }
});

export default PlayerInfoLine;