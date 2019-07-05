import React from 'react';
import ReactDOM from 'react-dom';
import * as AphroditeNoImportant from 'aphrodite/no-important';
import HomeScreen from './HomeScreen';

AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeScreen />, div);
});