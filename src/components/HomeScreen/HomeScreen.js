import React from 'react';

import PlayerArchivePageContainer from '../PlayerArchivePage/PlayerArchivePageContainer';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import Container from '../Container/Container';
import ContentCard from '../ContentCard/ContentCard';

function HomeScreen() {
    return (
        <ThemeProvider>
            <Container>
                <ContentCard>
                    <PlayerArchivePageContainer />
                </ContentCard>
            </Container>
        </ThemeProvider>
    );
}

export default HomeScreen;