import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/styles/map.css';


import parkIcon from '../assets/Icones/park.svg';
import gymIcon from '../assets/Icones/location.svg';
import compazIcon from '../assets/Icones/location-_1_.svg';
import myIcon from '../assets/Icones/gps.png';

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const maxSuggestions = 3;
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const initMap = () => {
      const leafletMap = L.map('map',{ zoomControl: false }).setView([-8.05428, -34.8813], 15,);
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {}).addTo(leafletMap);
      setMap(leafletMap);
    };

    initMap();
  }, []);

  useEffect(() => {
    if (map) {
      const parkMarker = L.icon({
        iconUrl: parkIcon,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
      });

      const compazMarker = L.icon({
        iconUrl: compazIcon,
        iconSize: [35, 35],
        iconAnchor: [17.5, 35],
        popupAnchor: [0, -35]
      });

      const gymMarker = L.icon({
        iconUrl: gymIcon,
        iconSize: [35, 35],
        iconAnchor: [17.5, 35],
        popupAnchor: [0, -35]
      });

      const gpsIcon = L.icon({
        iconUrl: myIcon,
        iconSize: [40, 40],
        iconAnchor: [17.5, 35],
        popupAnchor: [0, -35]
      })
      
      const markers = [];

      fetch('http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=18e58d3b-8096-4bac-bc18-273bacd7d01c&limit=70000')
        .then(response => response.json())
        .then(data => {
          data.result.records.forEach(record => {
            const tipo_equip_urbano = record.tipo_equip_urbano;
            if (tipo_equip_urbano === 'Parque') {
              const latitude = parseFloat(record.latitude);
              const longitude = parseFloat(record.longitude);
              const name = record.nome_oficial_equip_urbano;

              const marker = L.marker([latitude, longitude], { icon: parkMarker }).addTo(map);
              marker.bindPopup(name + `<br><a class='centered-link' href='https://www.google.com/maps/search/${latitude},${longitude}/'>Ver rota</a>`);

              markers.push({
                id: record.id,
                name: name,
                latitude: latitude,
                longitude: longitude,
                marker: marker
              });
            }
          });

          setLocations(markers);
        })
        .catch(error => {
          console.error('Erro ao carregar os dados da API Praças e Parques:', error);
        });

      fetch('http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=e774a0fd-730f-4636-a5da-161ea8beff5a')
        .then(response => response.json())
        .then(data => {
          data.result.records.forEach(record => {
            const latitude = parseFloat(record.latitude);
            const longitude = parseFloat(record.longitude);
            const name = record.nome;

            const marker = L.marker([latitude, longitude], { icon: compazMarker }).addTo(map);
            marker.bindPopup(name + `<br><a class='centered-link' href='https://www.google.com/maps/search/${latitude},${longitude}/'>Ver rota</a>`);

            markers.push({
              id: record.id,
              name: name,
              latitude: latitude,
              longitude: longitude,
              marker: marker
            });
          });

          setLocations(markers);
        })
        .catch(error => {
          console.error('Erro ao carregar os dados da API Compaz:', error);
        });

      fetch('http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=874379d1-470f-40bb-a469-fe0228c62d09')
        .then(response => response.json())
        .then(data => {
          data.result.records.forEach(record => {
            const latitude = parseFloat(record.latitude);
            const longitude = parseFloat(record.longitude);
            const name = record.nome_oficial;

            const marker = L.marker([latitude, longitude], { icon: gymMarker }).addTo(map);
            marker.bindPopup(name + `<br><a class='centered-link' href='https://www.google.com/maps/search/${latitude},${longitude}/'>Ver rota</a>`);

            markers.push({
              id: record.id,
              name: name,
              latitude: latitude,
              longitude: longitude,
              marker: marker
            });
          });

          setLocations(markers);
        })
        .catch(error => {
          console.error('Erro ao carregar os dados da API Academias:', error);
        });

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;

            map.setView([userLatitude, userLongitude], 15);
            const gpsMarker = L.marker([userLatitude, userLongitude], { icon: gpsIcon }).addTo(map);
            gpsMarker.bindPopup('Sua localização');
          },
          error => {
            console.error('Erro ao obter a localização do usuário:', error);
          }
        );
      } else {
        console.error('Geolocalização não suportada no navegador.');
      }
    }
  }, [map]);

  const searchLocations = term => {
    setSearchTerm(term);

    const filteredResults = locations.filter(location =>
      location.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults.slice(0, maxSuggestions)); // Limitar o número de sugestões exibidas
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
    const latitude = parseFloat(location.latitude);
    const longitude = parseFloat(location.longitude);
    map.setView([latitude, longitude], 15);
    if (location.popup) {
      location.popup.openPopup();
    }
    setSearchTerm(''); // Limpa o campo de input após selecionar um local
  };


  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Pesquisar locais"
          value={searchTerm}
          onChange={(e) => searchLocations(e.target.value)}
        />
        {searchTerm.length > 0 && searchResults.length > 0 && (
          <ul className={`search-results${searchResults.length === 1 ? ' single-result' : ''}`}>
            {searchResults.map((location) => (
              <li key={location.id} onClick={() => selectLocation(location)}>
                {location.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id="map" style={{ height: '100vh', width: '100vw' }}></div>
    </div>
  );
};


export default Map;
