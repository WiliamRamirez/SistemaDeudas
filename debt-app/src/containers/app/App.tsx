import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Customer } from '../../models/customer';
import apiCustomers from '../../api/api.customers';
import { MuiThemeProvider } from '@material-ui/core';
import themeMui from '../../themes/theme-mui';
import Dashboard from '../../components/dashboard/dashboard';
import ListCustomers from '../customers/list-customers';
import AddCustomers from '../customers/add-customers';

function App() {
    return (
        <MuiThemeProvider theme={themeMui}>
            <Dashboard>
                {/*<ListCustomers />*/}
                <AddCustomers />
            </Dashboard>
        </MuiThemeProvider>
    );
}

export default App;
