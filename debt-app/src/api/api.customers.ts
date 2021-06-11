import request from './api';
import { Customer, CustomerFormValues } from '../models/customer';

const apiCustomers = {
    list: () => request.get<Customer[]>('/customers'),
    add: (data: CustomerFormValues) => request.post('/customers', data),
};

export default apiCustomers;
