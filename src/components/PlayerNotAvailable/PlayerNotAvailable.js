import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import theme from '../ThemeProvider/theme';

function PlayerNotAvailable() {
    return (
        <p className={css(styles.text)} data-testid="not-available-text">Player is not available :(</p>
    );
}

const styles = StyleSheet.create({
    text: {
        color: theme.secondary.color,
    }
});

export default PlayerNotAvailable;