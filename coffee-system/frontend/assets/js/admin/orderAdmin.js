// Order Admin functionality
document.addEventListener('DOMContentLoaded', function() {
    loadOrders();
});

async function loadOrders() {
    // This would fetch orders from API
    const orders = [
        { id: 1, customer: 'John Doe', total: 25.99, status: 'Pending' },
        { id: 2, customer: 'Jane Smith', total: 15.50, status: 'Completed' },
    ];
    displayOrders(orders);
}

function displayOrders(orders) {
    const container = document.querySelector('.orders-admin');
    if (!container) return;

    container.innerHTML = '<table><thead><tr><th>ID</th><th>Customer</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table>';
    const tbody = container.querySelector('tbody');

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>$${order.total}</td>
            <td>${order.status}</td>
            <td>
                <button onclick="updateOrderStatus(${order.id}, 'Completed')">Complete</button>
                <button onclick="viewOrderDetails(${order.id})">View</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updateOrderStatus(orderId, status) {
    // Implement update order status logic
    console.log('Updating order', orderId, 'to status:', status);
    // This would typically make an API call
    loadOrders(); // Refresh the list
}

function viewOrderDetails(orderId) {
    // Implement view order details logic
    console.log('Viewing order details for:', orderId);
}
