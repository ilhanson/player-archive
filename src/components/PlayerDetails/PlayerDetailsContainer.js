import React from 'react';

import PlayerDetails from './PlayerDetails';
import { useProfileApi } from '../../utilities/useApi';
import player from '../../models/player';

function PlayerDetailsContainer(props) {
  const [playerProfile] = useProfileApi(props.player['profile-id']);

  return <PlayerDetails player={props.player} playerProfile={playerProfile} />;
}

PlayerDetailsContainer.defaultProps = {
  player: {
      ...player
  }
};

export default PlayerDetailsContainer;
