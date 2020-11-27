import axios from "axios";

const url = "http://localhost:5000";

const api = axios.create({
    baseURL: url,
});

export const fetchContestant = async () => {
    const request = await api
        .get("/get-contestant")
        .catch((err) => console.log(err));
    return request.data;
};

export const fetchWinners = async () => {
    const request = await api
        .get("/get-winners")
        .catch((err) => console.log(err));
    return request.data;
};

export const updateStatus = async (id) => {
    const request = await api
        .put(`/update-status-contestant/${id}`)
        .catch((err) => console.log(err));
};
