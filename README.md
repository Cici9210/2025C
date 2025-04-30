# Shopping Platform

This is a simple shopping platform project built with TypeScript and Express. The project is structured to separate concerns into different layers, including controllers, models, routes, and services.

## Project Structure

```
shopping-platform
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   ├── productController.ts
│   │   └── userController.ts
│   ├── models                # Contains data models
│   │   ├── productModel.ts
│   │   └── userModel.ts
│   ├── routes                # Contains route definitions
│   │   ├── productRoutes.ts
│   │   └── userRoutes.ts
│   ├── services              # Contains business logic
│   │   ├── productService.ts
│   │   └── userService.ts
│   └── types                 # Contains TypeScript type definitions
│       └── index.ts
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Features

- **Product Management**: Fetch all products and get product details by ID.
- **User Management**: Create new users and fetch user details.
- **RESTful API**: The application exposes a RESTful API for product and user management.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd shopping-platform
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Technologies Used

- TypeScript
- Express
- Node.js

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.