document.getElementById("loadDataButton").addEventListener("click", loadData);

function loadData() {
    try {
        fetch("https://github.com/ogiansouza")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro na requisição.");
                }
                return response.json();
            })
            .then(data => {
                document.getElementById("repoCount").textContent = data.public_repos;
                document.getElementById("followersCount").textContent = data.followers;
                document.getElementById("followingCount").textContent = data.following;
            })
            .catch(error => {
                console.error("Erro: " + error);
            });
    } catch (error) {
        console.error("Erro: " + error);
    }
}