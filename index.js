// Initial list of registered students
const initialStudents = [
    { name: "Avishkar", id: "001", class: "12", roll: "4" },
    { name: "Khushi", id: "002", class: "12", roll: "10" },
    { name: "Shourya", id: "003", class: "12", roll: "22" },
    { name: "Pranav", id: "004", class: "12", roll: "23" },
    { name: "Drishti", id: "005", class: "12", roll: "9" },
    { name: "Reem", id: "006", class: "12", roll: "11" }
];

// Function to add a student row to the table
function addStudentRow(student) {
    const table = document.getElementById('student-table');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.class}</td>
        <td>${student.roll}</td>
        <td>
            <button class="reset-btn">Reset</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    // Add functionality for Reset and Delete buttons
    row.querySelector('.reset-btn').addEventListener('click', function () {
        row.querySelectorAll('td').forEach((cell, index) => {
            if (index < 4) cell.innerText = ''; // Reset content except actions
        });
    });

    row.querySelector('.delete-btn').addEventListener('click', function () {
        row.remove();
    });

    table.appendChild(row);
}

// Load initial students into the table
function loadInitialStudents() {
    initialStudents.forEach(addStudentRow);
}

// Add new student from the form
document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const id = document.getElementById('id').value.trim();
    const studentClass = document.getElementById('class').value.trim();
    const roll = document.getElementById('roll').value.trim();

    if (name && id && studentClass && roll) {
        const student = { name, id, class: studentClass, roll };
        addStudentRow(student);

        // Clear input fields
        document.getElementById('student-form').reset();
    }
});

// Load the initial student list when the page loads
window.onload = loadInitialStudents;
