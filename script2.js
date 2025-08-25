// Sample bus data for Red Bus, Abhi Bus, and FlixBus
const buses = {
    "Red Bus": [
        {
            busName: 'Red Bus A1',
            departureTime: '06:00 AM',
            arrivalTime: '10:00 AM',
            seatsAvailable: 15
        },
        {
            busName: 'Red Bus B2',
            departureTime: '08:00 AM',
            arrivalTime: '12:00 PM',
            seatsAvailable: 25
        },
        {
            busName: 'Red Bus C3',
            departureTime: '10:00 AM',
            arrivalTime: '02:00 PM',
            seatsAvailable: 10
        }
    ],
    "Intercity Bus": [
        {
            busName: 'Intercity Bus X1',
            departureTime: '07:00 AM',
            arrivalTime: '11:00 AM',
            seatsAvailable: 20
        },
        {
            busName: 'Intercity Bus Y2',
            departureTime: '09:00 AM',
            arrivalTime: '01:00 PM',
            seatsAvailable: 30
        },
        {
            busName: 'Intercity Bus Z3',
            departureTime: '11:00 AM',
            arrivalTime: '03:00 PM',
            seatsAvailable: 5
        }
    ],
    "Flix Bus": [
        {
            busName: 'FlixBus A',
            departureTime: '05:00 AM',
            arrivalTime: '09:00 AM',
            seatsAvailable: 10
        },
        {
            busName: 'FlixBus B',
            departureTime: '07:30 AM',
            arrivalTime: '11:30 AM',
            seatsAvailable: 20
        },
        {
            busName: 'FlixBus C',
            departureTime: '09:30 AM',
            arrivalTime: '01:30 PM',
            seatsAvailable: 15
        }
    ]
};

// Function to display bus details dynamically for each company
function displayBuses() {
    const companies = ['Red Bus', 'Intercity Bus', 'Flix Bus'];
    
    companies.forEach(company => {
        const companyTable = document.getElementById(`${company.toLowerCase().replace(" ", "-")}-table`);
        buses[company].forEach(bus => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${bus.busName}</td>
                <td>${bus.departureTime}</td>
                <td>${bus.arrivalTime}</td>
                <td>${bus.seatsAvailable}</td>
            `;
            companyTable.appendChild(row);
        });
    });
}

// Call the displayBuses function when the page loads
window.onload = displayBuses;
