# Express.js Route Parameter Type Error

This repository demonstrates a common error in Express.js applications related to handling route parameters.  Specifically, it shows how failing to validate the type of a parameter can lead to unexpected errors and application crashes.  A solution is also provided.

## Bug

The `bug.js` file contains an Express.js route that fetches user data based on an ID passed as a route parameter.  The bug lies in the absence of input validation. If a non-numeric ID is provided, the application will crash because the database query will fail due to a type mismatch. 

## Solution

The `bugSolution.js` file presents a corrected version of the route.  It now includes input validation to ensure the route parameter is a number before proceeding with the database query. This prevents the application from crashing due to type errors. 