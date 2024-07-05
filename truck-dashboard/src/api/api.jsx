import React from "react";

export const getNearbyPlaces = async (
  query,
  lat,
  long,
  limit = 5,
  radius = 10000,
) => {
  const baseUrl = "https://api.tomtom.com/search/2/poiSearch";
  const queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=g9V9sGqvIMdVtmAgA1gjsBcXyV7Qc1gg`;
  const response = await fetch(`${baseUrl}/${query}.json?${queryString}`);
  return response.json();
};
