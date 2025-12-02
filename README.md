# Hospital Asset Tracking System

basically we're building an asset tracking system for Parkwood Institute. they have a bunch of medical equipment that moves around the hospital and they can't find it half the time. so we're gonna fix that.

## what we're doing

tracking mobile assets like portable medical devices, maintenance equipment, carts etc. that get moved between units. the problem is:
- takes forever to find equipment
- stuff gets lost
- people waste time looking for things
- equipment doesn't get used properly
- higher chance of theft/loss

## requirements (from the project brief)

- tracking methods: RFID, BLE, QR codes, or whatever works
- needs to be easy to use (minimal training)
- privacy and infection prevention stuff
- power management (batteries, maintenance, etc)
- figure out if we should buy something or build it ourselves

## project structure

```
tracking-a/
├── src/                    # frontend stuff (react)
├── software/backend/       # backend API (not built yet)
├── hardware/              # hardware designs
├── firmware/              # firmware code
├── docs/                  # documentation
└── testing/               # tests
```

## setup

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

haven't decided on tech stack yet. probably node.js or python. database TBD.

## other stuff to think about

- privacy (HIPAA/PIPEDA compliance probably)
- infection prevention (sanitization)
- power management (battery life, charging stations)
- keep it simple for staff
- make it work with existing workflows
- don't break the bank

## resources

there's an article about St. Joe's Hamilton doing something similar: https://www.canhealth.com/2025/11/05/st-joes-hamilton-adopts-tech-for-equipment-tracking/

## contributing

this is a student project for Parkwood Institute. we're still figuring stuff out so things might change.
