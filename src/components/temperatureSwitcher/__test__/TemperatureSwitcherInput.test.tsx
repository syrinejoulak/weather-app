import React from 'react';

import { screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../../utils/tests-utils';
import TemperatureSwitcherInput from '../TemperatureSwitcherInput';
import { expect, it } from 'vitest';

it('fetches & receives a user after clicking the fetch user button', async () => {
  renderWithProviders(<TemperatureSwitcherInput />);
});
