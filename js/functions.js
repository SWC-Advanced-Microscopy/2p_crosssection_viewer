


function readDataFromFile(filePath) {
    // Function for reading spectra from csv file
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const xData = [];
            const yData = [];

            lines.forEach(line => {
                const [x, y] = line.split(',');
                xData.push(x);
                    yData.push(parseFloat(y));
                });

                return { x: xData, y: yData };
            })
            .catch(error => {
                console.error('Error fetching data:', error);
        });
}



function readAllFilesIntoStructure(fileDict) {
    const promises = [];

    // Read data from each file and store the promises
    for (const file of files) {
        const promise = readDataFromFile(file.filename)
          .then(data => {
            const trace = {
              x: data.x,
              y: data.y,
              type: 'line',
              name: file.name,
              marker: {
                color: file.color,
                opacity: 0.7,
              }
            };
            return trace;
        });

        promises.push(promise);
    }
    return promises
}


// The following functions define button behavior
function removeAllTraces() {
  // Get the current number of traces
  const numTraces = document.getElementById('chart').data.length;
  // Update the trace visibility individually
  for (let i = 0; i < numTraces; i++) {
    Plotly.restyle('chart', 'visible', 'legendonly', [i]);
  }
}

function showAllTraces() {
  const chart = document.getElementById('chart');
  const numTraces = chart.data.length;
  for (let i = 0; i < numTraces; i++) {
    Plotly.restyle(chart, 'visible', true, [i]);
  }
}

function enableAlexa() {
  const numTraces = document.getElementById('chart').data.length;
  // Create an array of false values with the same length as the number of traces
  const visibility = new Array(numTraces).fill(false);
  // Enable only elements 1 and 3 by setting their corresponding indices to true
  visibility[0] = true;
  visibility[1] = true;
  visibility[2] = true;
  // Update the trace visibility individually
  for (let i = 0; i < numTraces; i++) {
    Plotly.restyle('chart', 'visible', visibility[i], [i]);
  }
}

function enableDrobizhev() {
  const numTraces = document.getElementById('chart').data.length;
  const visibility = new Array(numTraces).fill(false);
  visibility[6] = true;
  visibility[7] = true;
  visibility[8] = true;
  visibility[9] = true;
  visibility[10] = true;
  visibility[11] = true;
  // Update the trace visibility individually
  for (let i = 0; i < numTraces; i++) {
    Plotly.restyle('chart', 'visible', visibility[i], [i]);
  }
}

function enableZipfel() {
  const numTraces = document.getElementById('chart').data.length;
  const visibility = new Array(numTraces).fill(false);
  visibility[0] = true;
  visibility[1] = true;
  visibility[2] = true;
  visibility[3] = true;
  visibility[4] = true;
  visibility[5] = true;
  // Update the trace visibility individually
  for (let i = 0; i < numTraces; i++) {
    Plotly.restyle('chart', 'visible', visibility[i], [i]);
  }
}
