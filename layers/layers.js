var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_daerahkunjir_1 = new ol.format.GeoJSON();
var features_daerahkunjir_1 = format_daerahkunjir_1.readFeatures(json_daerahkunjir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_daerahkunjir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_daerahkunjir_1.addFeatures(features_daerahkunjir_1);
var lyr_daerahkunjir_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_daerahkunjir_1, 
                style: style_daerahkunjir_1,
                interactive: true,
                title: '<img src="styles/legend/daerahkunjir_1.png" /> daerah kunjir'
            });
var format_zonawaspada_2 = new ol.format.GeoJSON();
var features_zonawaspada_2 = format_zonawaspada_2.readFeatures(json_zonawaspada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonawaspada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonawaspada_2.addFeatures(features_zonawaspada_2);
var lyr_zonawaspada_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonawaspada_2, 
                style: style_zonawaspada_2,
                interactive: true,
                title: '<img src="styles/legend/zonawaspada_2.png" /> zona waspada'
            });
var format_sukaraja_3 = new ol.format.GeoJSON();
var features_sukaraja_3 = format_sukaraja_3.readFeatures(json_sukaraja_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sukaraja_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sukaraja_3.addFeatures(features_sukaraja_3);
var lyr_sukaraja_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sukaraja_3, 
                style: style_sukaraja_3,
                interactive: true,
                title: '<img src="styles/legend/sukaraja_3.png" /> sukaraja'
            });
var format_rajabasa_4 = new ol.format.GeoJSON();
var features_rajabasa_4 = format_rajabasa_4.readFeatures(json_rajabasa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rajabasa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rajabasa_4.addFeatures(features_rajabasa_4);
var lyr_rajabasa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rajabasa_4, 
                style: style_rajabasa_4,
                interactive: true,
                title: '<img src="styles/legend/rajabasa_4.png" /> rajabasa'
            });
var format_banding_5 = new ol.format.GeoJSON();
var features_banding_5 = format_banding_5.readFeatures(json_banding_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_banding_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_banding_5.addFeatures(features_banding_5);
var lyr_banding_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_banding_5, 
                style: style_banding_5,
                interactive: true,
                title: '<img src="styles/legend/banding_5.png" /> banding'
            });
var format_canti_6 = new ol.format.GeoJSON();
var features_canti_6 = format_canti_6.readFeatures(json_canti_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canti_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canti_6.addFeatures(features_canti_6);
var lyr_canti_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_canti_6, 
                style: style_canti_6,
                interactive: true,
                title: '<img src="styles/legend/canti_6.png" /> canti'
            });
var format_batubalak_7 = new ol.format.GeoJSON();
var features_batubalak_7 = format_batubalak_7.readFeatures(json_batubalak_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batubalak_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batubalak_7.addFeatures(features_batubalak_7);
var lyr_batubalak_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batubalak_7, 
                style: style_batubalak_7,
                interactive: true,
                title: '<img src="styles/legend/batubalak_7.png" /> batu balak'
            });
var format_waymuli_8 = new ol.format.GeoJSON();
var features_waymuli_8 = format_waymuli_8.readFeatures(json_waymuli_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waymuli_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waymuli_8.addFeatures(features_waymuli_8);
var lyr_waymuli_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waymuli_8, 
                style: style_waymuli_8,
                interactive: true,
                title: '<img src="styles/legend/waymuli_8.png" /> waymuli'
            });
var format_kunyir_9 = new ol.format.GeoJSON();
var features_kunyir_9 = format_kunyir_9.readFeatures(json_kunyir_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kunyir_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kunyir_9.addFeatures(features_kunyir_9);
var lyr_kunyir_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kunyir_9, 
                style: style_kunyir_9,
                interactive: true,
                title: '<img src="styles/legend/kunyir_9.png" /> kunyir'
            });
var format_jalan1_10 = new ol.format.GeoJSON();
var features_jalan1_10 = format_jalan1_10.readFeatures(json_jalan1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan1_10.addFeatures(features_jalan1_10);
var lyr_jalan1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan1_10, 
                style: style_jalan1_10,
                interactive: true,
                title: '<img src="styles/legend/jalan1_10.png" /> jalan 1'
            });
