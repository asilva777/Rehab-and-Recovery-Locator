# 🇵🇭 Rehab & Recovery Locator – Philippines

An interactive web-based map locator for drug rehabilitation and recovery centers across the Philippines. This tool enables users to **search**, **filter**, and **view** government and private treatment facilities by **region**, **province**, or **city** using a friendly and responsive interface built with [Leaflet.js](https://leafletjs.com/).

---

## 🌐 Live Demo

To use the map, simply open the `locator.html` file in any modern web browser.

---

## 📦 Features

✅ Interactive map with location markers  
✅ Popup info window for each rehab center (name, address, contact, email, validity)  
✅ Real-time filtering by Region, Province, or City  
✅ Mobile-friendly design  
✅ Lightweight, fast, and no server needed

---

## 🗂️ Project Structure

/project-folder
│
├── locator.html # Main HTML file with embedded Leaflet.js map and data
└── README.md # This documentation file

yaml
Copy
Edit

---

## 🛠️ How to Use

1. Clone or download this repository.
2. Open `locator.html` in any web browser.
3. Use the search inputs to filter the map based on your location needs.

---

## 🗺️ Add More Centers

To add more rehab centers, insert new entries into the `rehabCenters` array inside the `<script>` section of `locator.html`:

```javascript
{
  region: "Central Luzon",
  province: "Bataan",
  city: "Pilar",
  name: "DOH-Treatment and Rehabilitation Center Bataan",
  address: "Batangas III, Brgy. Liyang, Pilar",
  director: "Dr. Elizabeth Serrano",
  capacity: "200 (Male & Female)",
  ownership: "GO",
  modality: "Therapeutic Community",
  contact: "0999-5190930",
  email: "dohtrcbataan@yahoo.com",
  validity: "01/01/2022 - 12/31/2024",
  lat: 14.6725,
  lng: 120.5361
}
Use Google Maps to get the correct latitude and longitude for each new facility.

📌 Dependencies
Leaflet.js – for rendering the interactive map

OpenStreetMap – for map tiles

📖 License
This project is released under the MIT License. Feel free to reuse, modify, and adapt the code with attribution.

🙋 Contact & Contributions
If you want to contribute or request features (e.g., Excel upload, App version, database integration), feel free to reach out.

Developer: Cognitio+
Email: hello@cognitioplus.com
