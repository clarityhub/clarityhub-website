import React from 'react';

import { FlagsProvider } from '../Flags';
import flags from '../../../flags.json';

const App = ({ children }) => (
	<FlagsProvider flags={flags}>
		{children}
	</FlagsProvider>
);

export default App;
