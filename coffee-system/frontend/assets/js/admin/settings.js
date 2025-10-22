// Settings functionality
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();

    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveSettings();
        });
    }
});

function loadSettings() {
    // This would fetch current settings from API
    const settings = {
        storeName: 'Coffee System',
        openingHours: '9:00 AM - 9:00 PM',
        contactEmail: 'info@coffeesystem.com',
        taxRate: 8.5
    };
    displaySettings(settings);
}

function displaySettings(settings) {
    const container = document.querySelector('.settings');
    if (!container) return;

    container.innerHTML = `
        <form id="settings-form">
            <label for="storeName">Store Name:</label>
            <input type="text" id="storeName" value="${settings.storeName}" required><br>

            <label for="openingHours">Opening Hours:</label>
            <input type="text" id="openingHours" value="${settings.openingHours}" required><br>

            <label for="contactEmail">Contact Email:</label>
            <input type="email" id="contactEmail" value="${settings.contactEmail}" required><br>

            <label for="taxRate">Tax Rate (%):</label>
            <input type="number" id="taxRate" value="${settings.taxRate}" step="0.1" required><br>

            <button type="submit">Save Settings</button>
        </form>
    `;
}

function saveSettings() {
    const settings = {
        storeName: document.getElementById('storeName').value,
        openingHours: document.getElementById('openingHours').value,
        contactEmail: document.getElementById('contactEmail').value,
        taxRate: parseFloat(document.getElementById('taxRate').value)
    };

    // This would save settings via API
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
}
