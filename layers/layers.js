var wms_layers = [];


        var lyr_CartoDB__0 = new ol.layer.Tile({
            'title': 'CartoDB_',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

lyr_CartoDB__0.setVisible(true);
var layersList = [lyr_CartoDB__0];
