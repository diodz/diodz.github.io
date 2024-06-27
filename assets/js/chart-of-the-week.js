document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('chartOfTheWeek').getContext('2d');
    
    const years = Array.from({ length: 26 }, (_, i) => 2000 + i);  // Generates an array of years from 2000 to 2025
    const debtData = [
        5.629, 5.769, 6.198, 6.760, 7.379, 7.905, 8.451, 8.950, 9.986, 11.876, 
        13.562, 14.790, 16.066, 16.738, 17.824, 18.151, 19.573, 20.245, 21.516, 
        22.719, 23.524, 24.974, 26.701, 27.748, 29.617, 30.000  // Hypothetical value for 2025
    ];  // Example data: replace these values with actual government debt figures if available
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'US Government Debt (in Trillions USD)',
                data: debtData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Debt in Trillions USD'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
});
