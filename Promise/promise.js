const url = "https://api.github.com/users/mveryy";
//Fetch + .then
// fetch(url)
//     .then((response) => response.json())
//     .then((fResponse) => console.log(fResponse));

// Fetch async + await
// async function obterDados() {
//     try {
//         const response = await fetch(url);
//         const jsonResponse = await response.json();
//         console.log(jsonResponse);
//     } catch (error) {
//         console.log("error.message");
//     }
// }

// obterDados();

//Axios

// function getUser() {
//     axios
//         .get(url)
//         .then((response) => {
//             apiResult.textContent = JSON.stringify(response.data);
//             avatar.src = response.data.avatar_url;
//         })

//         .catch((error) => console.error(error.message));
// }

// getUser();
