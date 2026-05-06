# Playwright API Automation Framework

API automation framework built using Playwright and TypeScript with a scalable service-based architecture.

## Tech Stack

* Playwright
* TypeScript
* Node.js

---

## Project Structure


src/
 ├── fixtures/
 ├── models/
 ├── services/
 ├── test-data/
 ├── tests/
 └── utils/
```

---

## Features

* API testing using Playwright request context
* Reusable service layer
* Custom Playwright fixtures
* Generic API response handling
* Centralized header management
* Environment variable support
* Dynamic test data generation
* End-to-end CRUD API validation

---

## Current Test Coverage

The framework currently covers:

* Authentication token generation
* Create booking
* Retrieve booking details
* Update booking
* Delete booking
* Validation of deleted booking

---

## Environment Setup

Create a `.env` file in the project root:

```env id="eaz0yl"
USER_NAME=admin
PASSWORD=password123
```

---

## Install Dependencies

```bash id="s4e1ez"
npm install
```

---

## Run Tests

Run all tests:

```bash id="zjlwm1"
npx playwright test
```

Run a specific test file:

```bash id="gjlwm2"
npx playwright test tests/api/booking.spec.ts
```

---

## Framework Design

### Fixtures

Reusable fixtures for:

* Authentication token
* API services

### Services

Service layer abstraction for API operations.

### Models

Reusable TypeScript models for request and response contracts.

### Test Data

Centralized payload generators for reusable test data.

### Utilities

Shared utilities for:

* Common headers
* Auth headers

---

## Planned Improvements

* Base API service abstraction
* Generic GET/POST/PUT/DELETE handlers
* Schema validation
* Reporting integration
* CI/CD pipeline integration
* Request/response logging

---

## Notes

This project is being built incrementally to follow scalable automation framework practices and improve maintainability as the test suite grows.
