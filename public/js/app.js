document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            firstName: document.querySelector('input[name="firstName"]').value,
            lastName: document.querySelector('input[name="lastName"]').value,
            id: document.querySelector('input[name="id"]').value,
            bedId: document.querySelector('input[name="bedId"]').value,
            gender: document.querySelector('select[name="gender"]').value,
            doctorAssigned: document.querySelector('input[name="doctorAssigned"]').value,
            phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
            dateOfAdmission: document.querySelector('input[name="dateOfAdmission"]').value,
            dob: document.querySelector('input[name="dob"]').value, // Capture the date of birth
            address: document.querySelector('textarea[name="address"]').value
        };

        fetch('/register-patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();  // Parse JSON only if response was successful
            } else {
                throw new Error('Something went wrong with the registration!');
            }
        })
        .then(data => {
            alert(data.message);  // Display success message from server
        })
        .catch(error => {
            alert('Error registering patient: ' + error.message);  // Display error message if something goes wrong
        });
    });
});
