// Default username and password
const defaultUsername = "admin";
const defaultPassword = "admin";

// Login validation function
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    if (username === defaultUsername && password === defaultPassword) {
        // Hide login form and show dashboard
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('dashboardSection').style.display = 'block';
        return false;
    } else {
        loginError.textContent = "Incorrect username or password!";
        loginError.style.display = 'block';
        return false;
    }
}

// Function to generate a random quote from an API
function generateQuote() {
    const quoteText = document.getElementById('quoteText');
    quoteText.textContent = "Fetching quote...";

    // Fetch quote from API
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            quoteText.textContent = "Failed to fetch a quote. Please try again.";
        });
}

// Function to generate a random fun fact from an API
function generateFunFact() {
    const funFactText = document.getElementById('funFactText');
    funFactText.textContent = "Fetching fun fact...";

    // Fetch fun fact from API
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            funFactText.textContent = data.text;
        })
        .catch(error => {
            funFactText.textContent = "Failed to fetch a fun fact. Please try again.";
        });
}
