# Dashboard App

This project is a dashboard application built with Next.js and Vanilla.js that allows users to search for terms within a specified date range. The application provides a user-friendly interface for selecting start and end dates, and displays search term data in a structured table format.

## Features

- **Date Range Picker**: Users can select a start date and an end date for their search queries.
- **Search Terms Table**: Displays a table with the following columns:
  - Type
  - Search Term
  - Search Quantity
  - Increase Compared to Previous Week (Count and Percentage)
  - Decrease Compared to Previous Week (Count and Percentage)

## Project Structure

```
dashboard-app
├── src
│   ├── pages
│   │   ├── index.js
│   │   └── _app.js
│   ├── components
│   │   ├── DateRangePicker.js
│   │   └── SearchTermsTable.js
│   ├── styles
│   │   └── globals.css
│   └── utils
│       └── data.js
├── public
│   └── favicon.ico
├── package.json
├── next.config.js
└── README.md
```

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd dashboard-app
npm install
```

## Usage

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.# dashboard
