const baseUrl = "http://localhost:3000/"

const fetchCall = async (url, method, payload) => {
    const apiUrl = baseUrl + url;
    console.log("fetchCall",payload);
    fetch(apiUrl, {
        method: method,
        body: payload
    }).then(response => response.json())
        .then(dat => { return dat })
        .catch(error => console.error("Error:", error));
};

export { fetchCall };