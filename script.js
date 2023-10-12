function submitForm() {
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const gender = getSelectedGender();
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Display the data in a popup
    const popupData = document.getElementById('popup-data');
    popupData.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    // Show the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Reset the form
    resetForm();
}

function getSelectedGender() {
    const genderCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedGenders = Array.from(genderCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.nextSibling.textContent);

    return selectedGenders.join(', ');
}

function closePopup() {
    // Close the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function resetForm() {
    document.getElementById('survey-form').reset();
    clearGenderCheckboxes();
}

function clearGenderCheckboxes() {
    const genderCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    genderCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
