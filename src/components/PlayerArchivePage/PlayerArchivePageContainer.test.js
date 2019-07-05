import React from 'react';
import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
} from '@testing-library/react';
import 'jest-dom/extend-expect';
import * as AphroditeNoImportant from 'aphrodite/no-important';
import axios from 'axios';

import PlayerArchivePageContainer from './PlayerArchivePageContainer';

AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();
jest.mock('axios');

afterEach(cleanup);
afterEach(() => {
    axios.get.mockReset()
});

const API_URL = 'https://web-sandbox.onefootball.com/assignments/';

describe('PlayerArchivePage', () => {
    it('generates PlayerNotAvailable when "francesco" is searched', async () => {
        const searchText = 'francesco';
        const url = API_URL + `player/data/${searchText}.json`;
        const { getByTestId, getAllByTestId } = render(<PlayerArchivePageContainer />);

        axios.get.mockRejectedValueOnce({
            response: { status: 403 }
        });

        fireEvent.change(getByTestId('search-input'), { target: { value: searchText } });
        fireEvent.click(getByTestId('submit-button'));

        const notAvailableTextNodes = await waitForElement(() =>
            getAllByTestId('not-available-text')
        );

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(url);
        expect(notAvailableTextNodes).toHaveLength(1);

    })

    it('generates PlayerNotAvailable when "giorgio" is searched', async () => {
        const searchText = 'giorgio';
        const url = API_URL + `player/data/${searchText}.json`;
        const { getByTestId, getAllByTestId } = render(<PlayerArchivePageContainer />);

        axios.get.mockResolvedValueOnce({
            data: {
                "id": "giorgio",
                "active": "false",
                "profile-id": "profile-333.json"
            }
        });

        fireEvent.change(getByTestId('search-input'), { target: { value: searchText } });
        fireEvent.click(getByTestId('submit-button'));

        const notAvailableTextNodes = await waitForElement(() =>
            getAllByTestId('not-available-text')
        );

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(url);
        expect(notAvailableTextNodes).toHaveLength(1);
    })

    it('generates PlayerInfoLines when "fabio" is searched', async () => {
        const searchText = 'fabio';
        const profileId = 'profile-111.json';
        const dataUrl = API_URL + `player/data/${searchText}.json`;
        const profileUrl = API_URL + `player/profile/${profileId}`;
        const { getByTestId, getByText } = render(<PlayerArchivePageContainer />);

        axios.get
            .mockResolvedValueOnce({
                data: {
                    "id": "fabio",
                    "active": "true",
                    "profile-id": "profile-111.json"
                }
            })
            .mockResolvedValueOnce({
                data: {
                    "id": "fabio",
                    "profile": {
                        "age": "33",
                        "role": "centre-back",
                        "team": "Juventus",
                        "picture": "https://dummyimage.com/170x170/eead47/000000&text=Fabio"
                    },
                    "stats": {
                        "blocks": "7",
                        "totalTackles": "31",
                        "interceptions": "41",
                        "tacklesWon": "28",
                        "yellowCards": "6",
                        "passingAccuracy": "87.2",
                        "clearances": "95",
                        "totalCrosses": "8",
                        "aerialDuelsWon": "61",
                        "minutesPlayed": "1993",
                        "minutesPerGoal": "1993.0",
                        "headedGoals": "0",
                        "foulsConceded": "30",
                        "totalPasses": "1833",
                        "totalShots": "9",
                        "otherGoals": "0",
                        "duelsWon": "106",
                        "shotsOnTarget": "4",
                        "leftFootGoals": "1",
                        "rightFootGoals": "0",
                        "starts": "23",
                        "goalsFromInsideBox": "1",
                        "substitutionOff": "3",
                        "foulsWon": "7",
                        "assists": "1",
                        "gamesPlayed": "23",
                        "substitutionOn": "0",
                        "redCards": "0",
                        "goals": "1",
                        "successfulCrosses": "5",
                        "goalsFromOutsideBox": "0"
                    }
                }
            });

        fireEvent.change(getByTestId('search-input'), { target: { value: searchText } });
        fireEvent.click(getByTestId('submit-button'));

        await waitForElement(() =>
            getByTestId('details-header')
        );

        await waitForElement(() =>
            getByText('Juventus')
        );

        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenCalledWith(dataUrl);
        expect(axios.get).toHaveBeenCalledWith(profileUrl);

    })
});
