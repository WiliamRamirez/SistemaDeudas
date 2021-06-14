import React, { useEffect, useState } from 'react';
import { Button, Divider, Grid, Paper, TableContainer, Typography } from '@material-ui/core';
import { Customer } from '../../../models/customer';
import apiCustomers from '../../../api/api.customers';
import Title from '../../../components/dashboard/title';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Link } from 'react-router-dom';
import BodyLoading from '../../../components/custom-loading/body-loading';
import ButtonLoading from '../../../components/custom-loading/button-loading';

function CustomersList() {
    const [initialLoading, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [target, setTarget] = useState('');

    function changeRemove(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) {
        const customer = customers.find((x) => x.id === id);
        if (customer) {
            //Remove
            setTarget(event.currentTarget.name);
            const value = !customer.delete;
            setLoading(true);
            apiCustomers.remove(id, value).then(() => {
                setLoading(false);
                setCustomers(
                    customers.map((tempCustomer) =>
                        tempCustomer.id === id ? { ...customer, delete: value } : tempCustomer
                    )
                );
            });

            //Delete
            /*setTarget(event.currentTarget.name);
            setLoading(true);
            apiCustomers.delete(id).then(() => {
                setLoading(false);
                setCustomers(customers.filter((tempCustomer) => tempCustomer.id !== id));
            });*/
        }
    }

    useEffect(() => {
        apiCustomers.list().then((data) => {
            setCustomers(data);
            setInitialLoading(false);
        });
    }, []);

    return initialLoading ? (
        <BodyLoading />
    ) : (
        <React.Fragment>
            <Grid item xs={12} md={8} lg={5}>
                <Paper
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 150,
                    }}
                >
                    <Typography variant='h5'>Estas en:</Typography>
                    <Divider />

                    <Typography style={{ marginTop: '10px' }} variant='body2'>
                        Listar Clientes
                    </Typography>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={7}>
                <Paper
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 150,
                    }}
                >
                    <Typography variant='h5'>Descripcion:</Typography>
                    <Divider />

                    <Typography style={{ marginTop: '10px' }} variant='body2'>
                        Se encarga de listar a todos nuestros clientes
                    </Typography>
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <React.Fragment>
                        <Title>Lista de Clientes</Title>
                        <TableContainer component={Paper}>
                            <Table size='small'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nro</TableCell>
                                        <TableCell>Cliente</TableCell>
                                        <TableCell>Telefono</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Dni</TableCell>
                                        <TableCell>Estado</TableCell>
                                        <TableCell>Editar</TableCell>
                                        <TableCell>Detalles</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customers.map((tempCustomer, index) => (
                                        <TableRow key={tempCustomer.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                {tempCustomer.name} {tempCustomer.lastName}
                                            </TableCell>
                                            <TableCell> {tempCustomer.cellPhone}</TableCell>
                                            <TableCell> {tempCustomer.email}</TableCell>
                                            <TableCell> {tempCustomer.dni}</TableCell>
                                            <TableCell>
                                                <Button
                                                    name={tempCustomer.id}
                                                    size={'small'}
                                                    variant='contained'
                                                    color={
                                                        tempCustomer.delete
                                                            ? 'primary'
                                                            : 'secondary'
                                                    }
                                                    style={{ width: '100px' }}
                                                    disabled={target === tempCustomer.id && loading}
                                                    onClick={(event) =>
                                                        changeRemove(event, tempCustomer.id)
                                                    }
                                                    startIcon={
                                                        <span className='material-icons'>
                                                            {tempCustomer.delete
                                                                ? 'done'
                                                                : 'delete_outline'}
                                                        </span>
                                                    }
                                                >
                                                    {tempCustomer.delete ? 'Activar' : 'Eliminar'}
                                                    {target === tempCustomer.id && loading && (
                                                        <ButtonLoading />
                                                    )}
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    component={Link}
                                                    to={`/customers/edit/${tempCustomer.id}`}
                                                    size={'small'}
                                                    variant='contained'
                                                    color='inherit'
                                                    style={{ width: '100px' }}
                                                    startIcon={
                                                        <span className='material-icons'>edit</span>
                                                    }
                                                >
                                                    Editar
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    component={Link}
                                                    to={`/customers/detail/${tempCustomer.id}`}
                                                    size={'small'}
                                                    variant='contained'
                                                    color='default'
                                                    style={{ width: '100px' }}
                                                    startIcon={
                                                        <span className='material-icons'>info</span>
                                                    }
                                                >
                                                    Detalles
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </React.Fragment>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default CustomersList;
