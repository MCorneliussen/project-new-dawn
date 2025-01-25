# Project New Dawn

Project New Dawn is a modular and beginner-friendly template for building full-stack web applications. It provides a foundation with Express.js, EJS, and Passport.js, enabling developers to quickly get started with authentication, routing, and modular design.

---

## Features

- **Google OAuth Authentication**: Secure login using Google accounts.
- **EJS Templating**: Dynamic and customizable front-end rendering.
- **Error Handling**: Modular error handling middleware with custom 404 and 500 pages.
- **Responsive Design**: Pre-integrated with Bootstrap for mobile-friendly layouts.
- **Modular Structure**: Clean and scalable file organization for maintainability.

---

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/MCorneliussen/project-new-dawn.git
    cd project-new-dawn
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
    SESSION_SECRET=your-session-secret
    ```

4. **Run the App**:
    - Development Mode (with auto-restart):
      ```bash
      npm run dev
      ```
    - Production Mode:
      ```bash
      npm start
      ```

5. **Visit the App**:
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## File Structure

```
project-new-dawn/
├── app.js                  # Main application file
├── package.json            # Project metadata and dependencies
├── .env                    # Environment variables (not included in Git)
├── public/                 # Static files (CSS, images, etc.)
├── routes/                 # Application routes
│   ├── index.js            # General routes (Home, About)
│   ├── auth.js             # Authentication routes (Login, Logout)
│   ├── profile.js          # Profile-related routes
├── middlewares/            # Custom middleware
│   ├── errorHandler.js     # Error handling middleware
│   ├── isAuthenticated.js  # Authentication check middleware
│   ├── passport.js         # Passport.js configuration
├── views/                  # EJS templates
│   ├── pages/              # Full-page views (Home, About, Profile)
│   ├── partials/           # Reusable components (Header, Footer)
│   ├── errors/             # Error pages (404, 500)
└── styles.css              # Custom CSS
```

---

## Dependencies

- [Express.js](https://expressjs.com/): Fast and minimalist web framework.
- [EJS](https://ejs.co/): Simple and powerful templating engine.
- [Passport.js](https://www.passportjs.org/): Authentication middleware for Node.js.
- [Bootstrap](https://getbootstrap.com/): Responsive front-end framework.
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables.
- [Nodemon](https://github.com/remy/nodemon): Development utility for auto-restarting the server.

---

## Hosting

You can host this project on any Node.js-compatible platform. Here are some suggestions:

1. **[Render](https://render.com/)**
   - Free and easy to set up for small projects.
2. **[Heroku](https://www.heroku.com/)**
   - Popular platform for hosting Node.js apps.
3. **[Vercel](https://vercel.com/)**
   - Ideal for serverless deployments.

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or file an issue for suggestions and bug reports.

---

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

