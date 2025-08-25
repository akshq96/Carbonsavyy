function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function updateFuelOptions() {
    const fuelTypeSelect = document.getElementById('fuelType');
    const vehicleType = document.getElementById('vehicleType').value;

    fuelTypeSelect.innerHTML = '<option value="">Select Fuel Type</option>';

    if (vehicleType === "car" || vehicleType === "motorcycle") {
        fuelTypeSelect.innerHTML += '<option value="petrol">Petrol</option><option value="diesel">Diesel</option><option value="electric">Electric</option>';
    } else if (vehicleType === "truck") {
        fuelTypeSelect.innerHTML += '<option value="diesel">Diesel</option>';
    } else if (vehicleType === "bus") {
        fuelTypeSelect.innerHTML += '<option value="diesel">Diesel</option><option value="electric">Electric</option>';
    }
}

function updateEstimatedFuelEfficiency() {
    const vehicleType = document.getElementById('vehicleType').value;
    const fuelType = document.getElementById('fuelType').value;
    const fuelEfficiencyInput = document.getElementById('fuelEfficiency');

    if (fuelType === 'electric') {
        fuelEfficiencyInput.placeholder = 'Enter kWh/km for electric vehicle';
    } else {
        fuelEfficiencyInput.placeholder = 'Enter km/l for fuel vehicle';
    }
}

function handleUnknownEfficiency() {
    const unknownCheckbox = document.getElementById('unknownEfficiency');
    const fuelEfficiencyInput = document.getElementById('fuelEfficiency');
    
    if (unknownCheckbox.checked) {
        fuelEfficiencyInput.disabled = true;
        fuelEfficiencyInput.value = '';
    } else {
        fuelEfficiencyInput.disabled = false;
    }
}

function calculateEmissions() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    const fuelType = document.getElementById('fuelType').value;

    let emissionFactor;

    if (fuelType === "petrol") {
        emissionFactor = 2.31;
    } else if (fuelType === "diesel") {
        emissionFactor = 2.68;
    } else if (fuelType === "electric") {
        emissionFactor = 0.5;
    }

    const emissions = ((distance / fuelEfficiency) * emissionFactor).toFixed(2);
    document.getElementById('emissionOutput').innerText = 
        `Your trip emitted approximately ${emissions} kg of CO₂.`;
    
    generateOffer(emissions);
}

function generateOffer(emissions) {
    const offerOutput = document.getElementById('offerOutput');
    let offerMessage;

    if (emissions < 50) {
        offerMessage = "Congratulations! You qualify for a 20% discount on your next eco-friendly purchase!";
    } else if (emissions < 100) {
        offerMessage = "Good effort! You get a 10% discount on sustainable products.";
    } else {
        offerMessage = "Consider greener options! Get 5% off on energy-saving products.";
    }

    offerOutput.innerText = offerMessage;
}
const offers = [
    {
        threshold: 10, // Emissions below 10 kg CO2
        message: "Great job! Your emissions are minimal. Check out our electric bikes for even more eco-friendly travel!"
    },
    {
        threshold: 50, // Emissions between 10 and 50 kg CO2
        message: "You're doing good! Consider a hybrid or electric vehicle to cut emissions further. Get a 10% discount on EVs!"
    },
    {
        threshold: 100, // Emissions between 50 and 100 kg CO2
        message: "You could make a big difference by switching to green energy. Enjoy discounts on solar-powered EV chargers!"
    },
    {
        threshold: Infinity, // Emissions above 100 kg CO2
        message: "High emissions detected! Take advantage of our exclusive rebates on electric vehicles and green energy solutions."
    }
];
function calculateEmissions() {
    const distance = parseFloat(document.getElementById("distance").value);
    const fuelEfficiency = parseFloat(document.getElementById("fuelEfficiency").value);

    if (isNaN(distance) || isNaN(fuelEfficiency) || fuelEfficiency <= 0) {
        alert("Please enter valid values for distance and fuel efficiency.");
        return;
    }

    const emissionPerLiter = 2.31; // Example: CO2 emission factor for petrol in kg/l
    const emissions = distance / fuelEfficiency * emissionPerLiter;

    // Update emission result
    document.getElementById("emissionOutput").textContent = 
        `Your trip produced approximately ${emissions.toFixed(2)} kg of CO₂ emissions.`;

    // Generate personalized offer
    const offerMessage = generateOffer(emissions);
    document.getElementById("offerOutput").textContent = offerMessage;
}

function generateOffer(emissions) {
    for (let offer of offers) {
        if (emissions <= offer.threshold) {
            return offer.message;
        }
    }
    return "Thank you for using EcoDrive! Consider eco-friendly products to reduce your impact further.";
}
// Function to show a section based on its ID
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to switch to the Signup section
function showSignup() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.remove('hidden');
}

// Function to switch to the Login section
function showLogin() {
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}
function showForgotPassword() {
    hideAllSections();
    document.getElementById("forgotPassword").classList.remove("hidden");
}

function showLogin() {
    hideAllSections();
    document.getElementById("login").classList.remove("hidden");
}
// Function to hide all sections
function hideAllSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
}

function findTravelOptions() {
    // Get input values
    const location = document.getElementById('location').value;
    const destination = document.getElementById('destination').value;
    const travelDate = document.getElementById('travelDate').value;

    // Validate input
    if (!location || !destination || !travelDate) {
        alert('Please fill in all the fields.');
        return;
    }

    // Show results (placeholder logic for now)
    const travelResults = document.getElementById('travelResults');
    travelResults.innerHTML = `
        <h3>Available Travel Options</h3>
        <p>From: ${location}</p>
        <p>To: ${destination}</p>
        <p>Date: ${travelDate}</p>
        <p>We are currently fetching travel options for you. Please stay tuned!</p>
    `;
    travelResults.classList.remove('hidden');
}
// Autofill the form with popular route data
function fillRoute(start, destination) {
    document.getElementById('location').value = start;
    document.getElementById('destination').value = destination;
}

// Scroll to the travel form when "Book Now" is clicked
function scrollToForm() {
    document.getElementById('travelForm').scrollIntoView({ behavior: 'smooth' });
}

// Search functionality placeholder
function findTravelOptions() {
    const travelType = document.getElementById('travelType').value;
    const location = document.getElementById('location').value;
    const destination = document.getElementById('destination').value;
    const travelDate = document.getElementById('travelDate').value;

    if (!location || !destination || !travelDate) {
        alert('Please fill in all the fields.');
        return;
    }

    alert(`Searching for ${travelType} options from ${location} to ${destination} on ${travelDate}.`);
}
