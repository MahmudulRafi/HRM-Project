import axios from "axios";

axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedErrors) {
        alert("An unexpected error occured.");
    } else if (error.response.status === 400) {
        alert("Bad Request");
    } else if (error.response.status === 404) {
        alert("Post Not Found");
    }

    return Promise.reject(error);
});

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};

export default http;
