import { nameChecker } from './nameChecker';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('urlForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

export async function handleSubmit(event) {
    event.preventDefault();

    // Get input value
    const text = document.getElementById("articleText").value;
    console.log(text);

    // Validate URL
    if (!nameChecker(text)) {
        alert("Invalid URL. Please enter a valid link.");
        return;
    }

    try {
        loading(true); // Show loader

        const response = await fetch("/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: text }) // Send URL instead of text
        });

        const data = await response.json();
        console.log(data);

        if (!data || !data.agreement) {
            errorHandle(true, "Invalid response from API");
        } else {
            document.getElementById("agreement").textContent = `Agreement: ${data.agreement}`;
            document.getElementById("confidence").textContent = `Confidence: ${data.confidence}`;
            document.getElementById("irony").textContent = `Irony: ${data.irony}`;
            document.getElementById("score_tag").textContent = `Score Tag: ${data.score_tag}`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        errorHandle(true, "Error fetching data from the API");
    } finally {
        loading(false); // Hide loader
    }
}

// Loader function
function loading(isLoading) {
    document.querySelector('.loader').style.display = isLoading ? 'block' : 'none';
}

// Error handling function
function errorHandle(isError, message) {
    document.querySelector(".error").style.display = isError ? 'block' : 'none';
    document.querySelector(".error").textContent = message;
}
