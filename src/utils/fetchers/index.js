import axios from "axios";

export const fetch = (data, token) => {
    axios({
        url: "https://api.github.com/graphql",
        method: "POST",
        headers: {
            Authorization: `bearer ${token}`,
        },
        data,
    });
};