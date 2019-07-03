import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

function PlayerNotAvailable() {
    return (
        <p className={css(styles.line)}>Player is not available</p>
    );
}

const styles = StyleSheet.create({
    text: {

    }
});

export default PlayerNotAvailable;