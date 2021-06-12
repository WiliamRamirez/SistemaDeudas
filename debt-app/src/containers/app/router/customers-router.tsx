import React from 'react';
import { Route } from 'react-router-dom';
import CustomersList from '../../customers/dashboard/customers-list';
import CustomersForm from '../../customers/form/customers-form';

function CustomersRouter() {
    return (
        <React.Fragment>
            <Route path='/customers/list' component={CustomersList} />
            <Route path='/customers/add' component={CustomersForm} />
            <Route path='/customers/edit/:id' component={CustomersForm} />
        </React.Fragment>
    );
}

export default CustomersRouter;
