import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import theme from '../ThemeProvider/theme';

function PlayerSearchForm(props) {
    const [idField, setIdField] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(idField);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={css(theme.styles.formGroup)}>
                <label htmlFor="p_id" className={css(styles.label)}>*Enter player's id:</label><br />
                <input type="text" id="p_id" name="p_id" className={css(theme.styles.input, theme.styles.customFocus)}
                    value={idField}
                    onChange={e => setIdField(e.target.value)}
                    data-testid="search-input"
                />
            </div>
            <button type="submit" className={css(styles.submitButton, theme.styles.customFocus)} data-testid="submit-button">Go</button>
        </form>
    );
}

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: theme.accent.color,
        color: theme.primary.backgroundColor,
        border: '1px solid rgba(0,0,0,0.2)',
        padding: 2,
        height: '1.6rem',
        minWidth: 50,
        margin: '0 8px'
    },
    label: {
        color: theme.accent.color,
        opacity: 0.9,
        lineHeight: '1.3rem',
        fontSize: '0.9rem'
    },
});

export default PlayerSearchForm;