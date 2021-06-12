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

function CustomersList() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        apiCustomers.list().then((data) => {
            setCustomers(data);
        });
    }, []);

    return (
        <React.Fragment>
            {/* Chart */}
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
                                        {/*<TableCell align='right'>Sale Amount</TableCell>*/}
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
                                                {tempCustomer.delete ? (
                                                    <Button
                                                        size={'small'}
                                                        variant='contained'
                                                        color='primary'
                                                        style={{ width: '100px' }}
                                                        startIcon={
                                                            <span className='material-icons'>
                                                                done
                                                            </span>
                                                        }
                                                    >
                                                        Activar
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        size={'small'}
                                                        variant='contained'
                                                        color='secondary'
                                                        style={{ width: '100px' }}
                                                        startIcon={
                                                            <span className='material-icons'>
                                                                delete_outline
                                                            </span>
                                                        }
                                                    >
                                                        Eliminar
                                                    </Button>
                                                )}
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
