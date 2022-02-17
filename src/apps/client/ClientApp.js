import React, {useEffect, useState} from 'react';
import {deleteClientById, getAllClients, getClientById} from "../../services/ClientService";
import FormDialog from "../../components/form-components/FormDialog";
import Button from "@material-ui/core/Button";
import ClientTable from "./ClientTable";

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    {
        id: 'lastName',
        numeric: false,
        disablePadding: false,
        label: 'Apellido',
    },
    {
        id: 'direction',
        numeric: false,
        disablePadding: false,
        label: 'Dirección',
    },
    {
        id: 'phoneNumber',
        numeric: false,
        disablePadding: false,
        label: 'Número',
    },
    {
        id: 'age',
        numeric: false,
        disablePadding: false,
        label: 'Edad',
    },
    {
        id: 'options',
        numeric: false,
        disablePadding: false,
        label: 'Options',
    },
];

//Esta es la forma ideal en la que manejo mis paginas en react, creo un componente App y aqui llamare los componentes a utilizar
const ClientApp = () => {

    const [clients, setClients] = useState([]);
    const [actualClient, setActualClient] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const handleOpenDialog = () => {

        setIsDialogOpen(true);
    };


    const handleCloseDialog = () => {

        setIsDialogOpen(false);
    };


    const getActualClient = (videoGameId) => {

        getClientById(videoGameId, setActualClient);

        handleOpenDialog();
    };


    const deleteClient = (clientId) =>{

        deleteClientById(clientId, setClients);
    };

    //idealmente es mejor manejar los estados desde el componente padre y mandarle esto estados a los componentes hijos
    useEffect(() => {

        getAllClients(setClients);
    }, []);


    return (

        <div className="text-center">

            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                Agregar Cliente
            </Button>

            <ClientTable dataList={clients} getActualData={getActualClient}
                         deleteClient={deleteClient} headCells={headCells}/>

            <FormDialog isDialogOpen={isDialogOpen} setClients={setClients}
                        handleClose={handleCloseDialog} actualClient={actualClient} />

        </div>

    );
};

export default ClientApp;
