import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { REAL_LONDON_GEOJSON } from '../data/londonBoroughsRealGeoJson';
import { LONDON_BOROUGH_CENTROIDS } from '../data/londonBoroughCentroids';
import { propertiesData } from '../data/propertiesData';
import { 
  Plus, 
  Minus, 
  RotateCcw,
  ArrowLeft,
  X
} from 'lucide-react';

// Coordinates for London & surrounding properties
const PROPERTY_COORDINATES = {
  'london-townhouse': { lat: 51.4988, lng: -0.1749 },
  'wimbledon-residence': { lat: 51.4214, lng: -0.2067 },
  'richmond-riverside': { lat: 51.4613, lng: -0.3037 },
  'surrey-estate': { lat: 51.4014, lng: -0.5630 },
  'london-mayfair': { lat: 51.5090, lng: -0.1448 },
  'hampstead-villa': { lat: 51.5559, lng: -0.1764 },
  'greenwich-haven': { lat: 51.4826, lng: -0.0077 },
  'canary-wharf-suite': { lat: 51.5050, lng: -0.0200 },
  'highgate-manor': { lat: 51.5724, lng: -0.1465 },
  'battersea-power': { lat: 51.4789, lng: -0.1654 },
  'st-johns-wood': { lat: 51.5332, lng: -0.1748 },
  'kensington-villa': { lat: 51.5030, lng: -0.2010 },
  'kingston-riverside': { lat: 51.4123, lng: -0.3007 },
  'city-penthouse': { lat: 51.5127, lng: -0.0918 },
  'knightsbridge-suite': { lat: 51.5005, lng: -0.1600 },
  'chiswick-house': { lat: 51.4925, lng: -0.2588 },
};

