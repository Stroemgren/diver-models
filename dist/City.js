"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require('uuid/v4');
exports.City = (id, name) => ({
    id, name
});
exports.CityForm = (name, country_id) => ({
    name, country_id
});
