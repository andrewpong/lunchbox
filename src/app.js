let incidentForm = {}
incidentForm.guid = 'abcdefg';
import { populateDropdown } from 'lib.js';
populateDropdown(incidentForm.guid, 'id', 'cities.json');
