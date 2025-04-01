document.addEventListener('DOMContentLoaded', () => {
    const serverInput = document.getElementById('server-input');
    const checkButton = document.getElementById('check-button');
    const resultsDiv = document.getElementById('results');

    checkButton.addEventListener('click', checkServerHealth);
    serverInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkServerHealth();
        }
    });

    function checkServerHealth() {
        const inputValue = serverInput.value.trim();
        if (!inputValue) {
            showError('Please enter a valid URL or IP address');
            return;
        }

        // Show loading indicator
        resultsDiv.innerHTML = '<div class="loading">Checking server health</div>';

        // Format the URL correctly
        let url = inputValue;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        // Create a proxy URL to avoid CORS issues
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);

        // Fetch with timeout
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Request timed out')), 10000);
        });

        Promise.race([
            fetch(proxyUrl),
            timeoutPromise
        ])
        .then(response => {
            if (response.ok) {
                showSuccess(`${inputValue} is online!`);
            } else {
                showError(`${inputValue} is offline. Status: ${response.status}`);
            }
        })
        .catch(error => {
            console.error('Error checking server:', error);
            
            // Try alternative ping method if available
            tryPingFallback(url, inputValue);
        });
    }

    function tryPingFallback(url, originalInput) {
        // Create an image with the target URL
        // This is a basic fallback method that works for some URLs
        const img = new Image();
        
        img.onload = () => {
            showSuccess(`${originalInput} is online!`);
        };
        
        img.onerror = () => {
            showError(`${originalInput} appears to be offline.`);
        };
        
        // Set a random parameter to prevent caching
        img.src = url + '/favicon.ico?random=' + Math.random();
        
        // Set a timeout to handle non-responsive servers
        setTimeout(() => {
            if (!img.complete) {
                img.src = '';
                showError(`${originalInput} is not responding.`);
            }
        }, 5000);
    }

    function showSuccess(message) {
        resultsDiv.innerHTML = `
            <p>Result:</p>
            <div class="status online">
                <p>${message}</p>
            </div>
        `;
    }

    function showError(message) {
        resultsDiv.innerHTML = `
            <p>Result:</p>
            <div class="status offline">
                <p>${message}</p>
            </div>
        `;
    }
}); 