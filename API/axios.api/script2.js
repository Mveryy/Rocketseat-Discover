// axios
//     .get("https://api.github.com/users/mveryy")
//     .then((response) => axios.get(response.data.repos_url))
//     .then((repos) => console.log(repos.data))
//     .catch((error) => console.log(error));

// PromiseAll
// Promise.all([axios.get("https://api.github.com/users/mveryy"), axios.get("https://api.github.com/users/mveryy/repos")])
//     .then((responses) => {
//         console.log(responses[0].data.login);
//         console.log(responses[1].data.length);
//     })
//     .catch((error) => console.log(error));

// Async Await com Fetch
// async function start() {
//     const response = await fetch('https://api.github.com/users/mveryy')
//     const user = await response.json()
//     const reposResponse = await fetch(user.repos_url)
//     const repos = await reposResponse.json()
//     console.log(repos)
//   }

//   start()

// Async Await com Axios
// const url = "https://api.github.com/users/mveryy";
// async function fetchRepos() {
//   try {
//     const user = await axios.get(url);
//     const repos = await axios.get(user.data.repos_url);
//     console.log(repos.data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// fetchRepos();
