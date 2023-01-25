import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
             "f2701a393amsh9624f8bdaece867p10ba2cjsnabe8f8a80f36",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
// cfe8fb4bd4msh73a7d6063585071p1de5c1jsn65e497003e84
// cdb9cbe5d9mshf77ef3ee87e92a8p109994jsn9d81dcc0a899
// f2701a393amsh9624f8bdaece867p10ba2cjsnabe8f8a80f36