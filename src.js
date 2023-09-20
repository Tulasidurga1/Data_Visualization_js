const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Monthly Sales',
        backgroundColor: 'orange',
        borderColor: 'blue',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
    }],
};

// Chart configuration
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    },
};

// Create the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);

// Add interactivity (e.g., tooltip) using Chart.js built-in features
myChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Sales: ${context.parsed.y}`;
        },
    },
};
