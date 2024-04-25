const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/register-patient', (req, res) => {
    const { firstName, lastName, id, bedId, gender, doctorAssigned, phoneNumber, dateOfAdmission, dob, address } = req.body;

    console.log("Received registration data:", req.body);

    const patientRecord = {
        firstName,
        lastName,
        id,
        bedId,
        gender,
        doctorAssigned,
        phoneNumber,
        dateOfAdmission,
        dob,
        address
    };

    res.json({ message: 'Patient registered successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
