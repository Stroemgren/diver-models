"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require('uuid/v4');
exports.Location = (id, name, description, city, country, coordinate, entryType, experienceLevel, locationType, minDepth, maxDepth, images, coverImage) => ({
    id, name, description, city, country, coordinate, entryType, experienceLevel, locationType, minDepth, maxDepth, images, coverImage
});
exports.LocationForm = (name, description, city_id, country_id, latitude, longitude, entryType, experienceLevel, locationType, minDepth, maxDepth) => ({
    name,
    description,
    city_id,
    country_id,
    latitude,
    longitude,
    entryType,
    experienceLevel,
    locationType,
    minDepth,
    maxDepth
});
