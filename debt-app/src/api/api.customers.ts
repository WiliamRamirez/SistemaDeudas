import request from './api';
import { Customer } from '../models/customer';

const apiCustomers = {
    list: () => request.get<Customer[]>('/customers'),
};

export default apiCustomers;
