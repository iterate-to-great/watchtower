# Watchtower

A frontend application for displaying UK crime data with interactive visualizations and detailed analytics.

## About

Watchtower is a Next.js-based web application that provides an intuitive interface for exploring and analyzing UK crime statistics. The application presents crime data in an accessible format, helping users understand crime patterns and trends across different regions of the United Kingdom.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**: React 19 with Tailwind CSS 4
- **Package Manager**: Yarn
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- Yarn 1.22.x or higher

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Run the development server:
```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint to check code quality
- `yarn test` - Run all tests
- `yarn test:watch` - Run tests in watch mode

## Development
- Test Driven Development (Please write a unit test and an end-to-end test)
- Trunk Based Development (Please create a pull request for each ticket)

### CI/CD

The project uses GitHub Actions for continuous integration:
- Runs on every push to `main`
- Runs on all pull requests
- Executes tests, linting, and builds to ensure code quality

All checks must pass before merging pull requests.

## Testing

Tests are located alongside the components they test (e.g., `app/page.test.tsx`).

To run tests:
```bash
# Run all tests once
yarn test

# Run tests in watch mode (recommended during development)
yarn test:watch
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/{ticket-number}-AmazingFeature`)
3. Run tests and linting before committing:
```bash
yarn test
yarn lint
```
4. Commit your changes (`git commit -m 'Add some AmazingFeature iterate-to-great/watchtower/#{ticket-number}'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request (Please add the ticket number in the description e.g. `Make a big change iterate-to-great/watchtower/#{ticket-number}`)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

See [LICENSE](LICENSE) file for details.
