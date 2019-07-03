import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import theme from './theme';

function ThemeProvider(props) {
    return (
        <div className={css(styles.common)}>
            {props.children}
        </div>
    );
}

const styles = StyleSheet.create({
    common: {
        ...theme.common
    }
});

export default ThemeProvider;