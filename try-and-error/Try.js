const categories = ['HOMICIDE', 'THEFT/OTHER', 'ROBBERY', 'MOTOR VEHICLE THEFT', 'ASSAULT W/DANGEROUS WEAPON', 'BURGLARY', 'THEFT F/AUTO'];

const fetchCrimeData = async () => {
  try {
    const response = await fetch(
      'https://maps2.dcgis.dc.gov/dcgis/rest/services/FEEDS/MPD/MapServer/8/query?where=REPORT_DAT > CURRENT_TIMESTAMP - INTERVAL \'30 days\'&outFields=OFFENSE,REPORT_DAT&f=json'
    );
    const data = await response.json();

    // Filter the fetched data to include only relevant categories
    const filteredData = data.features.filter(feature => categories.includes(feature.attributes.OFFENSE));

    // Perform analysis and generate insights
    generateInsights(filteredData);
  } catch (error) {
    console.error('Error fetching crime data:', error);
  }
};

const generateInsights = (data) => {
  // Analyze the data to determine if the number of offenses has increased for each offense category
  const offenseCounts = categories.reduce((counts, category) => {
    counts[category] = data.filter(feature => feature.attributes.OFFENSE === category).length;
    return counts;
  }, {});

  // Generate insights and preventive measures for each offense category
  categories.forEach(category => {
    const currentCount = offenseCounts[category];
    // You can compare the current count with the count from the previous period to determine if it has increased
    // For demonstration purposes, let's assume the count from the previous period is known
    const previousCount = 50; // Example count from the previous period

    // Generate insights
    const hasIncreased = currentCount > previousCount;
    const insight = hasIncreased ? `The number of ${category} offenses has increased in the last 30 days.` : `The number of ${category} offenses has not increased in the last 30 days.`;

    // Generate preventive measures
    let preventiveMeasure = '';
    switch (category) {
      case 'HOMICIDE':
        preventiveMeasure = 'Stay aware of your surroundings and avoid dangerous areas, especially at night.';
        break;
      case 'THEFT/OTHER':
        preventiveMeasure = 'Keep valuables secure and out of sight, and be cautious of pickpockets in crowded areas.';
        break;
      // Add preventive measures for other offense categories
      default:
        preventiveMeasure = 'Take appropriate precautions to minimize the risk of becoming a victim of this type of offense.';
    }

    // Output insights and preventive measures
    console.log(`${insight} Preventive measure: ${preventiveMeasure}`);
  });
};

// Fetch crime data and generate insights

console.log(fetchCrimeData())