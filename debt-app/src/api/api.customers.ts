import request from './api';
import { Customer, CustomerFormValues } from '../models/customer';

const apiCustomers = {
    list: () => request.get<Customer[]>('/customers'),
    add: (data: CustomerFormValues) => request.post('/customers', data),
    detail: (id: string) => request.get<Customer>(`/customers/${id}`),
    edit: (data: CustomerFormValues) => request.put(`/customers/${data.id}`, data),
    remove: (id: string, del: boolean) => request.put(`/customers/delete/${id}`, { delete: del }),
    delete: (id: string) => request.delete(`/customers/${id}`),
};

export default apiCustomers;
