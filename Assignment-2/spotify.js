const apiUrl = 'https://api.spotify-api.com'; // Hypothetical API URL

// Function to fetch data from the Spotify API
async function fetchData(endpoint, queryParams = '') {
  try {
    const response = await fetch(`${apiUrl}${endpoint}?${queryParams}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Example usage: Fetch popular songs
fetchData('/v1/popular-songs')
  .then(data => {
    console.log('Popular songs:', data);
    // Process the data and display it on the page
  })
  .catch(error => {
    console.error('Error fetching popular songs:', error);
  });

// Example usage: Fetch a specific song
fetchData('/v1/songs/123456789', 'id')
  .then(data => {
    console.log('Song:', data);
    // Process the data and display it on the page
  })
  .catch(error => {
    console.error('Error fetching song:', error);
  });
  // API endpoint

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! Status: ${response.status}');
    }
    return response.json();
  })
  .then(masterplayData => {
    // Process the retrieved masterplay data
    console.log('Masterplay Data:', masterplayData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });