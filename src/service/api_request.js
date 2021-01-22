const API = "https://custom-react-dashboard-backend.herokuapp.com";

const fetchData = () => {

    return fetch(`${API}/fetch_data`, {
        method: "GET",
        headers: {
            "Content-Type": "application.json"
        }
    }).then(response => {
        return response.json()
    })
        .catch(() => console.log("error"))
}


export default fetchData