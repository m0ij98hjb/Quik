'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { useLanguage } from '../../contexts/LanguageContext';
import './branches.css';

export default function BranchesPage() {
  const mapRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    // Initialize map and branches functionality
    if (typeof window !== 'undefined' && window.L) {
      initializeBranchesMap();
    }
  }, []);

  const initializeBranchesMap = () => {
    const branches = [
      { id: 1, name: 'كويك 1', region: 'عسير', status: 'مشغلة', lat: 18.256506, lng: 42.632825, address: 'كويك 1 - أبها' },
      { id: 2, name: 'كويك 2', region: 'جازان', status: 'مشغلة', lat: 17.712210, lng: 42.221088, address: 'كويك 2 - الدرب 1' },
      { id: 3, name: 'كويك 3', region: 'عسير', status: 'مشغلة', lat: 18.682143, lng: 42.001450, address: 'كويك 3 - محايل عسير 1' },
      { id: 4, name: 'كويك 4', region: 'عسير', status: 'مشغلة', lat: 18.227749, lng: 42.559046, address: 'كويك 4 - المنسك' },
      { id: 5, name: 'كويك 5', region: 'عسير', status: 'مشغلة', lat: 18.165961, lng: 42.683265, address: 'كويك 5 - الفرعاء - أبها' },
      { id: 6, name: 'كويك 6', region: 'جازان', status: 'مشغلة', lat: 16.983423, lng: 42.587921, address: 'كويك 6 - إسكان جيزان (الجامعة)' },
      { id: 7, name: 'كويك 7', region: 'عسير', status: 'مشغلة', lat: 18.302043, lng: 42.691035, address: 'كويك 7 - مدخل الخميس' },
      { id: 8, name: 'كويك 8', region: 'عسير', status: 'مشغلة', lat: 18.165251, lng: 42.832882, address: 'كويك 8 - أحد رفيدة 1' },
      { id: 9, name: 'كويك 9', region: 'عسير', status: 'مشغلة', lat: 18.144529, lng: 42.520079, address: 'كويك 9 - عقبة ضلع - أبها' },
      { id: 10, name: 'كويك 10', region: 'جازان', status: 'تحت التطوير/الإنشاء', lat: 17.035054, lng: 42.632510, address: 'كويك 10 - الطريق الدولي' },
      { id: 11, name: 'كويك 11', region: 'عسير', status: 'تحت التطوير/الإنشاء', lat: 18.262028, lng: 42.594083, address: 'كويك 11 - المحالة' },
      { id: 12, name: 'كويك 12', region: 'عسير', status: 'تحت التطوير/الإنشاء', lat: 18.217431, lng: 42.647430, address: 'كويك 12 - طريق الملك عبدالله - أبها' },
      { id: 13, name: 'كويك 13', region: 'عسير', status: 'تحت التطوير/الإنشاء', lat: 18.185830, lng: 42.465140, address: 'كويك 13 - خميس مشيط - طريق الرياض' },
      { id: 14, name: 'كويك 14', region: 'جازان', status: 'تحت التطوير/الإنشاء', lat: 16.574140, lng: 42.484110, address: 'كويك 14 - أبوعريش' },
      { id: 15, name: 'كويك 15', region: 'جازان', status: 'تحت التطوير/الإنشاء', lat: 17.313970, lng: 42.519897, address: 'كويك 15 - بيش' },
      { id: 16, name: 'كويك 16', region: 'عسير', status: 'تم التعاقد عليها', lat: 18.252757, lng: 42.617667, address: 'كويك 16 - أبها (مدينة سلطان)' },
      { id: 17, name: 'كويك 17', region: 'عسير', status: 'تم التعاقد عليها', lat: 18.226396, lng: 42.588955, address: 'كويك 17 - أبها (حي الموظفين)' },
      { id: 18, name: 'كويك 18', region: 'مكة المكرمة', status: 'تم التعاقد عليها', lat: 21.294445, lng: 39.688754, address: 'كويك 18 - مخطط ولي العهد' },
      { id: 19, name: 'كويك 19', region: 'عسير', status: 'تحت التطوير/الإنشاء', lat: 18.058746, lng: 42.984596, address: 'كويك 19 - سراة عبيدة' },
      { id: 20, name: 'كويك 20', region: 'مكة المكرمة', status: 'تم التعاقد عليها', lat: 21.847337, lng: 40.990007, address: 'كويك 20 - الطائف - طريق الرياض' },
      { id: 21, name: 'كويك 21', region: 'مكة المكرمة', status: 'تم التعاقد عليها', lat: 21.472827, lng: 39.993164, address: 'كويك 21 - الراشدية' },
      { id: 22, name: 'كويك 22', region: 'مكة المكرمة', status: 'تم التعاقد عليها', lat: 21.803479, lng: 39.131491, address: 'كويك 22 - جدة - طيبة' },
      { id: 23, name: 'كويك 23', region: 'القصيم', status: 'تم التعاقد عليها', lat: 26.016131, lng: 43.317044, address: 'كويك 23 - القصيم' },
      { id: 24, name: 'كويك 24', region: 'الجوف', status: 'تم التعاقد عليها', lat: 29.917571, lng: 40.199748, address: 'كويك 24 - الجوف سكاكا' },
      { id: 25, name: 'كويك 25', region: 'القصيم', status: 'تم التعاقد عليها', lat: 26.014270, lng: 43.317762, address: 'كويك 25 - القصيم 2' },
      { id: 26, name: 'كويك 26', region: 'مكة المكرمة', status: 'تم التعاقد عليها', lat: 21.826924, lng: 39.149646, address: 'كويك 26 - جدة - الموسى فيبو' },
      { id: 27, name: 'كويك 27', region: 'جازان', status: 'تم التعاقد عليها', lat: 17.715260, lng: 42.292753, address: 'كويك 27 - الدرب 2' },
      { id: 28, name: 'كويك 28', region: 'القصيم', status: 'تم التعاقد عليها', lat: 26.081501, lng: 43.598723, address: 'كويك 28 - القصيم 3' },
      { id: 29, name: 'كويك 29', region: 'القصيم', status: 'تم التعاقد عليها', lat: 26.049034, lng: 43.444370, address: 'كويك 29 - القصيم 4' },
      { id: 30, name: 'كويك 30', region: 'القصيم', status: 'تم التعاقد عليها', lat: 26.084970, lng: 43.577170, address: 'كويك 30 - القصيم 5' },
      { id: 31, name: 'كويك 31', region: 'عسير', status: 'تم التعاقد عليها', lat: 18.241085, lng: 42.602830, address: 'كويك 31 - وسمكو 1' },
      { id: 32, name: 'كويك 32', region: 'عسير', status: 'تم التعاقد عليها', lat: 18.256041, lng: 42.633357, address: 'كويك 32 - وسمكو 2' },
      { id: 33, name: 'كويك 33', region: 'المدينة المنورة', status: 'تم التعاقد عليها', lat: 18.258330, lng: 42.637722, address: 'كويك 33 - المدينة المنورة' }
    ];

    const map = window.L.map('map', { center: [18.05, 42.42], zoom: 8, zoomControl: false });
    window.L.control.zoom({ position: 'bottomleft' }).addTo(map);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);

    function createMarkerIcon(active) {
      const size = active ? 44 : 34;
      const inner = active ? 14 : 11;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const bgColor = isDark ? '#fff' : '#F79F1F';
      const innerColor = isDark ? '#F79F1F' : '#fff';
      const shadow = active
        ? `0 0 0 7px ${isDark ? 'rgba(255,255,255,0.25)' : 'rgba(247, 159, 31, 0.25)'}, 0 4px 16px ${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(247, 159, 31, 0.6)'}`
        : `0 4px 12px ${isDark ? 'rgba(255,255,255,0.4)' : 'rgba(247, 159, 31, 0.5)'}`;
      return window.L.divIcon({
        html: `<div style="width:${size}px;height:${size}px;background:${bgColor};border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid ${isDark ? '#F79F1F' : '#fff'};box-shadow:${shadow};"><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:${inner}px;height:${inner}px;background:${innerColor};border-radius:50%;"></div></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size],
        popupAnchor: [0, -size - 10]
      });
    }

    const markers = {};
    let activeId = null;

    branches.forEach(b => {
      const marker = window.L.marker([b.lat, b.lng], { icon: createMarkerIcon(false) }).addTo(map);
      const statusColors = {
        'مشغلة': '#27ae60',
        'تحت التطوير/الإنشاء': '#f39c12',
        'تم التعاقد عليها': '#34495e'
      };

      marker.bindPopup(`
      <div class="pop-head d-flex flex-column align-items-center justify-content-center p-3 text-center border-bottom">
        <i class="fas fa-gas-pump fa-2x mb-2" style="color: var(--main-orange);"></i>
        <h4 class="mb-2 fw-bold">${b.name}</h4>
        <span style="background:${statusColors[b.status] || '#666'}; color:#fff; padding:4px 12px; border-radius:12px; font-size:12px; font-weight:600;">
          ${b.status}
        </span>
      </div>
      <div class="p-3 text-end" style="direction: rtl;">
        <p class="mb-2"><i class="fas fa-map-marker-alt ms-2 text-muted"></i> <strong>العنوان:</strong> ${b.address}</p>
        <p class="mb-0"><i class="fas fa-layer-group ms-2 text-muted"></i> <strong>المنطقة:</strong> ${b.region}</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}" target="_blank" class="pop-btn btn d-block text-center mt-3 py-2" style="background: var(--main-orange); color: #fff; border-radius: 8px;">
          <i class="fas fa-directions"></i> احصل على الاتجاهات
        </a>
      </div>
    `);
      marker.on('click', () => selectBranch(b.id, false));
      markers[b.id] = marker;
    });

    const bounds = window.L.latLngBounds(branches.map(b => [b.lat, b.lng]));
    map.fitBounds(bounds, { padding: [60, 60] });

    // Update markers when theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          Object.values(markers).forEach(marker => {
            const isActive = marker === markers[activeId];
            marker.setIcon(createMarkerIcon(isActive));
          });
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    function selectBranch(id, fromList) {
      if (activeId) markers[activeId].setIcon(createMarkerIcon(false));
      activeId = id;
      const branch = branches.find(b => b.id === id);
      markers[id].setIcon(createMarkerIcon(true));
      markers[id].openPopup();
      map.flyTo([branch.lat, branch.lng], 14, { duration: 1.2 });
      document.getElementById('activeChip').textContent = branch.name;
      renderList(document.getElementById('branchSearch').value);
    }

    function renderList(query = '') {
      const statusColors = {
        'مشغلة': '#27ae60',
        'تحت التطوير/الإنشاء': '#f39c12',
        'تم التعاقد عليها': '#34495e'
      };

      const filtered = query.trim() === '' ? branches : branches.filter(b => b.name.includes(query) || b.region.includes(query));
      document.getElementById('branchesList').innerHTML = filtered.map(b => `
      <div class="branch-card d-flex align-items-center gap-3 px-4 py-3 border-bottom ${activeId === b.id ? 'active' : ''}" id="bi-${b.id}" onclick="selectBranch(${b.id}, true)">
        <div class="bc-icon"><i class="fas fa-gas-pump"></i></div>
        <div class="flex-grow-1">
          <h5 class="mb-1">${b.name}</h5>
          <div class="d-flex align-items-center gap-2">
            <small class="text-muted"><i class="fas fa-location-dot"></i> ${b.region}</small>
            <span style="font-size: 10px; background: ${statusColors[b.status] || '#666'}; color: var(--text-primary); padding: 1px 6px; border-radius: 4px;">${b.status}</span>
          </div>
        </div>
        <i class="fas fa-chevron-left"></i>
      </div>
    `).join('');
    }

    // Make selectBranch available globally
    window.selectBranch = selectBranch;
    
    document.getElementById('branchSearch').addEventListener('input', e => renderList(e.target.value));
    renderList();
  };

  return (
    <>
      <Script 
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
        strategy="afterInteractive"
        onLoad={() => {
          setTimeout(() => {
            if (typeof window !== 'undefined' && window.L) {
              initializeBranchesMap();
            }
          }, 100);
        }}
      />
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
        strategy="beforeInteractive"
      />
      
      <main className="main-area" style={{ paddingTop: '120px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <section className="branches-section" id="branches-map" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div className="container">
            <div className="section-heading text-center mb-4 mt-5">
              <h2 style={{ color: 'var(--text-primary)' }}>{t('branches.map')}</h2>
            </div>

            <div className="map-wrapper">
              <div className="map-sidebar">
                <div className="sidebar-top p-4">
                  <h3><i className="fas fa-list ms-2"></i>{t('branches.list')}</h3>
                  <p>{t('branches.click')}</p>
                </div>
                <div className="p-3 border-bottom">
                  <div className="position-relative">
                    <input
                      type="text"
                      id="branchSearch"
                      className="form-control"
                      placeholder={language === 'ar' ? 'ابحث عن فرع...' : 'Search for a branch...'}
                    />
                    <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                  </div>
                </div>
                <div className="branches-list overflow-auto" id="branchesList" style={{maxHeight: '520px'}}></div>
              </div>

              <div className="map-area position-relative">
                <div className="map-chip position-absolute top-0 end-0 m-3 px-4 py-2 bg-white shadow rounded-3">
                  <i className="fas fa-location-dot"></i>
                  <span id="activeChip" className="fw-bold">{t('branches.choose')}</span>
                </div>
                <div id="map" style={{height: '580px'}}></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
