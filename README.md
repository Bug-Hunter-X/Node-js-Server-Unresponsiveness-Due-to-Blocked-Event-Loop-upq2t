# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a server can become unresponsive due to blocking the event loop.  The example shows a server that simulates a slow operation, causing delays and potential unresponsiveness.

## Problem

The `bug.js` file contains a simple HTTP server.  The `setTimeout` function within the request handler simulates a long-running operation.  Because the code is synchronous, this blocks the event loop, preventing the server from handling any other requests until the timeout completes.

## Solution

The `bugSolution.js` file demonstrates how to resolve this issue by using asynchronous operations with Promises or async/await.  This allows other requests to be processed concurrently without blocking the event loop.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js`.
3. Send multiple requests to the server (e.g., using `curl` or a browser).
4. Observe that after many requests, it is stuck or unresponsive.
5. Compare it with the solution by running `node bugSolution.js`

