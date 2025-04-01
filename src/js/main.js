document.addEventListener('DOMContentLoaded', () => {
    console.log('Template initialized');
    
    // You can add your JavaScript code here
    const date = new Date();
    document.querySelector('footer p').textContent = `© ${date.getFullYear()} Project Template`;
}); 