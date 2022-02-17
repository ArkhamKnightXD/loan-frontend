import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle,} from "@material-ui/core";
import { saveClient, updateClient} from "../../services/ClientService";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import GeneralTextField from "./GeneralTextField";

export default function FormDialog(props) {

    const {actualClient, handleClose, isDialogOpen, setClients} = props;

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [direction, setDirection] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loanQuantity, setLoanQuantity] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);


    useEffect(() => {

        if(actualClient){

            setId(actualClient.id);
            setName(actualClient.name);
            setLastName(actualClient.lastName);
            setDirection(actualClient.direction);
            setPhoneNumber(actualClient.phoneNumber);
            setLoanQuantity(actualClient.loanQuantity);
            setLoanTerm(actualClient.loanTerm);
        }

    }, [actualClient]);


    const generalHandleChange = (setData, event) => {

        setData(event.target.value);
    };


    const handleSubmit = () => {

        const clientToSave = {id, name, lastName, direction, phoneNumber, loanQuantity, loanTerm};

        if (id)
            updateClient(clientToSave, setClients);

        else
            saveClient(clientToSave, setClients);

        resetFormData();
    };


    const resetFormData = () => {

        setId(0);
        setName("");
        setLastName("");
        setDirection("");
        setPhoneNumber("");
        setLoanQuantity(0);
        setLoanTerm(0);

        handleClose();
    };

    const handleCancel = () => {

        resetFormData();
    };


    return (
        <div>

            <Dialog open={isDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">

                {id === 0 ? (

                        <DialogTitle id="form-dialog-title">Agregar Nuevo Cliente</DialogTitle>
                    ):

                    <DialogTitle id="form-dialog-title">{name}</DialogTitle>
                }

                <DialogContent>

                    <GeneralTextField value={name} handleChange={generalHandleChange}
                                      label={"Nombre"} type={"text"} setData={setName}/>

                    <GeneralTextField value={lastName} handleChange={generalHandleChange}
                                      label={"Apellido"} type={"text"} setData={setLastName}/>

                    <GeneralTextField value={phoneNumber} handleChange={generalHandleChange}
                                      label={"Número"} type={"text"} setData={setPhoneNumber}/>

                    <GeneralTextField value={direction} handleChange={generalHandleChange}
                                      label={"Dirección"} type={"text"} setData={setDirection}/>

                    <GeneralTextField value={loanQuantity} handleChange={generalHandleChange}
                                      label={"Cantidad"} type={"number"} setData={setLoanQuantity}/>

                    <GeneralTextField value={loanTerm} handleChange={generalHandleChange}
                                      label={"Plazos"} type={"number"} setData={setLoanTerm}/>

                </DialogContent>

                <DialogActions>

                    {id === 0 ? (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Agregar Cliente
                        </Button>
                    ):

                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Actualizar Cliente
                        </Button>
                    }

                    <Button variant="contained" color="secondary" onClick={handleCancel}>
                        Cancelar
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}


FormDialog.propTypes = {

    isDialogOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    setClients: PropTypes.func.isRequired,
    actualClient: PropTypes.object
};
