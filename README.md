⚠️ ... in progress ... ⚠️

<h3 align="center">Calendly Clone</h3>

## ⚠️ Note

This project was implemented based on a tutorial video on YouTube from freeCodeCamp [Build a Calendly Clone – Full Stack Next.js, Typescript, React, Tailwind](https://www.youtube.com/watch?v=cCuvlQvU1eg).

## Table of Contents

1. [Introduction](#introduction)
2. [Demo](#demo)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Quick Start](#quick-start)
6. [What I learned](#learn)
7. [Implementation Notes](#note)

## <a name="introduction">Introduction</a>

TODO

## <a name="demo">Demo</a>

TODO

### Sign in

<a href="">
  <img src="public/readme/sign-in.png" alt="Sign in" />
</a>

### Sign up

<a href="">
  <img src="public/readme/sign-up.png" alt="Sign up" />
</a>

<!-- Authen user -->
<!-- Create event then Copy Link -->
<!-- Create inactive event then no one shold see it in public profile -->

<!-- Edit event -->

<!-- Delete event -->

<!-- Add availability in schedule then add overlap availability in same day  -->

<!-- Public profile then copy profile url -->

<!-- Not authen user -->

<!-- Public Profile -->

## <a name="tech-stack">Tech Stack</a>

- Next.js - React framework for full-stack web application development
- React - JavaScript library
- TypeScript - JavaScript superset for type safety
- Tailwind CSS v4 - CSS framework
- Clerk - Authentication middleware, pre-built UI components for user authentication and themes
- Neon - PostgresSQL database cloud service
- Drizzle - ORM for SQL databases
- Shadcn UI - components library that provides pre-built UI components code and let you customize it. In this project we use it for Button, Card, Form, Input, Textarea, Switch, AlertDialog, Sonner (Toast but different name), Select
- Lucide React - Icon library for React
- tw-animate-css - Collection of utilities classes for Tailwind CSS animations
- react-hook-form - Custom React hook for form validation, form state management, and form submission
- zod - Schema-based validation and data parsing
- @hookform/resolvers - Form validation resolver when using external validation library like `zod` in this project
- react-loading-indicators - Collection of React components for displaying loading state

## <a name="features">Features</a>

TODO

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Git
- Node.js
- npm

### Cloning the Repository

```bash
git clone https://github.com/bank8426/calendly-clone-next.git
cd calendly-clone-next
```

### Installation

Go inside the backend folder and install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

1. Create a new file named `.env.development.local` and copy the content inside `.env.example`
2. Replace the placeholder values with your actual credentials

```env
TODO
```

### Running the Project

```bash
npm run dev
```

Your server will run on [http://localhost:3000](http://localhost:3000/)

## <a name="learn">What I learned</a>

TODO
JS

- navigator.clipboard.writeText("sometext")

- Intl.supportedValuesOf()

React

- useTransition

- asChild

Next

- revalidatePath

zod

- superRefine

React Hook Form

- useFieldArray

## <a name="note">Implementation Notes</a>

TODO

- Next

  - NEXT_REDIRECT error when redirect in try cath

    - In Server Actions and Route Handlers, redirect should be called `outside` the try block when using try/catch statements. https://nextjs.org/docs/app/api-reference/functions/redirect#behavior

- Incorrect regex in Time format HH:MM
  `/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/` make `9:15` pass which should not
