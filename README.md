# Docker + GitHub Actions Project Template

A complete project template with a simple HTML frontend, Docker setup, and GitHub Actions CI/CD configured with a self-hosted runner.

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # GitHub Actions workflow
├── src/                      # Frontend source files
│   ├── css/
│   │   └── style.css         # CSS styles
│   ├── js/
│   │   └── main.js           # JavaScript code
│   └── index.html            # Main HTML file
├── Dockerfile                # Docker configuration
├── docker-compose.yml        # Docker Compose configuration
└── README.md                 # Project documentation
```

## Features

- Simple HTML/CSS/JS frontend
- Dockerized environment using Nginx
- GitHub Actions workflow for CI/CD using a self-hosted runner

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- GitHub account with a self-hosted runner configured

### Local Development

1. Clone this repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Start the development environment:
   ```
   docker-compose up -d
   ```

3. Access the website at http://localhost:8080

4. Make changes to the files in the `src` directory - they will be automatically reflected thanks to the volume mapping.

### CI/CD Pipeline

The GitHub Actions workflow in `.github/workflows/ci-cd.yml` will:

1. Build the Docker image
2. Run basic tests (can be expanded)
3. Deploy the application when pushed to main/master branch

## Customizing

- Modify the HTML/CSS/JS in the `src` directory
- Update the Dockerfile if you need different dependencies
- Adjust the GitHub Actions workflow for your specific deployment needs

## License

MIT 