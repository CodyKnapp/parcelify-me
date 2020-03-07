
import * as React from 'react';

export interface AppProperties {
    name: string
};

export const App = ({name}: AppProperties) => (
    <div>Hello there {name}!</div>
);

export default App;
