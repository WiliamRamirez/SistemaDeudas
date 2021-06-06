import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Customer } from './models/customer';
import apiCustomers from './api/api.customers';

function App() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        apiCustomers.list().then((data) => {
            setCustomers(data);
        });
    }, []);

    return (
        <div>
            {customers.map((tempCustomer) => (
                <div key={tempCustomer.id}>
                    <p>
                        {tempCustomer.name} - {tempCustomer.lastName}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default App;
