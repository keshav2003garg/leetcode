import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/page';
import { NotFound } from '../pages/404';

interface RouterProps {}

export const Router: React.FC<RouterProps> = ({}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
