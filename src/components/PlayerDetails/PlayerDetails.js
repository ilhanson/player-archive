import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import PlayerInfoLine from './PlayerInfoLine';
import { playerProfile } from '../../models/player';

function PlayerDetails(props) {
    return (
        <React.Fragment>
            <div className={css(styles.detailGroup)}>
                <PlayerInfoLine title="Id" value={props.player.id} />
                <PlayerInfoLine title="Active" value={props.player.active} />
            </div>
            <div className={css(styles.detailGroup)}>
                <PlayerInfoLine title="Age" value={props.playerProfile.profile.age} />
                <PlayerInfoLine title="Role" value={props.playerProfile.profile.role} />
                <PlayerInfoLine title="Team" value={props.playerProfile.profile.team} />
            </div>
        </React.Fragment>
    );
}

PlayerDetails.defaultProps = {
    playerProfile: {
        ...playerProfile
    }
};

const styles = StyleSheet.create({
    detailGroup: {
        margin: '12px 0 18px',
    }
});

export default PlayerDetails;