export default function LondonBlueprintMap() {
  const containerRef = useRef(null);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const geojsonLayerRef = useRef(null);
  const videoRef = useRef(null);

  const [currentZoomPercent, setCurrentZoomPercent] = useState(100);
  const [activeVideoProperty, setActiveVideoProperty] = useState(null);
  const [isZoomingToPoint, setIsZoomingToPoint] = useState(false);
  const [zoomingPropertyTitle, setZoomingPropertyTitle] = useState('');

  // Mouse Pointer Spotlight Glow State
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Fast video playback rate: 3.0x speed
  const fastVideoPlaybackRate = 3.0;

  // Set video speed when active video is ready
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = fastVideoPlaybackRate;
    }
  }, [activeVideoProperty]);

  // Helper to find properties in a borough
  const getBoroughProperties = (boroughName) => {
    return propertiesData.filter((p) => {
      const city = p.city.toLowerCase();
      const loc = p.location.toLowerCase();
      const bName = boroughName.toLowerCase();
      return loc.includes(bName) || city.includes(bName);
    });
  };

  // Smooth point zoom animation (1.2s duration) then trigger fast video
  const triggerPointZoomAndPlayVideo = (targetProperty, coords) => {
    if (!mapRef.current) return;

    setIsZoomingToPoint(true);
    setZoomingPropertyTitle(targetProperty.fullName || targetProperty.title);

    // Smooth elegant 1.2s flyTo zoom duration to MAXIMUM zoom (19.0)
    const flyDuration = 1.2;
    mapRef.current.flyTo([coords.lat, coords.lng], 19.0, {
      duration: flyDuration,
      easeLinearity: 0.25,
    });

    let videoTriggered = false;

    const handleZoomFinish = () => {
      if (videoTriggered) return;
      videoTriggered = true;
      mapRef.current?.off('moveend', handleZoomFinish);
      setIsZoomingToPoint(false);
      setActiveVideoProperty(targetProperty);
    };

    // Listen for Leaflet moveend event when flyTo completes
    mapRef.current.once('moveend', handleZoomFinish);

    // Safety fallback timer matching 1.2s zoom animation duration
    setTimeout(() => {
      if (!videoTriggered) {
        handleZoomFinish();
      }
    }, Math.round(flyDuration * 1000) + 100);
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize Leaflet Map centered on Greater London
    const map = L.map(mapContainerRef.current, {
      center: [51.5074, -0.1278],
      zoom: 10.5,
      minZoom: 9.5,
      maxZoom: 19,
      zoomSnap: 0.5,
      zoomDelta: 0.5,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
      doubleClickZoom: false,
      touchZoom: true,
      bounceAtZoomLimits: false,
    });

    mapRef.current = map;

    // Add OpenStreetMap Dark Navy Map Tiles (100% Free Public Map — NO API Key Required EVER)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      className: 'london-dark-navy-tiles',
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Fit map bounds to London GeoJSON
    const bounds = L.geoJSON(REAL_LONDON_GEOJSON).getBounds();
    map.fitBounds(bounds, { padding: [20, 20] });

    // Custom Double-Click -> Reset back to starting London overview
    map.on('dblclick', () => {
      const b = L.geoJSON(REAL_LONDON_GEOJSON).getBounds();
      map.flyTo(b.getCenter(), 10.5, { duration: 1.2, easeLinearity: 0.25 });
    });

    // Track Zoom percentage
    const updateZoomPercent = () => {
      const z = map.getZoom();
      setCurrentZoomPercent(Math.round((z / 10.5) * 100));
    };
    map.on('zoomend', updateZoomPercent);

    // Style configuration: Faint/subtle route lines initially
    const defaultStyle = {
      fillColor: '#090d21',
      fillOpacity: 0.12,
      color: 'rgba(56, 189, 248, 0.12)',
      weight: 0.8,
      lineJoin: 'round',
      lineCap: 'round',
    };

    const hoverStyle = {
      fillColor: '#1d2e6e',
      fillOpacity: 0.75,
      color: '#38bdf8',
      weight: 3.5,
    };

    // Featured properties list
    const FEATURED_LONDON_IDS = ['london-townhouse', 'london-mayfair', 'richmond-riverside', 'hampstead-villa', 'canary-wharf-suite'];
    const featuredProperties = propertiesData.filter((p) => FEATURED_LONDON_IDS.includes(p.id));

    // Render 33 Official Real London Borough GeoJSON Polygons
    const geojsonLayer = L.geoJSON(REAL_LONDON_GEOJSON, {
      style: defaultStyle,
      onEachFeature: (feature, layer) => {
        const boroughName = feature.properties.shortName || feature.properties.name || '';

        layer.on({
          mouseover: (e) => {
            const l = e.target;
            l.setStyle(hoverStyle);
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
              l.bringToFront();
            }
          },
          mouseout: (e) => {
            geojsonLayer.resetStyle(e.target);
          },
          click: (e) => {
            const clickCenter = e.latlng || layer.getBounds().getCenter();
            const boroughProps = getBoroughProperties(boroughName);
            const matchedProp = boroughProps[0] || featuredProperties[0];
            triggerPointZoomAndPlayVideo(matchedProp, { lat: clickCenter.lat, lng: clickCenter.lng });
},
        });
      },
    }).addTo(map);

    geojsonLayerRef.current = geojsonLayer;

    // Array of 60+ small street & route polylines covering London's entire detailed street network, avenues, minor roads, and river routes
    const LONDON_SMALL_ROUTES = [
      // Major River Curves
      [[51.4850, -0.2300], [51.4810, -0.1900], [51.4840, -0.1600], [51.4930, -0.1250], [51.5080, -0.1180], [51.5090, -0.0800], [51.5040, -0.0400], [51.4850, -0.0050], [51.4980, 0.0400]],
      [[51.4600, -0.3100], [51.4720, -0.3000], [51.4850, -0.2700], [51.4870, -0.2400]],

      // Central London Arterial East-West Routes
      [[51.5110, -0.2100], [51.5125, -0.1600], [51.5150, -0.1300], [51.5170, -0.1100], [51.5180, -0.0800]],
      [[51.5030, -0.1600], [51.5080, -0.1400], [51.5110, -0.1280], [51.5120, -0.1150], [51.5140, -0.0900]],
      [[51.5220, -0.1700], [51.5240, -0.1400], [51.5270, -0.1200], [51.5300, -0.1000]],
      [[51.5010, -0.2100], [51.4980, -0.1800], [51.4960, -0.1600]],
      [[51.4840, -0.1750], [51.4820, -0.1450], [51.4800, -0.1200]],
      [[51.5150, -0.0700], [51.5130, -0.0400], [51.5110, -0.0100]],
      [[51.4920, -0.1000], [51.4950, -0.0700], [51.4970, -0.0400]],

      // Central London North-South Routes
      [[51.5070, -0.1370], [51.5150, -0.1410], [51.5230, -0.1430]],
      [[51.5030, -0.1510], [51.5130, -0.1580]],
      [[51.5230, -0.0780], [51.5350, -0.0760], [51.5450, -0.0750]],
      [[51.5000, -0.1260], [51.5120, -0.1240], [51.5250, -0.1210]],
      [[51.5000, -0.0880], [51.5150, -0.0880], [51.5300, -0.0850]],

      // Soho, Fitzrovia & Covent Garden Detailed Grid
      [[51.5130, -0.1350], [51.5110, -0.1300], [51.5140, -0.1250]],
      [[51.5150, -0.1320], [51.5120, -0.1280]],
      [[51.5100, -0.1380], [51.5160, -0.1360]],
      [[51.5170, -0.1370], [51.5210, -0.1360]],
      [[51.5180, -0.1320], [51.5220, -0.1300]],

      // Mayfair & Marylebone Detailed Grid
      [[51.5090, -0.1500], [51.5120, -0.1450]],
      [[51.5060, -0.1480], [51.5110, -0.1430]],
      [[51.5140, -0.1550], [51.5180, -0.1520]],
      [[51.5160, -0.1600], [51.5200, -0.1560]],

      // Knightsbridge, Chelsea & Kensington Grid
      [[51.4990, -0.1600], [51.4970, -0.1500]],
      [[51.5010, -0.1550], [51.4950, -0.1480]],
      [[51.4930, -0.1700], [51.4880, -0.1650]],
      [[51.4900, -0.1800], [51.4850, -0.1750]],
      [[51.4950, -0.1900], [51.4910, -0.1850]],
      [[51.5030, -0.1950], [51.4970, -0.1900]],

      // City of London & Temple Grid
      [[51.5130, -0.0900], [51.5170, -0.0880]],
      [[51.5150, -0.0950], [51.5120, -0.0850]],
      [[51.5110, -0.1000], [51.5160, -0.0980]],
      [[51.5180, -0.0930], [51.5210, -0.0900]],

      // Southwark, Lambeth & Bermondsey Grid
      [[51.5020, -0.0900], [51.4980, -0.0800]],
      [[51.5050, -0.0850], [51.5000, -0.0750]],
      [[51.4950, -0.1100], [51.4900, -0.1000]],
      [[51.4880, -0.1150], [51.4820, -0.1050]],
      [[51.4920, -0.0800], [51.4870, -0.0700]],

      // East London, Tower Hamlets & Canary Wharf Grid
      [[51.5080, -0.0250], [51.5020, -0.0220], [51.4920, -0.0200]],
      [[51.5150, -0.0500], [51.5100, -0.0350]],
      [[51.5200, -0.0450], [51.5160, -0.0300]],
      [[51.5250, -0.0600], [51.5200, -0.0500]],
      [[51.5050, -0.0100], [51.5000, 0.0050]],

      // North London & Hampstead / Camden Grid
      [[51.5550, -0.1750], [51.5650, -0.1650], [51.5720, -0.1450]],
      [[51.5380, -0.1420], [51.5450, -0.1400]],
      [[51.5420, -0.1500], [51.5500, -0.1450]],
      [[51.5400, -0.1050], [51.5480, -0.1000]],
      [[51.5500, -0.1100], [51.5600, -0.1050]],

      // South West London — Richmond, Wimbledon & Wandsworth
      [[51.4600, -0.3000], [51.4700, -0.2900], [51.4800, -0.2800]],
      [[51.4200, -0.2100], [51.4300, -0.2150], [51.4400, -0.2180]],
      [[51.4500, -0.1900], [51.4580, -0.1850]],
      [[51.4450, -0.1750], [51.4520, -0.1700]],
      [[51.4350, -0.1950], [51.4420, -0.1900]],

      // South East London — Greenwich & Lewisham Grid
      [[51.4800, -0.0100], [51.4780, 0.0000], [51.4750, 0.0100]],
      [[51.4700, -0.0200], [51.4650, -0.0100]],
      [[51.4620, -0.0300], [51.4580, -0.0200]],
      [[51.4750, 0.0200], [51.4700, 0.0300]],

      // Outer North West — Brent & Ealing Grid
      [[51.5200, -0.2900], [51.5250, -0.2700]],
      [[51.5300, -0.2800], [51.5350, -0.2600]],
      [[51.5400, -0.2500], [51.5450, -0.2300]],
    ];

    // Render All London Small Routes Vector Polylines
    const smallRouteLayers = [];
    const defaultSmallRouteStyle = {
      color: 'rgba(56, 189, 248, 0.15)',
      weight: 0.8,
      opacity: 0.25,
      interactive: false,
    };

    LONDON_SMALL_ROUTES.forEach((points) => {
      const polyline = L.polyline(points, defaultSmallRouteStyle).addTo(map);
      smallRouteLayers.push({ polyline, points });
    });

    // Dynamic Proximity Glow according to Mouse Pointer: All small routes & borough boundaries glow on mouse proximity
    map.on('mousemove', (e) => {
      const mousePt = e.containerPoint;
      const maxProximity = 220; // 220px radius around mouse pointer

      // 1. Glow Borough Polygon Boundaries
      if (geojsonLayerRef.current) {
        geojsonLayerRef.current.eachLayer((layer) => {
          if (!layer.getBounds) return;
          const centerLatLng = layer.getBounds().getCenter();
          const centerPt = map.latLngToContainerPoint(centerLatLng);

          const dx = mousePt.x - centerPt.x;
          const dy = mousePt.y - centerPt.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxProximity) {
            const intensity = 1 - dist / maxProximity;
            layer.setStyle({
              fillColor: '#1d2e6e',
              fillOpacity: 0.12 + intensity * 0.6,
              color: '#38bdf8',
              weight: 0.8 + intensity * 2.8,
            });
          } else {
            layer.setStyle(defaultStyle);
          }
        });
      }

      // 2. Glow All Small Street Routes & Lines
      smallRouteLayers.forEach(({ polyline, points }) => {
        const midIndex = Math.floor(points.length / 2);
        const midLatLng = L.latLng(points[midIndex][0], points[midIndex][1]);
        const midPt = map.latLngToContainerPoint(midLatLng);

        const dx = mousePt.x - midPt.x;
        const dy = mousePt.y - midPt.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxProximity) {
          const intensity = 1 - dist / maxProximity;
          polyline.setStyle({
            color: '#38bdf8',
            weight: 0.8 + intensity * 2.5,
            opacity: 0.25 + intensity * 0.75,
          });
        } else {
          polyline.setStyle(defaultSmallRouteStyle);
        }
      });
    });

    map.on('mouseout', () => {
      if (geojsonLayerRef.current) {
        geojsonLayerRef.current.eachLayer((layer) => {
          layer.setStyle(defaultStyle);
        });
      }
      smallRouteLayers.forEach(({ polyline }) => {
        polyline.setStyle(defaultSmallRouteStyle);
      });
    });

    // Render Centroid Uppercase White Text Labels for all 33 Boroughs
    LONDON_BOROUGH_CENTROIDS.forEach((b) => {
      const labelHtml = `
        <div style="
          color: #ffffff;
          font-family: 'Montserrat', system-ui, sans-serif;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-align: center;
          line-height: 1.2;
          text-transform: uppercase;
          pointer-events: none;
          white-space: nowrap;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.95);
          user-select: none;
        ">
          ${b.name}
        </div>
      `;

      const divIcon = L.divIcon({
        html: labelHtml,
        className: 'london-borough-label-icon',
        iconSize: [80, 20],
        iconAnchor: [40, 10],
      });

      L.marker([b.lat, b.lng], {
        icon: divIcon,
        interactive: false,
      }).addTo(map);
    });

    // Render Featured Inner London Property Pins
    featuredProperties.forEach((prop) => {
      const coords = PROPERTY_COORDINATES[prop.id] || { lat: 51.5074, lng: -0.1278 };

      const pointHtml = `
        <div class="group relative flex items-center justify-center cursor-pointer">
          <!-- Pulse Aura Ring -->
          <div style="position: absolute; width: 32px; height: 32px; border-radius: 50%; background: rgba(56, 189, 248, 0.45); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          
          <!-- Glowing Core Pin -->
          <div style="width: 20px; height: 20px; border-radius: 50%; background: #38bdf8; border: 2.5px solid #ffffff; box-shadow: 0 0 18px #38bdf8;"></div>
        </div>
      `;

      const pointIcon = L.divIcon({
        html: pointHtml,
        className: 'london-property-point-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([coords.lat, coords.lng], {
        icon: pointIcon,
        zIndexOffset: 1000,
      }).addTo(map);

      // On point marker click: Smooth zoom to point, then play video fast!
      marker.on('click', () => {
        triggerPointZoomAndPlayVideo(prop, coords);
      });
    });

    // Invalidate size check
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Zoom Button Actions
  const handleZoomIn = () => {
    mapRef.current?.zoomIn(1.5);
  };

  const handleZoomOut = () => {
    if (!mapRef.current) return;
    const bounds = L.geoJSON(REAL_LONDON_GEOJSON).getBounds();
    mapRef.current.flyTo(bounds.getCenter(), 10.5, { duration: 1.2, easeLinearity: 0.25 });
  };

  const handleResetZoom = () => {
    if (!mapRef.current) return;
    const bounds = L.geoJSON(REAL_LONDON_GEOJSON).getBounds();
    mapRef.current.flyTo(bounds.getCenter(), 10.5, { duration: 1.2, easeLinearity: 0.25 });
  };

  // Listen for Navbar Back Button click to reset map zoom
  useEffect(() => {
    const handleResetMap = () => {
      if (!mapRef.current) return;
      const bounds = L.geoJSON(REAL_LONDON_GEOJSON).getBounds();
      mapRef.current.flyTo(bounds.getCenter(), 10.5, { duration: 1.2, easeLinearity: 0.25 });
      setActiveVideoProperty(null);
    };
    window.addEventListener('reset-map-zoom', handleResetMap);
    return () => window.removeEventListener('reset-map-zoom', handleResetMap);
  }, []);

  // Close Video Player and Reset Map back to initial starting overview (zoom 10.5)
  const closeVideoPlayer = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveVideoProperty(null);

    // Reset map view back to initial London overview when it started
    if (mapRef.current) {
      const bounds = L.geoJSON(REAL_LONDON_GEOJSON).getBounds();
      mapRef.current.flyTo(bounds.getCenter(), 10.5, { duration: 1.2, easeLinearity: 0.25 });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className="relative w-full h-full min-h-screen bg-[#090a14] overflow-hidden font-dm select-none"
    >
      
      {/* ----------------------------------------------------
          1. DYNAMIC SMALL STREET & ROUTE GLOW SPOTLIGHT (COLOR-DODGE)
          Illuminates every small street, avenue, lane, and alley directly under mouse
      ---------------------------------------------------- */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-200 overflow-hidden"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.95), rgba(0, 240, 255, 0.45) 45%, rgba(9, 13, 33, 0.1) 75%, transparent 100%)`,
          opacity: isMouseOver ? 1 : 0,
          mixBlendMode: 'color-dodge',
        }}
      />

      {/* ----------------------------------------------------
          2. AMBIENT SOFT OUTER ROUTE GLOW (SCREEN BLEND)
      ---------------------------------------------------- */}
      <div 
        className="pointer-events-none absolute inset-0 z-25 transition-opacity duration-300 overflow-hidden"
        style={{
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.3), transparent 75%)`,
          opacity: isMouseOver ? 1 : 0,
          mixBlendMode: 'screen',
        }}
      />

      {/* ----------------------------------------------------
          2. SMOOTH ZOOMING TO POINT INDICATOR OVERLAY
      ---------------------------------------------------- */}
      {isZoomingToPoint && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[35] flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#101633]/90 border border-[#38bdf8]/50 backdrop-blur-md shadow-2xl animate-pulse">
          <div className="w-3 h-3 rounded-full bg-[#38bdf8] animate-ping" />
          <span className="text-xs font-montserrat tracking-widest text-white uppercase font-semibold">
            Zooming to {zoomingPropertyTitle || 'Point Location'}...
          </span>
        </div>
      )}

      {/* ----------------------------------------------------
          3. SLEEK FLOATING MAP CONTROL PANEL
      ---------------------------------------------------- */}
      <div className="absolute bottom-6 right-6 z-[35] flex items-center gap-1.5 bg-[#101633]/90 border border-white/20 backdrop-blur-md p-1.5 shadow-2xl rounded-sm">
        <button
          onClick={handleZoomIn}
          className="p-2 hover:bg-white/15 text-white transition-colors cursor-pointer rounded-xs"
          title="Zoom In (+)"
        >
          <Plus className="w-4 h-4" />
        </button>

        <button
          onClick={handleZoomOut}
          className="p-2 hover:bg-white/15 text-white transition-colors cursor-pointer rounded-xs"
          title="Zoom Out (-)"
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-4 bg-white/20 my-auto mx-1" />

        <button
          onClick={handleResetZoom}
          className="p-2 hover:bg-white/15 text-[#38bdf8] transition-colors cursor-pointer rounded-xs"
          title="Reset Zoom"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        <span className="text-[10px] font-mono text-white/70 tracking-wider px-2 font-semibold min-w-[42px] text-center">
          {currentZoomPercent}%
        </span>
      </div>

      {/* Leaflet Map Canvas Container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full min-h-screen bg-[#090a14] z-0"
      />

      {/* ----------------------------------------------------
          4. PURE FULL SCREEN FAST VIDEO + BACK TO MAP OVERLAY
      ---------------------------------------------------- */}
      {activeVideoProperty && (
        <div 
          onClick={closeVideoPlayer}
          className="fixed inset-0 z-[40] w-screen h-screen bg-black overflow-hidden select-none animate-fade-in cursor-pointer"
        >
          {/* Top Floating Back Button to Reset Map View */}
          <div className="absolute top-6 left-6 z-50 flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeVideoPlayer();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101633]/90 border border-white/30 text-white hover:border-[#38bdf8] hover:text-[#38bdf8] backdrop-blur-md transition-all duration-300 text-xs font-montserrat tracking-widest uppercase font-semibold cursor-pointer shadow-2xl active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-[#38bdf8]" />
              <span>Back to Map</span>
            </button>
          </div>

          {/* Top Right Close Button */}
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeVideoPlayer();
              }}
              className="p-3 rounded-full bg-[#101633]/90 border border-white/30 text-white hover:border-[#38bdf8] hover:text-[#38bdf8] backdrop-blur-md transition-all duration-300 cursor-pointer shadow-2xl active:scale-95"
              aria-label="Close video and reset map"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Edge-to-Edge Full Screen Video playing fast (3.0x speed) once without repeating */}
          <video
            ref={videoRef}
            src={activeVideoProperty.video || '/landing/erasio.mp4'}
            autoPlay
            playsInline
            muted
            preload="auto"
            onCanPlay={(e) => {
              e.target.playbackRate = fastVideoPlaybackRate;
            }}
            onEnded={() => {
              if (videoRef.current) {
                videoRef.current.pause();
              }
            }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
      )}
    </div>
  );
}



