# nodejs-logger-api

**Archived.** The Logger API for **CyberSmart** — a smart-home IoT system developed as a University Group Project. Package name: `cybersmart-logger-api`. Centralized logging service for the CyberSmart microservice suite.

## About CyberSmart

CyberSmart is a low-cost, low-resource, eco-friendly smart-home system built on a suite of independent Node.js microservices and Raspberry Pi hardware. A central **hub** (Raspberry Pi 3 Model B) runs the microservices backend and talks to lightweight **nodes** (Raspberry Pi Zero, running Jessie Pixel Headless) over a RESTful protocol.

## What this repo is

An Express + MongoDB service that:

- Accepts log events (CRUD) from the other CyberSmart services + nodes
- Persists log entries in MongoDB with timestamp + service origin
- Exposes a simple query API for retrieving logs by time range / service / level

Every CyberSmart microservice + node posts to this API to avoid scattered log files across the network.

## Tech stack

- **Node.js** + **Express**
- **Mongoose** (MongoDB)
- **bluebird**, **body-parser**, **compression**, **cors**

## Structure

```
server.js           # Express app entry
Routes/             # HTTP endpoints (CRUD on log entries)
Handlers/           # Business logic
Models/             # Mongoose schemas (LogEntry)
```

## Running

```bash
npm install
node server.js
```

Needs MongoDB running.

## Related repositories

The CyberSmart ecosystem:

- [`cybersmart-ui`](https://github.com/gitpancake/cybersmart-ui) — React frontend
- [`cybersmart-devices-api`](https://github.com/gitpancake/cybersmart-devices-api) — Express API for managing devices
- [`cybersmart-users-api`](https://github.com/gitpancake/cybersmart-users-api) — user management API (bcrypt + passport-jwt)
- [`cybersmart-locations-api`](https://github.com/gitpancake/cybersmart-locations-api) — API for managing locations within the home
- [`cybersmart-device-state-updating-api`](https://github.com/gitpancake/cybersmart-device-state-updating-api) — state-management API
- [`cybersmart-gpio-node`](https://github.com/gitpancake/cybersmart-gpio-node) — the node software that runs on each Raspberry Pi
