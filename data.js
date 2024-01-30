// API endpoint for crime data
const apiEndpoint = "https://maps2.dcgis.dc.gov/dcgis/rest/services/FEEDS/MPD/MapServer/8/query?where=1%3D1&outFields=REPORT_DAT,SHIFT,METHOD,OFFENSE,BLOCK,XBLOCK,YBLOCK,WARD,ANC,DISTRICT,PSA,NEIGHBORHOOD_CLUSTER,BLOCK_GROUP,CENSUS_TRACT,VOTING_PRECINCT,LATITUDE,LONGITUDE,BID&outSR=4326&f=json";

// Function to fetch crime data from the API
async function fetchCrimeData() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data.features.map(feature => feature.attributes);
  } catch (error) {
    console.error("Error fetching crime data:", error);
    return [];
  }
}

// Function to count occurrences of each offense type
function countOffenses(data) {
  const offenseCounts = {};

  data.forEach(record => {
    const offenseType = record.OFFENSE;

    if (offenseCounts[offenseType]) {
      offenseCounts[offenseType]++;
    } else {
      offenseCounts[offenseType] = 1;
    }
  });

  return offenseCounts;
}

const crimeData =  fetchCrimeData();

// Perform analysis
const offensesCount = countOffenses(crimeData);

// Display the results
console.log("Offenses Count:", offensesCount);