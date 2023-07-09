import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import IconLogo from '../../Assets/leaf-red.png'
import L from 'leaflet'
import '../../index.css'


const Map = () => {
    const position = [43.8436900, 10.5044700]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>


    )
}
const DefaultIcon = L.icon({
    iconUrl: IconLogo,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Map