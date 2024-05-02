# URL Shortener Application

This is a simple URL shortener application built using Next.js, TypeScript, and Prisma. It allows users to shorten long URLs into shorter, more manageable links.

## Features

- Shorten long URLs into short, unique links.
- Redirect users from short links to their original URLs.
- Store URLs and their corresponding short links in a PostgreSQL database.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **Prisma**: A modern database toolkit for TypeScript and Node.js that simplifies database access with type safety and auto-generated queries.

## WorkFlow

![Screenshot 2024-05-02 134832](https://github.com/SandipGyawali/Url-Shortner/assets/66510112/c34298d3-c80e-4691-9e55-7197eee0d46e)

## Client View

![image](https://github.com/SandipGyawali/Url-Shortner/assets/66510112/d05a242a-e07e-465d-87d3-ea4c3b03e0b4)

![image](https://github.com/SandipGyawali/Url-Shortner/assets/66510112/96e60642-5a42-48fc-b881-1c990bc0bc90)

![image](https://github.com/SandipGyawali/Url-Shortner/assets/66510112/1186e75e-e639-4c23-b711-166cdb57d5d6)

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. Clone this repository:

    ```
    git clone https://github.com/your-username/url-shortener.git
    ```

2. Navigate to the project directory:

    ```
    cd url-shortener
    ```

3. Install dependencies:

    ```
    npm install
    # or
    yarn install
    ```

4. Set up your PostgreSQL database and update the database connection settings in `.env` file.

5. Run database migrations:

    ```
    npx prisma migrate dev
    ```

### Usage

To start the development server, run:

