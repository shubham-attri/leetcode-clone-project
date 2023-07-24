# Leetcode Clone Project
This is a Leetcode clone I built using React, NextJS, TypeScript, TailwindCSS, and Firebase.

## Features
User authentication with Firebase <br>
Home page listing coding challenges <br>
Challenge details page with problem statement<br>
Code editor to write solution<br>
Test cases to validate solution<br>
Submit solution button<br>

## Tech Stack<br>
NextJS - Framework for server-side rendered React apps<br>
React - Frontend library for building user interfaces<br>
TypeScript - Typed superset of JavaScript<br>
TailwindCSS - Utility-first CSS framework for styling<br>
Firebase - Backend-as-a-service for authentication, database, storage etc<br>
## Walkthrough
The homepage fetches coding challenges from Firestore and displays them in a grid layout. Each challenge links to the details page.<br>
The details page shows the problem statement and has a code editor component powered by Monaco Editor.<br>
Users can write and test their solution locally using the provided test cases.
The submit solution button saves the code to Firestore and shows if it passed all tests.<br>
The leaderboard page fetches top solutions for each challenge from Firestore and displays them in a table.<br>
User authentication is handled by Firebase. New users can sign up and existing users can login/logout.<br>
## What I Learned
Implementing authentication with Firebase<br>
Passing data between pages with NextJS routing<br>
Local state management with React Hooks<br>
Styling responsive layouts with TailwindCSS<br>
Writing strongly typed React components with TypeScript<br>
Monaco editor integration and executing code safely<br>
Validating solutions using provided test cases<br>
Storing and retrieving data from Firestore<br>