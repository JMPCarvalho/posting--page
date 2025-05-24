document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregamento da página

    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;

    const data = {
        title: titulo,
        body: conteudo,
        userId: 1
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then(post => {
        document.getElementById("renderizador-titulo").innerText = post.title;
        document.getElementById("renderizador-conteudo").innerText = post.body;
    })
    .catch(error => console.error("Erro ao enviar post:", error));
});