import React from 'react';

import { Box, Grommet, Heading, Keyboard } from 'grommet';
import { grommet } from 'grommet/themes';

export const OnDocument = () => (
  <Grommet theme={grommet}>
    <Keyboard target="document" onEsc={() => alert('You pressed Esc!')}>
      <Box pad="large" background="light-4">
        <Heading level="3">Press Esc on me!</Heading>
      </Box>
    </Keyboard>
  </Grommet>
);

OnDocument.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
