import React, { useState } from 'react';
import CustomBodyName from '../../components/body-custom/custom-body-name';
import CustomBodyDescription from '../../components/body-custom/custom-body-description';
import CustomBody from '../../components/body-custom/custom-body';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../components/custom-text-field/custom-text-field';
import { Button } from '@material-ui/core';
import CustomMainForm from '../../components/form/custom-main-form';
import { CustomerFormValues } from '../../models/customer';
import apiCustomers from '../../api/api.customers';

function AddCustomers() {
    const [customer, setCustomer] = useState<CustomerFormValues>(new CustomerFormValues());

    function changeValueCustomer(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { value, name } = event.target;
        setCustomer({ ...customer, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        apiCustomers.add(customer);
    }

    return (
        <React.Fragment>
            <CustomBodyName>Agregar un nuevo cliente</CustomBodyName>
            <CustomBodyDescription>
                Este componenete se encarga de agregar un nuevo cliente
            </CustomBodyDescription>
            <CustomBody>
                <CustomMainForm title={'Agregue un nuevo cliente'}>
                    <form onSubmit={handleSubmit}>
                        <React.Fragment>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        value={customer.name}
                                        onChange={(event) => changeValueCustomer(event)}
                                        required
                                        name='name'
                                        label='Nombres'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        value={customer.lastName}
                                        onChange={(event) => changeValueCustomer(event)}
                                        required
                                        name='lastName'
                                        label='Apellidos'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        value={customer.direction}
                                        onChange={(event) => changeValueCustomer(event)}
                                        required
                                        name='direction'
                                        label='Direccion'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        value={customer.cellPhone}
                                        onChange={(event) => changeValueCustomer(event)}
                                        required
                                        name='cellPhone'
                                        label='Numero'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        value={customer.dni}
                                        onChange={(event) => changeValueCustomer(event)}
                                        required
                                        name='dni'
                                        label='Dni'
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <CustomTextField
                                        value={customer.email}
                                        onChange={(event) => changeValueCustomer(event)}
                                        name='email'
                                        label='Email'
                                    />
                                </Grid>
                            </Grid>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button type={'submit'} variant='contained' color={'primary'}>
                                    Agregar
                                </Button>
                            </div>
                        </React.Fragment>
                    </form>
                </CustomMainForm>
            </CustomBody>
        </React.Fragment>
    );
}

export default AddCustomers;
