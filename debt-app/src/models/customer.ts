export interface Customer {
    id: string;
    name: string;
    lastName: string;
    direction: string;
    cellPhone: string;
    dni: string;
    email: string;
    delete: boolean;
}

export class Customer implements Customer {
    constructor(init?: CustomerFormValues) {
        Object.assign(this, init);
    }
}

export class CustomerFormValues {
    id?: string = undefined;
    name: string = '';
    lastName: string = '';
    direction: string = '';
    cellPhone: string = '';
    dni: string = '';
    email: string = '';

    constructor(customer?: CustomerFormValues) {
        if (customer) {
            this.id = customer.id;
            this.name = customer.name;
            this.lastName = customer.lastName;
            this.direction = customer.direction;
            this.cellPhone = customer.cellPhone;
            this.dni = customer.dni;
            this.email = customer.email;
        }
    }
}
