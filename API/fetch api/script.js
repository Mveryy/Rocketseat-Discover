const url = "http://localhost:5500/api";

function getUsers() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => (renderApiResult.innerText = JSON.stringify(data)))
        .catch((error) => console.error(error));
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            userName.innerText = data.name;
            userCity.innerText = data.city;
            userAvatar.src = data.avatar;
        })
        .catch((error) => console.error(error));
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((data) => (alertApi.innerText = data))
        .catch((error) => console.error(error));
}

const newUser = {
    name: "Flávia Bueno",
    avatar: "https://picsum.photos/200/300",
    city: "Maranhão",
};

// addUser(newUser);

function updateUser() {
    fetch(`${url}/2`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((data) => (alertApi.innerText = data))
        .catch((error) => console.error(error));
}

const updatedUser = {
    name: "Matheus Verissimo",
    avatar: "https://picsum.photos/200/300",
    city: "São Bernardo do Campo",
};
// updateUser(updatedUser);

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((data) => (alertApi.innerText = data))
        .catch((error) => console.error(error));
}

// deleteUser(2);

getUser(1);
getUsers();
