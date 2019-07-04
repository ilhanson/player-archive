import React from 'react';
import ReactDOM from 'react-dom';

import PlayerArchivePageContainer from './components/PlayerArchivePage/PlayerArchivePageContainer';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import Container from './components/Container/Container';
import ContentCard from './components/ContentCard/ContentCard';
import './reset.css';

ReactDOM.render(
    <ThemeProvider>
        <Container>
            <ContentCard>
                <PlayerArchivePageContainer />
            </ContentCard>
        </Container>
    </ThemeProvider>,
    document.getElementById('root')
);

