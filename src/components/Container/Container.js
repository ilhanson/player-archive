import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

function Container(props) {
    return (
        <div className={css(styles.container)}>
            {props.children}
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media only screen and (min-width: 992px)': {
            maxWidth: 960
        },
        '@media only screen and (min-width: 768px)': {
            maxWidth: 720
        },
        '@media only screen and (min-width: 576px)': {
            maxWidth: 540
        },
    }
});

export default Container;