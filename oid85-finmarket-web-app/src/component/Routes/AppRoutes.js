import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { FundamentalRatingList } from '../FundamentalRatingList/FundamentalRatingList'
import {Workspace} from '../Workspace/Workspace'

export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Workspace />} />
                    <Route exact path='/fundamental-rating-list' element={<FundamentalRatingList />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}