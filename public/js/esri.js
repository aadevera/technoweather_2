require(['esri/config', 'esri/Map', 'esri/views/MapView'], function (
  esriConfig,
  Map,
  MapView
) {
  esriConfig.apiKey =
    'AAPK7f02540e7b6e45cc9e791579f3f28159GqIxpM5yPpD_yse5fz744Nj_8J3_cfjBe2_6pnImc1dZbvA4DyUl49Y37SIxKwQT';

  const map = new Map({
    basemap: 'satellite', // basemap styles service
  });

  const view = new MapView({
    map: map,
    center: [123, 11], // Longitude, latitude
    zoom: 6, // Zoom level
    container: 'viewDiv', // Div element
  });
});
