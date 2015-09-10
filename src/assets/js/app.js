
import {populateDropdown} from 'lib.js';
populateDropdown('http://www.example.com', data => {
  doSomethingUseful(data);
});

let incidentModule = {};

(function() {
  let o1 = {};
  let o2 = {};
  const server = 'server';

  let promiseCount = 0;

  incidentModule.populateDropdowns = function() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    var p1 = new Promise(

          function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');

            // This only is an example to create asynchronism
            window.setTimeout(
                  function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                  }, Math.random() * 2000 + 1000);
          });

    // We define what to do when the promise is fulfilled
    // but we only call this if the promise is resolved/fulfilled
    p1.then(

        // Just log the message and a value
          function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
          })
      .catch(

          // Rejected promises are passed on by Promise.prototype.then(onFulfilled)
          function(reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
          });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
  };

  incidentModule.initIncidentForm = function(guid, id) {
    let _this = this;
    _this[guid] = {
      id: id,
    };
    console.log(this);
    return _this;
  };

  // incidentModule.populateDropdowns = function(guid) {
  //
  // };

  incidentModule.initIncidentForm('833ab4e4e7754127b44c33f90133734d', 19208);
  incidentModule.initIncidentForm('s33ab4e4e7754127b44c33f901323251', 3461);
})();
