const url = "http://localhost:5500/api";

function getUsers() {
    axios
        .get(url)
        .then((response) => {
            apiResult.innerText = JSON.stringify(response.data);
        })
        .catch((error) => console.error(error));
}
//POST
function addNewUser(newUser) {
    axios
        .post(url, newUser)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.error(error));
}

const newUser = {
    name: "Matheus Verissimo",
    avatar: "https://picsum.photos/200/300",
    city: "São Bernardo do Campo",
};
//GET ID
function getUser(id) {
    axios
        .get(`${url}/${id}`)
        .then((response) => {
            const data = response.data;
            userID.innerText = `ID: ${data.id}`;
            userName.innerText = `Nome: ${data.name}`;
            userCity.innerText = `Cidade: ${data.city}`;
            userAvatar.src = data.avatar;
        })
        .catch((error) => console.error(error));
}
//PUT
function updateUser(id, userUpdated) {
    axios
        .put(`${url}/${id}`, userUpdated)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
}

const userUpdated = {
    name: "Matheus Evangelista",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo",
};

function deleteUser(id) {
    axios
        .delete(`${url}/${id}`)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
}

// deleteUser(2);
// updateUser(3, userUpdated);
// addNewUser();
getUser(1);
getUsers();
