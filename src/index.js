import React from 'react';
import ReactDOM from 'react-dom';

import PlayerArchivePageContainer from './components/PlayerArchivePage/PlayerArchivePageContainer';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import './reset.css';

ReactDOM.render(
    <ThemeProvider>
        <PlayerArchivePageContainer />
    </ThemeProvider>, 
    document.getElementById('root')
);

