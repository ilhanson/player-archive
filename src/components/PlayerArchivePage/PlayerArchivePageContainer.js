import React, { useState } from 'react';

import PlayerArchivePage from './PlayerArchivePage';
import { useDataApi } from '../../utilities/useApi';

function PlayerArchivePageContainer() {
  const [playerId, setPlayerId] = useState('');
  const [player, playerError] = useDataApi(playerId);


  return <PlayerArchivePage
    playerId={playerId}
    onPlayerSearch={id => setPlayerId(id)}
    isSearchDirty={Boolean(player || playerError)}
    player={player}
  />;
}

export default PlayerArchivePageContainer;
