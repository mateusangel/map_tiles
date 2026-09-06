var wms_layers = [];


var lyr_CartoDB__0 = new ol.layer.Tile({
    'title': 'CARTO Voyager',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: '&copy; CARTO &copy; OpenStreetMap contributors',
        url: 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_2yev_1_bf6800eaa510c2b4a2042bd0',
        renderer: 'canvas'
    })
});

lyr_CartoDB__0.setVisible(true);
var layersList = [lyr_CartoDB__0];
