let clickTimeout = null;
const container = document.getElementById('architectureContainer');
const centerHub = document.getElementById('centerHub');
const ticker = document.getElementById('ticker');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const quoteModal = document.getElementById('quoteModal');
const outerNodes = document.querySelectorAll('.outer-node');
// 1. Single Click on Center Hub opens matrix layout
centerHub.addEventListener('click', () => {
clearTimeout(clickTimeout);
clickTimeout = setTimeout(() => {
container.classList.add('show-nodes');
ticker.innerHTML = "SELECT AN ACTIVE SYSTEM SECURITY ARCHITECTURE MODULE TO COMMENCE STRUCTURAL SCOPING REVIEW";
}, 250);
});
// 2. Double Click on Center Hub resets system matrix and triggers form modal
centerHub.addEventListener('dblclick', () => {
clearTimeout(clickTimeout);
container.classList.remove('show-nodes');
outerNodes.forEach(node => node.classList.remove('active-red'));
toggleModal(true);
});
// 3. Handle outer node click events to route text descriptions
outerNodes.forEach(node => {
node.addEventListener('click', function() {
outerNodes.forEach(n => n.classList.remove('active-red'));
this.classList.add('active-red');
ticker.innerHTML = this.getAttribute('data-info');
});
});
// 4. Modal Visibility Controllers
openModalBtn.addEventListener('click', () => toggleModal(true));
closeModalBtn.addEventListener('click', () => toggleModal(false));
function toggleModal(shouldOpen) {
if (shouldOpen) {
quoteModal.classList.add('show-modal');
} else {
quoteModal.classList.remove('show-modal');
}
}
// 5. DIRECT PRIVATE GOOGLE RUNTIME TRANSMISSION GATEWAY
document.getElementById('mspQuoteForm').addEventListener('submit', async function(e) {
e.preventDefault();
const submitButton = this.querySelector('.submit-btn');
submitButton.innerText = "COMMENCING CYBER TRANSMISSION...";
submitButton.disabled = true;
const formData = {
companyName: document.getElementById('companyName').value,
email: document.getElementById('email').value,
staffCount: document.getElementById('staffCount').value,
endpointCount: document.getElementById('endpointCount').value,
infraVector: document.getElementById('infraVector').value,
compliance: document.getElementById('compliance').value
};
// !!! PASTE YOUR UNIQUE GOOGLE WEB APP MACRO EXECUTION URL LINK HERE !!!
const googleEndpointURL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
try {
const response = await fetch(googleEndpointURL, {
method: "POST",
mode: "cors",
headers: { "Content-Type": "text/plain" },
body: JSON.stringify(formData)
});
const result = await response.json();
if (result.result === "success") {
alert('Post-Profile Telemetry Submitted! JaiSys Engineering has logged your architectural scope profile.');
toggleModal(false);
this.reset();
} else {
alert('Transmission logic failure. Please contact desk at operations@jaisys.com');
}
} catch (error) {
console.error('Data Network Exception Event:', error);
alert('Transmission timeout. Please email parameters manually to info@jaisys.com');
} finally {
submitButton.innerText = "SUBMIT SCOPE FOR QUOTE";
submitButton.disabled = false;
}
});

document.getElementById('mspQuoteForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Gather values from the input fields
    const formData = {
        company: document.getElementById('companyName').value,
        email: document.getElementById('email').value,
        staff: document.getElementById('staffCount').value,
        endpoints: document.getElementById('endpointCount').value,
        infrastructure: document.getElementById('infraVector').value,
        compliance: document.getElementById('compliance').value,
        timestamp: new Date().toISOString()
    };

    // Replace this string with your real webhook URL from Make or Zapier
    const webhookURL = "https://your-webhook-router-link.com";

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('Security Telemetry Submitted! JaiSys Engineering will review your scope.');
            toggleModal(false);
            this.reset();
        }
    } catch (error) {
        console.error('Pipeline Error:', error);
        alert('Network transmission error. Please contact sales@jaisys.com directly.');
    }
});
