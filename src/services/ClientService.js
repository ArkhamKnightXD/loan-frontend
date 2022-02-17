import axios from "axios";

const URL = "http://localhost:88";


export const getAllClients = (setClients) => {

    axios.get(`${URL}/api/clients`).then(response => {

        setClients(response.data);
    });
};


export const getClientById = (videoGameId, setActualVideoGame) => {

    axios.get(`${URL}/api/clients/${videoGameId}`).then(response => {

        setActualVideoGame(response.data);
    });
};


export const saveClient = (client, setClients) => {

    axios.post(`${URL}/api/clients`, client).then(response => {

        setClients(response.data);
    });
};


export const updateClient = (videoGameToUpdate, setVideoGames) => {

    axios.put(`${URL}/api/clients`, videoGameToUpdate).then(response => {

        setVideoGames(response.data);
    });
};


export const deleteClientById = (videoGameId, setVideoGames) => {

    axios.delete(`${URL}/api/clients/${videoGameId}`).then(response => {

        setVideoGames(response.data);
    });
};


