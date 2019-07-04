import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import PlayerSearchForm from '../PlayerSearchForm/PlayerSearchForm';
import PlayerDetailsContainer from '../PlayerDetails/PlayerDetailsContainer';
import PlayerNotAvailable from '../PlayerNotAvailable/PlayerNotAvailable';
import theme from '../ThemeProvider/theme';

function PlayerArchivePage(props) {
    return (
        <React.Fragment>
            <h1 className={css(styles.header, theme.styles.centerText)}>Player Archive</h1>
            <section>
                <h2 className={css(styles.sectionHeader)}>Search</h2>
                <PlayerSearchForm
                    onSubmit={props.onPlayerSearch}
                />
            </section>
            {
                // do not display details before searching for an id
                // or after resetting the search with empty string search
                props.isSearchDirty &&
                    <section>
                        <h2 className={css(styles.sectionHeader)}>Player Details</h2>
                        {
                            props.player && props.player.active !== 'false' ?
                                <PlayerDetailsContainer player={props.player} />
                                :
                                <PlayerNotAvailable />
                        }
                    </section>
            }
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    header: {
        color: theme.primary.color,
        letterSpacing: '0.04rem',
        lineHeight: 0.85,
        fontSize: '3rem',
        margin: '24px 0',
        fontWeight: 500,
        fontStyle: 'italic'
    },
    sectionHeader: {
        color: theme.primary.color,
        letterSpacing: '0.04rem',
        lineHeight: 1.4,
        fontSize: '1.7rem',
        margin: '24px 0 12px 0',
        fontWeight: 400
    }
});

export default PlayerArchivePage;
