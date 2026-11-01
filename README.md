# AeroRadar ✈️ - Professional Aviation Search Engine & Live Flight Radar

A high-performance, real-time aviation search engine and flight radar inspired by modern Online Travel Agencies (OTAs) like **Go Zayaan**. Powered by the **Aviationstack API**, AeroRadar provides instantaneous global flight tracking, departure/arrival metrics, terminal gates, baggage claim carousels, and live interactive radar mapping.

---

## 🌟 Key Features

- 🔍 **Multi-Parameter Search Engine**:
  - **By Airport Route**: Direct `FROM` and `TO` airport search with 3-letter IATA codes and animated swap button.
  - **By Flight Number**: Instant lookups by IATA/ICAO flight code (e.g. `EK585`, `BG201`, `SQ308`, `BS145`).
  - **By Airline**: Search by commercial carrier name (Emirates, Biman Bangladesh, Singapore Airlines, Qatar Airways).
  - **Live Airborne Radar**: Direct 1-click filter for active aircraft in transit worldwide.
- 🌐 **Instant Bilingual Support (English & Bangla)**:
  - English by default with a single-click `[ EN | বাং ]` toggle that translates the entire UI seamlessly without reloading.
- 📱 **100% Fully Responsive**:
  - Ergonomically optimized for mobile phones (bottom-sheet modal, swipeable tabs, touch-friendly touch targets), tablets, and desktop displays.
- 🗺️ **Interactive Radar Map**:
  - Powered by **Leaflet.js** and **CartoDB Voyager** light tiles.
  - Plots departure airport, arrival airport, dashed flight trajectory, and live aircraft position marker with real-time heading orientation.
- ⚡ **Quota Preservation & Client Caching**:
  - Implements smart in-browser caching (`sessionStorage`) to preserve monthly API quota limits.
  - Built-in resilient fallback simulation buffer ensures zero downtime.

---

## 🚀 Live on GitHub Pages Setup (2-Click Deployment)

This repository is **100% ready for GitHub Pages**:
1. Push this code to your GitHub repository (e.g. `main` branch).
2. Go to your repository on GitHub:
   - Click **Settings** ➔ **Pages** (in the left sidebar).
   - Under **Build and deployment** ➔ **Source**: Choose **Deploy from a branch**.
   - Under **Branch**: Select `main` and folder `/ (root)`, then click **Save**.
3. In ~60 seconds, your site will be live at:
   ```
   https://<your-username>.github.io/<your-repository-name>/
   ```

---

## 💻 Local Development Setup

To run locally with the optional Node.js server:
```bash
# Clone your repository
git clone https://github.com/<your-username>/<your-repository-name>.git
cd <your-repository-name>

# Install dependencies
npm install

# Start the server
npm start
```
Then open `http://localhost:3005` in your browser.
