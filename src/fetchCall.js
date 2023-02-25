
const baseUrl = "https://europe-west3-upids-v3.cloudfunctions.net/v3-hack/user/"

const fetchCall = async (url, method, payload) => {
    let data;
    const apiUrl = baseUrl + url;
    
    await fetch(apiUrl, {
        method: method,
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }).then(response => response.json())
        .then(dat => {
            data = dat
        })
        .catch(error => console.error("Error:", error));

    return data;
};

export { fetchCall };