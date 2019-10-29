"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require('uuid/v4');
exports.City = (id, name) => ({
    id, name
});
exports.CityForm = (name, country_id) => ({
    id: 'ci_' + uuidv4(), name, country_id
});