var format_zonabahaya_11 = new ol.format.GeoJSON();
var features_zonabahaya_11 = format_zonabahaya_11.readFeatures(json_zonabahaya_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonabahaya_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonabahaya_11.addFeatures(features_zonabahaya_11);
var lyr_zonabahaya_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonabahaya_11, 
                style: style_zonabahaya_11,
                interactive: true,
                title: '<img src="styles/legend/zonabahaya_11.png" /> zona bahaya'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_daerahkunjir_1.setVisible(true);lyr_zonawaspada_2.setVisible(true);lyr_sukaraja_3.setVisible(true);lyr_rajabasa_4.setVisible(true);lyr_banding_5.setVisible(true);lyr_canti_6.setVisible(true);lyr_batubalak_7.setVisible(true);lyr_waymuli_8.setVisible(true);lyr_kunyir_9.setVisible(true);lyr_jalan1_10.setVisible(true);lyr_zonabahaya_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_daerahkunjir_1,lyr_zonawaspada_2,lyr_sukaraja_3,lyr_rajabasa_4,lyr_banding_5,lyr_canti_6,lyr_batubalak_7,lyr_waymuli_8,lyr_kunyir_9,lyr_jalan1_10,lyr_zonabahaya_11];
lyr_daerahkunjir_1.set('fieldAliases', {'id': 'id', });
lyr_zonawaspada_2.set('fieldAliases', {'id': 'id', 'detail': 'detail', });
lyr_sukaraja_3.set('fieldAliases', {'id': 'id', 'DETAIL': 'DETAIL', });
lyr_rajabasa_4.set('fieldAliases', {'id': 'id', 'DETAIL': 'DETAIL', });
lyr_banding_5.set('fieldAliases', {'id': 'id', 'DETAIL': 'DETAIL', });
lyr_canti_6.set('fieldAliases', {'id': 'id', 'DETAIL': 'DETAIL', });
lyr_batubalak_7.set('fieldAliases', {'id': 'id', 'DETAIL': 'DETAIL', });
lyr_waymuli_8.set('fieldAliases', {'id': 'id', 'detail': 'detail', });
lyr_kunyir_9.set('fieldAliases', {'id': 'id', 'detail': 'detail', });
lyr_jalan1_10.set('fieldAliases', {'id': 'id', });
lyr_zonabahaya_11.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_daerahkunjir_1.set('fieldImages', {'id': 'TextEdit', });
lyr_zonawaspada_2.set('fieldImages', {'id': 'TextEdit', 'detail': 'TextEdit', });
lyr_sukaraja_3.set('fieldImages', {'id': 'TextEdit', 'DETAIL': '', });
lyr_rajabasa_4.set('fieldImages', {'id': 'TextEdit', 'DETAIL': '', });
lyr_banding_5.set('fieldImages', {'id': 'TextEdit', 'DETAIL': '', });
lyr_canti_6.set('fieldImages', {'id': 'TextEdit', 'DETAIL': '', });
lyr_batubalak_7.set('fieldImages', {'id': 'TextEdit', 'DETAIL': '', });
lyr_waymuli_8.set('fieldImages', {'id': 'TextEdit', 'detail': '', });
lyr_kunyir_9.set('fieldImages', {'id': 'TextEdit', 'detail': '', });
lyr_jalan1_10.set('fieldImages', {'id': '', });
lyr_zonabahaya_11.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_daerahkunjir_1.set('fieldLabels', {'id': 'no label', });
lyr_zonawaspada_2.set('fieldLabels', {'id': 'no label', 'detail': 'no label', });
lyr_sukaraja_3.set('fieldLabels', {'id': 'no label', 'DETAIL': 'no label', });
lyr_rajabasa_4.set('fieldLabels', {'id': 'no label', 'DETAIL': 'no label', });
lyr_banding_5.set('fieldLabels', {'id': 'no label', 'DETAIL': 'no label', });
lyr_canti_6.set('fieldLabels', {'id': 'no label', 'DETAIL': 'no label', });
lyr_batubalak_7.set('fieldLabels', {'id': 'no label', 'DETAIL': 'no label', });
lyr_waymuli_8.set('fieldLabels', {'id': 'no label', 'detail': 'no label', });
lyr_kunyir_9.set('fieldLabels', {'id': 'no label', 'detail': 'no label', });
lyr_jalan1_10.set('fieldLabels', {'id': 'no label', });
lyr_zonabahaya_11.set('fieldLabels', {'id': 'no label', 'keterangan': 'no label', });
lyr_zonabahaya_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});