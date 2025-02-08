//evaluate-news-nlp\starter_project\src\client\js\formHandler.js

export async function handleSubmit(event) {
    event.preventDefault();
    const text = document.getElementById("articleText").value;
    if (!text) return alert("Please enter some text");
    const response = await fetch("http://localhost:8081/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });
    const data = await response.json();
    document.getElementById("results").innerHTML = `Tone: ${data.tone}, Subjectivity: ${data.subjectivity}`;
}