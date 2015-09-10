const debug = true;

function loadJson(file) {
  // Create new promise with the Promise() constructor;
  // This has as its argument a function
  // with two parameters, resolve and reject
  return new Promise(function(resolve, reject) {
    // Standard XHR to load the JSON file
    // let path = '/director/SystemServices/main?system:getResource=plugins/indicators/com.pge.gasops.director.indicators.incident_form/assets/js/data/';
    const path = '/assets/data/';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', path + file);
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

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

function getFieldId(guid, field) {
  var elementId = 'ui-' + guid + '-' + field;
  return elementId;
}

function setSelectOptions(guid, field, options) {
  return new Promise(function(resolve, reject) {
    let select = {};
    select.element = document.getElementById(getFieldId(guid, field));
    select.options = new Map();

    while (select.element.firstChild) {
      select.element.removeChild(select.element.firstChild);
    }

    if (Array.isArray(options)) {
      Array.prototype.forEach.call(options, function(index, value) {
        let element = document.createElement('option');
        element.value = value;
        element.text = value;
        select.options.set(value, element);
      });
    } else {
      for (let [key, value] of entries(options)) {
        let element = document.createElement('option');
        element.value = value;
        element.text = value;
        select.options.set(value, element);
      }
    }

    logger(select.options);

    if (select.options.size > 0)
    {
      logger(select.count);
      logger(select.options);
      for (var [key, value] of select.options) {
        select.element.appendChild(value);
      }

      resolve(select);

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

export function populateDropdown(guid, field, file) {
  loadJson(file).then(response => {
    logger(`lib.js loadJson OK: ${response}.`);
    logger(response);
    // let json = JSON.parse(response);
    setSelectOptions(guid, field, response).then(response => {
      logger(`lib.js setSelectOptions OK: ${response.select} populated with ${response.count} items.`);
    }, Error => {

      logger(`lib.js setSelectOptions ERROR: ${Error}`);
    });
  }, Error => {

    logger(`lib.js loadJson ERROR: ${Error}`);
  });
}

console.log('is this thing on?');
