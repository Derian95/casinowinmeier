import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { type LngLatLike } from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5zZXJ0NTAwMCIsImEiOiJjbDJ1czNoenIwNTEyM2NydHhpOGFzbHh4In0.KjU8nOVg2Q5qDthR7Upw-Q";

import image from "../../assets/map/wmUbicacion.png";
import { useCasinoStore } from "../../store/casinoStore";
import { LinksNavbar } from "../header/models";

 const Map = () => {
  const { dataCasino } = useCasinoStore();
  const layers: string[] = ["winmeier-superficie", "markers", "winmeier-referencias"];
  const styleDamasco = "mapbox://styles/insert5000/cltnhnqwb01ci01qp903j6n85";

  useEffect(() => {
    if (dataCasino != null) {
      const locationCasino: LngLatLike = [
        dataCasino?.sections.findUs.longitude,
        dataCasino?.sections.findUs.latitude,
      ];
      const map = new mapboxgl.Map({
        container: "map",
        style: styleDamasco,
        center: locationCasino,
        zoom: 18,
        scrollZoom: false,
        attributionControl: false,
        dragPan: true,
      });
      map.on("load", () => {
        // Agregar botones de zoom personalizados
        map.addControl(new mapboxgl.NavigationControl(), "top-left");
      });
      // Agrega la capa personalizada con tu imagen como icono
      map.on("load", () => {
        // const newImage = imageUrl
        map.loadImage(image, (error, image) => {
          if (error) throw error;
          map.addImage("custom-marker", image as HTMLImageElement);
          map.addSource("markers", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: locationCasino,
                  },
                  properties: {
                    name: "Casino WinMeier",
                  },
                },
              ],
            },
          });
          map.addLayer({
            id: "markers",
            type: "symbol",
            source: "markers",
            layout: {
              "icon-image": "custom-marker", // Nombre de tu imagen personalizada
              "icon-size": 0.15, // Ajusta el tamaño según tus necesidades
              "icon-anchor": "bottom", // Establece el anclaje en la parte inferior
            },
          });
        });

        map.on("click", (event) => {
          // If the user clicked on one of your markers, get its information.
          const features = map.queryRenderedFeatures(event.point, {
            layers: layers,
          });

          if (!features.length) {
            return;
          }
          const feature = features[0];
          const coordinates =
            feature.geometry.type === "Point"
              ? (feature.geometry.coordinates as mapboxgl.LngLatLike)
              : locationCasino;

          if (coordinates) {
            let lngLat: mapboxgl.LngLatLike | null = null;

            if (Array.isArray(coordinates) && coordinates.length === 2) {
              lngLat = coordinates as mapboxgl.LngLatLike;
            } else if ("lng" in coordinates && "lat" in coordinates) {
              lngLat = [coordinates.lng, coordinates.lat];
            } else if ("lon" in coordinates && "lat" in coordinates) {
              lngLat = [coordinates.lon, coordinates.lat];
            }

            if (lngLat) {
              const positionX = 0;
              const positionY = feature.layer.id.includes("referencia")
                ? -15
                : -95;
              new mapboxgl.Popup({ offset: [positionX, positionY] })
                .setLngLat(lngLat)
                .setHTML(
                  `<h3 style="font-size:30px; line-height: 1; text-align: center;">${feature.properties?.name}</h3>`
                )
                .addTo(map);
            }
          }
        });
      });
    }
  }, [dataCasino]);
  if (dataCasino == null) return null;

  return (
    <div className="grid place-items-center pb-40 px-2" id={LinksNavbar.Location}>
      <div className="w-full children">
      <h2 className="normal-title">{dataCasino.sections.findUs.infoSection.title}</h2>
      <p className="normal-text">{dataCasino.sections.findUs.address}</p>
      </div>
        <div className="w-full h-[300px] md:h-[600px] rounded-xl children" id="map"></div>
    </div>
  );
};
export default Map