// Function to prevent form submission without necessary information
document.getElementById('introForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Check if all required fields are filled
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').value;
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopmentBackground = document.getElementById('webDevelopmentBackground').value;
    const primaryComputer = document.getElementById('primaryComputer').value;

    if (
        name !== "" &&
        mascot !== "" &&
        image !== "" &&
        imageCaption !== "" &&
        personalBackground !== "" &&
        professionalBackground !== "" &&
        academicBackground !== "" &&
        webDevelopmentBackground !== "" &&
        primaryComputer !== ""
    ) {
        event.target.submit(); // Submit the form if all fields are filled
    } else {
        alert("Please fill out all required fields.");
    }
});

// Function to reset the form
function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('result').style.display = 'none';
}

// Function to add new course text boxes
function addCourse() {
    const courseList = document.getElementById('courseList');
    const newCourse = document.createElement('input');
    newCourse.type = 'text';
    newCourse.classList.add('course');
    newCourse.required = true;
    
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        courseList.removeChild(newCourse);
        courseList.removeChild(deleteButton);
    };
    
    courseList.appendChild(newCourse);
    courseList.appendChild(deleteButton);
}

// Function to gather data and display results
document.getElementById('introForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Gather data from form
    const formData = new FormData(event.target);
    const result = {};

    for (const [key, value] of formData.entries()) {
        result[key] = value;
    }

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = "<h4>Form Results:</h4><pre>" + JSON.stringify(result, null, 2) + "</pre>";
});
