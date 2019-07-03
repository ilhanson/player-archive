import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import PlayerSearchForm from '../PlayerSearchForm/PlayerSearchForm';
import PlayerDetailsContainer from '../PlayerDetails/PlayerDetailsContainer';
import PlayerNotAvailable from '../PlayerNotAvailable/PlayerNotAvailable';

function PlayerArchivePage(props) {
    return (
        <React.Fragment>
            <h1 className={css(styles.header)}>Player Archive</h1>
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

    }
});

export default PlayerArchivePage;
