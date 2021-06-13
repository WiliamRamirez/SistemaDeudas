import React, { useEffect, useState } from 'react';
import CustomBodyName from '../../../components/body-custom/custom-body-name';
import CustomBodyDescription from '../../../components/body-custom/custom-body-description';
import CustomBody from '../../../components/body-custom/custom-body';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../components/custom-text-field/custom-text-field';
import { Button } from '@material-ui/core';
import CustomMainForm from '../../../components/form/custom-main-form';
import { CustomerFormValues } from '../../../models/customer';
import apiCustomers from '../../../api/api.customers';
import { useParams } from 'react-router-dom';
import CustomSnackbar from '../../../components/custom-snackbar/custom-snackbar';
import BodyLoading from '../../../components/custom-loading/body-loading';
import ButtonLoading from '../../../components/custom-loading/button-loading';

function CustomersForm() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [customer, setCustomer] = useState<CustomerFormValues>(new CustomerFormValues());

    const { id } = useParams<{ id: string }>();

    function changeValueCustomer(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { value, name } = event.target;
        setCustomer({ ...customer, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (id) {
            setLoading(true);
            apiCustomers.edit(customer).then(() => {
                updatedLoading();
            });
            setMessage('Se edito correctamento el cliente');
        } else {
            setLoading(true);
            apiCustomers.add(customer).then(() => {
                updatedLoading();
            });
            setMessage('Se agrego correctamento el cliente');
        }
    }

    function updatedLoading() {
        setLoading(false);
        setOpen(true);
    }

    useEffect(() => {
        if (id) {
            apiCustomers.detail(id).then((data) => {
                setCustomer(new CustomerFormValues(data));
                setInitialLoading(false);
            });
        } else {
            setInitialLoading(false);
        }
    }, [id]);

    return initialLoading ? (
        <BodyLoading />
    ) : (
        <React.Fragment>
            {
                <CustomSnackbar
                    open={open}
                    severity={'success'}
                    setOpen={setOpen}
                    message={message}
                />
            }
            <CustomBodyName>{id ? 'Editar un cliente' : 'Agregar un nuevo cliente'}</CustomBodyName>
            <CustomBodyDescription>
                {id
                    ? 'Este componenete se encarga de editar un  cliente'
                    : 'Este componenete se encarga de agregar un nuevo cliente'}
            </CustomBodyDescription>
            <CustomBody>
                <CustomMainForm title={id ? 'Edite su cliente' : 'Agregue un nuevo cliente'}>
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
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    marginTop: '15px',
                                }}
                            >
                                <Button
                                    type={'submit'}
                                    variant='contained'
                                    color={'primary'}
                                    startIcon={<span className='material-icons'>send</span>}
                                    disabled={loading}
                                >
                                    {id ? 'Editar' : 'Agregar'}
                                    {loading && <ButtonLoading />}
                                </Button>
                            </div>
                        </React.Fragment>
                    </form>
                </CustomMainForm>
            </CustomBody>
        </React.Fragment>
    );
}

export default CustomersForm;
