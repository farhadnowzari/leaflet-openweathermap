
import * as L from './leaflet-openweathermap';

declare module 'leaflet' {

    namespace OWM {
        
        interface Clouds extends L.TileLayer {} 
        function clouds(options?): Clouds;

        interface CloudsClassic extends L.TileLayer {} 
        function cloudsClassic(options?): CloudsClassic;

        interface Precipitation extends L.TileLayer {} 
        function precipitation(options?): Precipitation;

        interface PrecipitationClassic extends L.TileLayer {} 
        function precipitationClassic(options?): PrecipitationClassic;

        interface Rain extends L.TileLayer {} 
        function rain(options?): Rain;

        interface RainClassic extends L.TileLayer {} 
        function rainClassic(options?): RainClassic;

        interface Snow extends L.TileLayer {} 
        function snow(options?): Snow;

        interface Pressure extends L.TileLayer {} 
        function pressure(options?): Pressure;

        interface PressureContour extends L.TileLayer {} 
        function pressureContour(options?): PressureContour;

        interface Temperature extends L.TileLayer {} 
        function temperature(options?): Temperature;

        interface Wind extends L.TileLayer {} 
        function wind(options?): Wind;

    }
}