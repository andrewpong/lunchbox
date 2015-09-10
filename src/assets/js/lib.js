function loadJson(file) {
  // Create new promise with the Promise() constructor;
  // This has as its argument a function
  // with two parameters, resolve and reject
  return new Promise(function(resolve, reject) {
    // Standard XHR to load the JSON file
    let xhr = new XMLHttpRequest();

    // let path = '/director/SystemServices/main?system:getResource=plugins/indicators/com.pge.gasops.director.indicators.incident_form/assets/js/data/';
    let path = '/assets/data/';
    xhr.open('GET', url + file);
    xhr.responseType = 'json';

    // When the xhr loads, check whether it was successful
    xhr.onload = function() {
      if (xhr.status === 200) {
        // If successful, resolve the promise by passing back the xhr response
        resolve(xhr.response);
      } else {
        // If it fails, reject the promise with a error message
        reject(Error('JSON didn\'t load successfully; error code:' + xhr.statusText));
      }
    };

    xhr.onerror = function() {
      // Also deal with the case when the entire xhr fails to begin with
      // This is probably a network error, so reject the promise with an appropriate message
      reject(Error('There was a network error.'));
    };

    // Send the xhr
    xhr.send();
  });
}

function getId(field) {
  var elementId = '#ui-' + incidentForm.guid + '-' + field;
  return elementId;
}

function setSelectOptions(field, json) {
  return new Promise(function(resolve, reject) {
    let response;
    response.element = document.getElementById(getId(field));
    response.options = {};
    response.count = 0;

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    if (Array.isArray(json)) {
      $.each(json, function(index, value) {
        options += '<option value="' + value.toLowerCase() + '">' + value + '</option>';
      });

      count = json.length;
    } else {
      $.each(json, function(key, value) {
        options += '<option value="' + value.toLowerCase() + '">' + value + '</option>';
      });

      count = objectLength(json);
    }

    if (options.count > 0)
    {
      element.append(options);
      resolve(response);
    } else {
      reject(Error('There was a network error.'));
    }

  });
}

function logger(message) {
  if (debug) {
    console.log(message);
  }
}

export function populateDropdown(field, file) {
  loadJson(file).then(response => {
    logger(`lib.js loadJson OK: ${response}.`);
    var json = JSON.parse(response);
    setSelectOptions(field, json).then(response => {
      logger(`lib.js setSelectOptions OK: ${response.select} populated with ${response.count} items.`);
    }, Error => {

      logger(`lib.js setSelectOptions ERROR: ${Error}`);
    });
  }, Error => {

    logger(`lib.js loadJson ERROR: ${Error}`);
  });
}
