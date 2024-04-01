const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const className = document.getElementById('class').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${studentList.children.length + 1}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>${className}</td>
        <td><button onclick="deleteRow(this)">Xóa</button></td>
    `;
    studentList.appendChild(newRow);

    studentForm.reset();
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}