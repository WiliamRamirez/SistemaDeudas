import React, { useEffect, useState } from 'react';
import CustomBodyName from '../../../components/body-custom/custom-body-name';
import CustomBodyDescription from '../../../components/body-custom/custom-body-description';
import { Customer } from '../../../models/customer';
import { useParams } from 'react-router-dom';
import apiCustomers from '../../../api/api.customers';
import CustomBody from '../../../components/body-custom/custom-body';
import CustomCard from '../../../components/custom-card/custom-card/custom-card';
import CustomCardHeader from '../../../components/custom-card/custom-card-header/custom-card-header';
import CustomCardBody from '../../../components/custom-card/custom-card-body/custom-card-body';
import Grid from '@material-ui/core/Grid';
import BodyLoading from '../../../components/custom-loading/body-loading';

function CustomersDetails() {
    const [initialLoading, setInitialLoading] = useState(true);
    const [customer, setCustomer] = useState<Customer>(new Customer());
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            apiCustomers.detail(id).then((data) => {
                setCustomer(new Customer(data));
                setInitialLoading(false);
            });
        }
    }, [id]);

    return initialLoading ? (
        <BodyLoading />
    ) : (
        <React.Fragment>
            <CustomBodyName>Detalles cliente</CustomBodyName>
            <CustomBodyDescription>
                Se encarga de mostrar los detalles de un cliente
            </CustomBodyDescription>

            <CustomBody>
                <CustomCard>
                    <CustomCardHeader>
                        <h3> Detalles del cliente : {customer.name} </h3>
                    </CustomCardHeader>
                    <CustomCardBody>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <h3> Detalles del cliente: </h3>
                                <h5> Cliente: </h5>
                                <p>
                                    {customer.lastName}, {customer.name}
                                </p>
                                <h5> Celular: </h5>
                                <p> {customer.cellPhone} </p>
                                <h5> Direccion: </h5>
                                <p> {customer.direction} </p>
                                <h5> Dni: </h5>
                                <p> {customer.dni} </p>
                                <h5> Email: </h5>
                                <p> {customer.email} </p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <h4> Deudas: </h4>
                                <p> {customer.id} </p>
                            </Grid>
                        </Grid>
                    </CustomCardBody>
                </CustomCard>
            </CustomBody>
        </React.Fragment>
    );
}

export default CustomersDetails;
