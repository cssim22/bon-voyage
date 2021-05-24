const result = {
  "results": [
      {
          "address_components": [
              {
                  "long_name": "Mountain View",
                  "short_name": "Mountain View",
                  "types": [
                      "locality",
                      "political"
                  ]
              },
              {
                  "long_name": "Santa Clara County",
                  "short_name": "Santa Clara County",
                  "types": [
                      "administrative_area_level_2",
                      "political"
                  ]
              },
              {
                  "long_name": "California",
                  "short_name": "CA",
                  "types": [
                      "administrative_area_level_1",
                      "political"
                  ]
              },
              {
                  "long_name": "United States",
                  "short_name": "US",
                  "types": [
                      "country",
                      "political"
                  ]
              }
          ],
          "formatted_address": "Mountain View, CA, USA",
          "geometry": {
              "bounds": {
                  "northeast": {
                      "lat": 37.469887,
                      "lng": -122.0446721
                  },
                  "southwest": {
                      "lat": 37.3567832,
                      "lng": -122.1178619
                  }
              },
              "location": {
                  "lat": 37.3860517,
                  "lng": -122.0838511
              },
              "location_type": "APPROXIMATE",
              "viewport": {
                  "northeast": {
                      "lat": 37.469887,
                      "lng": -122.0446721
                  },
                  "southwest": {
                      "lat": 37.3567832,
                      "lng": -122.1178619
                  }
              }
          },
          "place_id": "ChIJiQHsW0m3j4ARm69rRkrUF3w",
          "types": [
              "locality",
              "political"
          ]
      }
  ],
  "status": "OK"
}

console.log(result.results[0].geometry.location)