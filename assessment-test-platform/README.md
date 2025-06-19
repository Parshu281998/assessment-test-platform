# Assessment Test Platform

## Overview
The Assessment Test Platform is a web application designed to facilitate online assessments. It tracks student activity, including tab switching, and automatically displays results after the test. Students can start the test directly via a link without the need for registration or login.

## Features
- **Tab Switching Tracking**: Monitors when students switch tabs during the test to ensure focus and integrity.
- **Automatic Results Display**: Results are displayed immediately after the test is completed.
- **Direct Test Access**: Students can begin the test using a unique link, eliminating the need for a registration or login process.

## Project Structure
```
assessment-test-platform
├── src
│   ├── app.ts                # Entry point of the application
│   ├── components
│   │   ├── TestTracker.ts    # Monitors tab switching events
│   │   ├── ResultsDisplay.ts  # Handles presentation of test results
│   │   └── TestStarter.ts     # Manages initiation of the test
│   ├── utils
│   │   └── index.ts          # Utility functions
│   ├── routes
│   │   └── index.ts          # API routes definition
│   └── types
│       └── index.ts          # Data structure interfaces
├── package.json               # npm configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd assessment-test-platform
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage Guidelines
- To start a test, use the unique link provided by the application.
- Ensure that you remain focused on the test page to avoid any tracking issues.
- After completing the test, your results will be displayed automatically.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.