"use client";
import { useRef, useEffect, useState } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

interface TomTomMapProps {
  storeName: string;
  storeAddress: string;
  storeLatitude: number;
  storeLongitude: number;
}

export const TomTomMap: React.FC<TomTomMapProps> = ({
  storeName,
  storeAddress,
  storeLatitude,
  storeLongitude,
}) => {
  const mapElement = useRef(null);
  const [_, setMap] = useState<any>(null);
  const MAP_ZOOM = 18;

  useEffect(() => {
    if (mapElement.current) {
      let map = tt.map({
        key: process.env.NEXT_PUBLIC_TOMTOM_API ?? "",
        container: mapElement.current,
        center: [storeLatitude, storeLongitude],
        zoom: MAP_ZOOM,
      });
      const marker = new tt.Marker()
        .setLngLat([storeLatitude, storeLongitude]) // Replace with your desired coordinates
        .addTo(map);
      const popupOffsets: { [key: string]: [number, number] } = {
        top: [0, 0],
        bottom: [0, -40],
        "bottom-right": [0, -70],
        "bottom-left": [0, -70],
        left: [25, -35],
        right: [-25, -35],
      };

      var popup = new tt.Popup({ offset: popupOffsets }).setHTML(
        `<b>Mobile Kangaroo: ${storeName}</b><br/>${storeAddress}, USA`,
      );
      marker.setPopup(popup).togglePopup();

      setMap(map);
      return () => map.remove();
    }
  }, []);

  return (
    <div>
      <div className="border w-screen h-screen" id="theMap" ref={mapElement} />
    </div>
  );
};
