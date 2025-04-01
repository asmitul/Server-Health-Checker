# Server Health Checker

A simple web application to check if a server or website is online.

## Features

- Check if a website or IP address is online
- Clean, responsive UI
- Works with both domain names and IP addresses
- Fast response time

## How to Use

1. Open `index.html` in any modern web browser
2. Enter a website URL or IP address in the input field (e.g., `google.com` or `8.8.8.8`)
3. Click the "Check Health" button or press Enter
4. View the results indicating whether the server is online or offline

## Technical Details

- Uses a CORS proxy (allorigins.win) to make cross-origin requests
- Implements a fallback method using image loading for more accurate results
- Sets timeouts to handle non-responsive servers
- Pure HTML, CSS, and JavaScript (no dependencies required)

## Limitations

- The CORS proxy may have rate limits
- Some websites may block requests from proxies
- For IP addresses, the check may not be 100% accurate due to browser security restrictions

## License

MIT 