Hospital Asset Tracking System

this is the repo for asset tracking system for Parkwood Institute. they have medical equipment that moves around the hospital and they can't find it

we are:

tracking mobile assets like portable medical devices, maintenance equipment, carts etc. that get moved between units. 
- takes time to find equipment
- people waste time looking for things
- higher chance of theft/loss

requirements from the project brief

- tracking methods: RFID, BLE, QR codes etc
- ease of use so no onboarding friction
- privacy and infection prevention 
- power management (batteries, maintenance, etc)
- find out if we should buy something or build it ourselves

 project structure

```
tracking-a/
├── src/                    # frontend stuff (react)
├── software/backend/       # backend API (not built yet)
├── hardware/              # hardware designs
├── firmware/              # firmware code
├── docs/                  # documentation
└── testing/               # tests
```

setup

you need node.js and npm installed

```bash
npm install
npm run dev
```

runs on localhost:3000

## backend

we need to build a backend that does:
- gets data from tracking devices (RFID, BLE, QR codes)
- tracks locations in real time
- manage assets (add/edit/delete)
- user auth
- analytics and reports
- integrate with hospital systems maybe

haven't decided on tech stack yet. probably node.js or java. database TBD.

## other stuff to think about

- privacy 
- power management (battery life, charging stations)
- make it work with existing workflow
- inexpensive

resources

https://www.canhealth.com/2025/11/05/st-joes-hamilton-adopts-tech-for-equipment-tracking/

## contributing

this is a student project for Parkwood Institute. we're still figuring stuff out so things might change.
