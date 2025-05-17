<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Philippines Rehab Center Locator</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    #map { height: 100vh; }
  </style>
</head>
<body>
  <div id="map"></div>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script>
    const map = L.map('map').setView([12.8797, 121.7740], 6); // Philippines center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Load JSON data
    fetch('rehab_centers.json')
      .then(res => res.json())
      .then(data => {
        data.forEach(center => {
          if (center.Latitude && center.Longitude) {
            L.marker([parseFloat(center.Latitude), parseFloat(center.Longitude)])
              .addTo(map)
              .bindPopup(`<strong>${center["Name"]}</strong><br>${center["Address"]}`);
          }
        });
      });
  </script>
</body>
</html>
