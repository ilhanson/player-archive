import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import theme from '../ThemeProvider/theme';

function ContentCard(props) {
    return (
        <div className={css(styles.card)}>
            {props.children}
        </div>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 'auto',
        borderRadius: 8,
        boxShadow: '0 16px 40px -8px rgba(20,30,40,.16)',
        backgroundColor: theme.common.backgroundColor,
        padding: '12px 24px 24px',
        marginRight: 'auto',
        marginLeft: 'auto',
        minHeight: 420,
        '@media only screen and (min-height: 480px)': {
            marginTop: 24
        },
        '@media only screen and (min-height: 800px)': {
            marginTop: 48
        },
        '@media only screen and (max-width: 576px)': {
            height: '100vh',
            marginTop: 0
        },
    }
});

export default ContentCard;