import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

function PlayerInfoLine(props) {
    return (
        <div className={css(styles.line)}>
            <span className={css(styles.title)}>{props.title}</span>
            <span className={css(styles.value)}>{props.value}</span>
        </div>
    );
}

const styles = StyleSheet.create({
    line: {

    }
});

export default PlayerInfoLine;