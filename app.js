// Get references to DOM elements
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const contactsTable = document.getElementById("contactsTable").getElementsByTagName("tbody")[0];

// Initialize contacts array
let contacts = [];

// Function to render contacts to the table
function renderContacts() {
    contactsTable.innerHTML = '';
    contacts.forEach((contact, index) => {
        const row = contactsTable.insertRow();
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </td>
        `;
    });
}

// Function to handle form submission (Create)
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !email || !phone) {
        alert("All fields are required");
        return;
    }

    const newContact = { name, email, phone };
    contacts.push(newContact);
    renderContacts();

    // Clear form inputs
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
});

// Function to handle contact edit
function editContact(index) {
    const contact = contacts[index];
    nameInput.value = contact.name;
    emailInput.value = contact.email;
    phoneInput.value = contact.phone;

    // Remove the contact from the array (we'll add it back after editing)
    contacts.splice(index, 1);
    renderContacts();
}

// Function to handle contact delete
function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

// Initialize render
renderContacts();
