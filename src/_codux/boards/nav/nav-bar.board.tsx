import React from 'react';
import { createBoard } from '@wixc3/react-board';
import NavBar from '../../../../pages/sections/nav';

export default createBoard({
    name: 'NavBar',
    Board: () => <NavBar />,
    environmentProps: {
        canvasHeight: 5
    }
});
