
// Function to display an alert message
function scriptTest() {
    alert("Hey, my script is running!");
}

// Function to get user input and update the h3 element
function updateH3() {
    const nameInput = document.getElementById('name');
    const moodInput = document.getElementById('mood');
    const h3Element = document.getElementById('userFeedback');

    const name = nameInput.value;
    const mood = moodInput.value;

    h3Element.textContent = `Hello, ${name}! You are feeling ${mood}.`;
}

// Function to calculate and display the polygon name
function calculatePolygon() {
    const numberInput = document.getElementById('favoriteNumber');
    const polygonAlert = document.getElementById('polygonAlert');

    const favoriteNumber = Math.abs(Math.round(parseFloat(numberInput.value)));
    
    const polygonNames = ["", "monogon", "digon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    
    let polygonName = "unknown";
    if (favoriteNumber >= 0 && favoriteNumber < polygonNames.length) {
        polygonName = polygonNames[favoriteNumber];
    }

    polygonAlert.textContent = `Your favorite polygon with ${favoriteNumber} sides is called a ${polygonName}.`;
}

// Define your other functions here
// Function to update the date and time display
// Function to display the current date and time
function displayCurrentDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const now = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const dayOfWeekStr = dayOfWeek[now.getDay()];

    const formattedDateTime = `Today is ${hours}:${minutes}${hours >= 12 ? 'pm' : 'am'} on ${dayOfWeekStr}, ${day} ${month}, ${year}`;

    currentDateTimeElement.textContent = formattedDateTime;
}

// Call the function to display the current date and time when the page loads
window.addEventListener('load', displayCurrentDateTime);
