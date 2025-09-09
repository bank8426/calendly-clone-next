<h3 align="center">Calendly Clone</h3>

## Table of Contents

1. [Introduction](#introduction) /
2. [Note](#note) /
3. [Demo](#demo) /
4. [Tech Stack](#tech-stack) /
5. [Features](#features) /
6. [Quick Start](#quick-start) /
7. [What I learned](#learn)
8. [Implementation Notes](#implementation-notes)

## <a name="introduction">Introduction</a>

Full-stack Calendly clone allow you to create availability schedule and events to let other user booking your time based on your availability schedule and events in Google Calendar with shareable profile and event link.

## <a name="note">⚠️ Note</a>

This project was implemented based on a tutorial video on YouTube from freeCodeCamp [Build a Calendly Clone – Full Stack Next.js, Typescript, React, Tailwind](https://www.youtube.com/watch?v=cCuvlQvU1eg).

Good project idea, tech stack, folder structure and many good basic stuff that i don't know. But this one seem like not for beginners and even I who know what going to do next or which file will create or look into I still got some trouble. Since code usually comeout of nowhere by copy and paste(Maybe ChatGPT) with no code styling at all(No `Prettier` or any code formatter or even manual code formatting) which mess up code indentation and screen will move up and down based on pasting code and then jump around give some code explanation and then continue to import missing module/functions/components and if that missing part is not implemented yet then continue to implement it and left current code not runnable until whole part is implemented which make it hard to debug in the end not like pair programming or TDD or normal way that you write code and test it step by step so you know current state of the part you are working on.

The code styling issue and screen jump cause me to lost track of code position and scope several times. And sometime i cant see entire code in video, So for `ScheduleForm.tsx` and some other files, i need to copy some part of it from github repo instead. And i also got some issue about timezone on business logic when run the project on `Vercel` which make me notice that there is some implementation issue. And for AI-generated code from video, there also code that work but not optimized, 3-level nested `return` in `getValidTimesFromSchedule()` , unnecessary nested 1 line function,and etc. I only fix some of them which can be see in [Implementation Notes](#implementation-note) section. This project teach me to be more careful if later on I rely more on AI.

## <a name="demo">Demo</a>

Click on each section to toggle demo image

<details>
  <summary>
    Authentication
  </summary>
  <div>
    <b>Sign up</b>
    <a href="">
        <img src="public/readme/sign-up.gif" alt="Sign up" />
    </a>
    <b>Sign in</b>
    <a href="">
      <img src="public/readme/sign-in.gif" alt="Sign in" />
    </a>
  </div>
</details>
<details>
  <summary>
    Authenticated User
  </summary>
  <div>
    <b>Create Availability Schedule</b>
    <div>
      <a href="">
        <img src="public/readme/create-schedule.gif" alt="Create schedule" />
      </a>
    </div>
    <b>Create Active Event</b>
    <div>
      <a href="">
        <img src="public/readme/create-active-event.gif" alt="Create active event" />
      </a>
    </div>
    <b>Create Inactive Event</b>
    <div>
      <a href="">
        <img src="public/readme/create-inactive-event.gif" alt="Create inactive event" />
      </a>
    </div>
    <b>Edit Event</b>
    <div>
      <a href="">
        <img src="public/readme/edit-event.gif" alt="Edit event" />
      </a>
    </div>
    <b>Delete Event</b>
    <div>
      <a href="">
        <img src="public/readme/delete-event.gif" alt="Delete event" />
      </a>
    </div>
  </div>
</details>

<details>
  <summary>
    Non-Authenticated User
  </summary>
  <div>
    <b>See Public profile from Profile's Link</b>    
    <div>
      <a href="">
        <img src="public/readme/public-profile.gif" alt="Public profile" />
      </a>
    </div>
    <b>Booking Event from Event's link</b>
    <div>
      <a href="">
        <img src="public/readme/see-and-book-event.gif" alt="See and book event" />
      </a>
    </div>
    <b>Invitation Email</b>
    <div>
      <a href="">
        <img src="public/readme/invitation-email.png" alt="Invitation Email" />
      </a>
    </div>
    <b>Google Calendar after accept invitation</b>
    <div>
      <a href="">
        <img src="public/readme/after-book-event.png" alt="See and book event" />
      </a>
    </div>
    <b>Available time slot will updated according to events in Google Calendar</b>
    <div>
      <a href="">
        <img src="public/readme/google-calendar.png" alt="Google Calendar" />
      </a>
    </div>
  </div>
</details>

## <a name="tech-stack">Tech Stack</a>

- Next.js - React framework for full-stack web application development
- React - JavaScript library
- TypeScript - JavaScript superset for type safety
- Tailwind CSS v4 - CSS framework
- Clerk - Authentication middleware, pre-built UI components for user authentication and themes
- Neon - PostgresSQL database cloud service
- Drizzle - ORM for SQL databases
- Vercel - Cloud platform to host this project
- Shadcn UI - components library that provides pre-built UI components code and let you customize it. In this project we use it for Button, Card, Form, Input, Textarea, Switch, AlertDialog, Sonner (Toast but different name), Select
- Lucide React - Icon library for React
- tw-animate-css - Collection of utilities classes for Tailwind CSS animations
- react-hook-form - Custom React hook for form validation, form state management, and form submission
- Zod v4 - Schema-based validation and data parsing
- @hookform/resolvers - Form validation resolver when using external validation library like `zod` in this project
- react-loading-indicators - Collection of React components for displaying loading state
- googleapis - Google APIs Node.js Client library to access Google Calendar APIs
- date-fns - Utility functions library for `Date` in JavaScript
- date-fns-tz - Time zone support functions for `date-fns`

## <a name="features">Features</a>

- Sign up/sign in with Google Account
- Google Calendar Integration
- Timezone Support when create availability schedule and booking event
- Create/Edit/Delete Event
- Shareable Profile and Event Link
- Responsive Design

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

1. Create a new file named `.env` and copy the content inside `.env.example`
2. Replace the placeholder values with your actual credentials

```env
# create new clerk application https://clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/events
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/events

# create new database https://neon.com/
DATABASE_URL=

# https://developers.google.com/workspace/calendar/api/quickstart/js
# search APIs & Services -> Google Calendar API https://console.cloud.google.com/
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
# create new clerk application https://clerk.com/
GOOGLE_OAUTH_REDIRECT_URL=
```

### Running the Project

```bash
npm run dev
```

Your server will run on [http://localhost:3000](http://localhost:3000/)

## <a name="learn">What I learned</a>

`JavaScript`

- `Object.groupBy` - is a method that let you group array of objects or iterable thing by callback function similar to `_.groupBy` in `Lodash`. This method is available from `Node v21`. But since i still using `Node v20` then it casue `groupBy is not a function` error. So i need to update Node to latest version to make it work. My bad🙈.

`JavaScript Web APIs`

- `navigator.clipboard.writeText("sometext")` - is a method that let you copy text to clipboard.

- `Intl.supportedValuesOf(key)` - is a method that let you get sorted array of supported values related to `Intl` object (Internationalization) based on `key` parameter which can be one of the following:

  - "calendar": see supported calendar types
  - "collation": see supported collation types
  - "currency": see supported currency identifiers
  - "numberingSystem": see supported numbering system types
  - "timeZone": see supported time zone identifiers
  - "unit": see supported unit identifiers

```js
//Example
console.log(Intl.supportedValuesOf("timeZone"));

//['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers' ... , 'Pacific/Wallis']
```

`React`

- `useTransition` - is a `hook` that let you track pending state of an action(or async function) that is called in React. Just like when you manually handle loading state in React with `useEffect` and `useState`.

```js
//Example
const [isPending, startTransition] = useTransition();

return (
  <Form {...form}>
   ... // form fields
    <Button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          try {
            await deleteEvent(event.id);
            router.push("/events");
          } catch (error: any) {
            form.setError("root", {
            message: `There was an error deleting your event: ${error.message}`,
          });
        }
      })}}
    >
      Delete
    </Button>
    ... // form fields
  </Form>
)
```

- `asChild` - is a `prop` that make React render `child` component with defined classes from `parent` component without render `parent` component. In this project it use to render `Link` component with defined classes from `Button` component.

```js
//Example
<CardFooter className="flex justify-end gap-2 mt-auto">
  <Button
    className="cursor-pointer hover:scale-105 bg-blue-400 hover:bg-blue-600"
    asChild
  >
    <Link href={`/book/${clerkUserId}/${id}`}>Select</Link>
  </Button>
</CardFooter>
```

- You can see that it has only `a` tag without parent `button` tag. And all classes from `Button` component will be applied to `a` tag.

<div>
  <a href="">
    <img src="public/readme/as-child.png" alt="asChild component" />
  </a>
</div>

`Next`

- `revalidatePath` - is a `Server Functions` that let you to invalidate cached data of specific path. And make it fetch data again next time it is requested.

`zod`

- `superRefine` - is a `method` similar to `refine` which let you to add additional validation logic to a schema. It is similar to `refine` but it can return multiple issues("error messages") at once.

`React Hook Form`

- `useFieldArray` - is a custom `hook` for an array field or field in `form` that can have multiple values/items. So it will give you methods to manage that field Ex. `append`, `remove` methods to add or remove `availability` item in schedule form. You can see more in [docs](https://react-hook-form.com/docs/usefieldarray)

`Github`

- To merge latest (n) commit into one commit and push( Ex. 22 commits for my case)

```js
git reset --soft HEAD~22
git commit
git push --force-with-lease origin <branch-name>
```

- This happen since I need to debug timezone issue on Vercel,So I push code many times and make my repo got unnecessary commit history. So I want to merge those latest (n) commit into one commit instead. And there are many ways to do it. You can see more in https://stackoverflow.com/questions/5189560/how-do-i-squash-my-last-n-commits-together

<div>
  <a href="">
    <img src="public/readme/debug-commit.png" alt="debug commit" />
  </a>
</div>

## <a name="implementation-note">Implementation Notes</a>

- `Next`

  - Error `NEXT_REDIRECT` when call `redirect()` in `try/catch/finally` block of `Server Actions`
    - This error happen because its something that should not do since `behavior` of `redirect` function is to throw `next.js error code` that will catch by next.js and handle redirect for us. (see more in [docs](https://nextjs.org/docs/app/api-reference/functions/redirect#behavior))
    - There are 2 ways to resolve this issue
      1. on `Server Actions`, Call `redirect` outside the `try/catch/finally` block
      2. on `Client Components`, Use `useRouter` hook and call `router.push(<path>)` to redirect instead after `Server Action` complete( We use this method )

- `regex`

  - Incorrect regex in Time format of `HH:MM`(Should be `mm` for `minute`) for availabilities in `scheduleFormSchema` since we try to validate time format to have leading zero with regex `/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/`

  <div>
    <a href="">
      <img src="public/readme/regex.png" alt="regex" />
    </a>
  </div>

  - But if we test that regex with `9:15` ,it will pass which is in correct based on the code comment. This happen because of first `[0-9]|` make one digit number for `hour` to pass.

  <div>
    <a href="">
      <img src="public/readme/regex-test.png" alt="regex" />
    </a>
  </div>

  - But since default value of `Availability.startTime` in `ScheduleForm` is `9:00` which contradicts with what planning to validate. But i think it easier for user to input hour without leading zero. So i left it as it is and just update error message.

  ```js
  z.object({
    dayOfWeek: z.enum(DAYS_OF_WEEK_IN_ORDER),
    startTime: z
      .string()
      .regex(
        /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        "Time must be in the format H:mm or HH:mm"
      ),
    endTime: z
      .string()
      .regex(
        /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        "Time must be in the format H:mm or HH:mm"
      ),
  });
  ```

- Timezone issue when deploy on Vercel

  - When i test on my local, it work as expected. But when i deployed on Vercel, I got exception error `Selected time is not valid` in `Vercel's Logs` which mean that somehow user 's input `startTime` is not available anymore even the form allow you to select it and there is not conflict events in Google Calendar. I know it about timezone for sure but it still take a while to debug where the issue come from.
  <div>
    <a href="">
      <img src="public/readme/timezone-issue.png" alt="timezone issue" />
    </a>
  </div>

  When i debugged, i found that `startTime` is not match with `availabilities` in `schedule` because it got parsed into `different` date. So i try to parse it back as you can see in `zoneDate` in the image below which give same date as `startTime` but it still not match with `availabilities` in `schedule`.

  <div>
    <a href="">
      <img src="public/readme/timezone-issue-debug.png" alt="timezone issue debug" />
    </a>
  </div>

  But in the end i found that it happen because of we try to `convert UTC date to UTC date again` on `startTime` in `createMeeting` . And try to reconvert it back in `getAvailabilities` . Since `startTime` is already in UTC date, we should not convert it again. How do you know it is `UTC date`? You can check it in date format which is `YYYY-MM-DDTHH:mm:ss.sssZ` as `T` in middle and `Z` at the end without timezone offset.

  <div>
    <a href="">
      <img src="public/readme/timezone-issue-date.png" alt="timezone issue date" />
    </a>
  </div>

  So this issue cause by miss conversion of `startTime` in 2 functions `createMeeting` and `getAvailabilities` . You can see full code commit in https://github.com/bank8426/calendly-clone-next/commit/6eebea5f1572dc34fdebc1fafebbddb8eb9998df

  - For summary

    1. `createMeeting` - `don't need` to convert `startTime` to UTC date. Since it already is and Google Calendar also use `UTC date`. Convert it again also cause Google Calendar to booking event with wrong time.

    <div>
      <a href="">
        <img src="public/readme/timezone-issue-fixed-meeting.png" alt="timezone issue fixed" />
      </a>
    </div>

    2. `getAvailabilities` - `need` to convert `startTime` to `availability schedule owner timezone` to be able to compare it with `availabilities` in `schedule`. And then convert calculated result to `UTC date`.

    <div>
      <a href="">
        <img src="public/readme/timezone-issue-fixed-availabilities.png" alt="timezone issue fixed" />
      </a>
    </div>

- Zod v4

  - Email field

  ```js
  z.string().email(); //deprecated
  z.email(); //recommended
  ```

  - Merge schema

  ```js
  // .merge() (deprecated)
  z.object(schemaA).merge(schemaB);
  // .extend(schemaB.shape) (recommended and don't forgot `.shape`)
  z.object(schemaA).extend(schemaB.shape);
  ```

- Shadcn
  - `Calendar` component
    - `initialFocus`❌ props deprecated. Use `autoFocus`✅ instead
