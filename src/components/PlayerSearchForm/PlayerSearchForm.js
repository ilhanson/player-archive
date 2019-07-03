import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

function PlayerSearchForm(props) {
    const [idField, setIdField] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(idField);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="p_id" className={css(styles.header)}>Enter player's id:</label>
            <input type="text" id="fname" name="p_id" placeholder="Player Id" className={css(styles.header)}
                value={idField}
                onChange={e => setIdField(e.target.value)}
            />
            <button type="submit">Go</button>
        </form>
    );
}

const styles = StyleSheet.create({
    header: {

    }
});

export default PlayerSearchForm;