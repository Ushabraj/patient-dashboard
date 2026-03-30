const ctx = document.getElementById('bpChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Oct 2025', 'Nov 2025', 'Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026'],
        datasets: [
            {
                label: 'Systolic',
                data: [120, 140, 135, 150, 145, 160],
                borderColor: '#8e44ad',
                backgroundColor: 'transparent',
                tension: 0.4
            },
            {
                label: 'Diastolic',
                data: [70, 75, 72, 80, 78, 85],
                borderColor: '#3498db',
                backgroundColor: 'transparent',
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    }
});