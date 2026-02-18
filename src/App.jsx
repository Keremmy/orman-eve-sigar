// Hayat Yeşile Sığar - Full Featured React App
import React, { useState, useEffect, useRef } from "react";

// CSS Styles
const styles = `
:root {
  --primary: #dc2626;
  --primary-dark: #b91c1c;
  --success: #16a34a;
  --warning: #d97706;
  --bg-dark: #1f2937;
  --bg-light: #f8fafc;
  --sidebar-width: 280px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: var(--bg-light);
}

.app-container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: var(--sidebar-width);
  background: #fff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-logo {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary) 0%, #ef4444 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.sidebar-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: #1f2937;
}

.sidebar-subtitle {
  font-size: 0.75rem;
  color: #6b7280;
}

.sidebar-nav {
  padding: 16px 12px;
  flex: 1;
}

.nav-section {
  margin-bottom: 24px;
}

.nav-section-title {
  font-size: 0.7rem;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0 12px;
  margin-bottom: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #4b5563;
  font-size: 0.9rem;
  transition: all 0.2s;
  position: relative;
}

.nav-item:hover {
  background: #f3f4f6;
}

.nav-item.active {
  background: #fef2f2;
  color: var(--primary);
  font-weight: 600;
}

.nav-item-icon {
  width: 20px;
  text-align: center;
}

.nav-badge {
  position: absolute;
  right: 12px;
  background: var(--primary);
  color: white;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid #e5e7eb;
}

.online-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #6b7280;
}

.online-dot {
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  min-height: 100vh;
}

/* Top Header */
.top-header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-logo {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--primary) 0%, #ef4444 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}

.header-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: #1f2937;
}

.header-mode {
  font-size: 0.75rem;
  color: #6b7280;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-online {
  background: #dcfce7;
  color: #16a34a;
}

.lang-select {
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  background: white;
}

.mode-btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.mode-btn-citizen {
  background: #fef2f2;
  color: var(--primary);
  border: 1px solid #fecaca;
}

.mode-btn-afad {
  background: var(--primary);
  color: white;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Page Content */
.page-content {
  padding: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
}

.page-subtitle {
  color: #6b7280;
  margin-bottom: 24px;
}

/* Cards */
.card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 20px;
  margin-bottom: 16px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.card-title {
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 20px;
  text-align: center;
}

.stat-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.stat-label {
  font-size: 0.85rem;
  color: #6b7280;
}

/* Buttons */
.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

.btn-outline {
  background: white;
  border: 1px solid #e5e7eb;
  color: #4b5563;
}

.btn-outline:hover {
  background: #f9fafb;
}

.btn-success {
  background: var(--success);
  color: white;
}

.btn-block {
  width: 100%;
  justify-content: center;
}

/* Form Elements */
.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.9rem;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
}

.form-select {
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
}

/* Toggle Switch */
.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;
}

.toggle-info h4 {
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 4px;
}

.toggle-info p {
  font-size: 0.8rem;
  color: #6b7280;
}

.toggle-switch {
  width: 48px;
  height: 28px;
  background: #e5e7eb;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
}

.toggle-switch.active {
  background: var(--primary);
}

.toggle-switch::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: transform 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.toggle-switch.active::after {
  transform: translateX(20px);
}

/* Emergency Contacts */
.emergency-card {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}

.emergency-header {
  background: var(--primary);
  color: white;
  padding: 12px 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.emergency-list {
  padding: 8px 0;
}

.emergency-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #fecaca;
}

.emergency-item:last-child {
  border-bottom: none;
}

.emergency-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

/* FAQ Accordion */
.faq-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  background: white;
  font-weight: 500;
}

.faq-answer {
  padding: 0 16px 16px;
  color: #6b7280;
  font-size: 0.9rem;
}

/* Map Container */
.map-container {
  height: 400px;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.map-overlay {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: rgba(255,255,255,0.95);
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.map-coords {
  font-size: 0.85rem;
  color: #4b5563;
}

.map-alert {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--primary);
}

.map-controls {
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.map-control-btn {
  width: 36px;
  height: 36px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Fire zones in map */
.fire-zone {
  position: absolute;
  border: 3px dashed var(--primary);
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.1);
}

.safe-zone {
  position: absolute;
  border: 2px solid var(--success);
  border-radius: 50%;
  background: rgba(22, 163, 74, 0.1);
}

/* Theme Toggle */
.theme-toggle {
  display: flex;
  gap: 8px;
}

.theme-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.theme-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 48px 24px;
  color: #6b7280;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

/* Drone Feed */
.drone-feed {
  background: #1f2937;
  border-radius: 12px;
  overflow: hidden;
}

.drone-header {
  background: #111827;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.drone-live {
  display: flex;
  align-items: center;
  gap: 8px;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* SOS Button with Progress Bar */
.sos-button-container {
  position: relative;
  width: 100%;
}

.sos-button {
  width: 100%;
  padding: 20px 24px;
  font-size: 1.2rem;
  font-weight: 700;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
}

.sos-button:active {
  transform: scale(0.98);
}

.sos-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #991b1b;
  transition: width 0.05s linear;
  z-index: 1;
}

.sos-button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.sos-button.holding {
  animation: sosShake 0.1s infinite;
}

@keyframes sosShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

.drone-video {
  height: 300px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.thermal-spot {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #ff0000 0%, #ff6600 50%, transparent 70%);
  animation: pulse 2s infinite;
}

.drone-info {
  padding: 12px 16px;
  background: #111827;
  color: #9ca3af;
  font-size: 0.85rem;
  display: flex;
  gap: 24px;
}

/* Responsive */
@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .main-content {
    margin-left: 0;
    padding-bottom: 80px;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile Bottom Navigation */
.mobile-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 8px 0;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

@media (max-width: 1024px) {
  .mobile-nav {
    display: flex;
    justify-content: space-around;
  }
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border: none;
  background: none;
  cursor: pointer;
  color: #6b7280;
  font-size: 0.7rem;
  transition: color 0.2s;
}

.mobile-nav-item.active {
  color: var(--primary);
}

.mobile-nav-item span:first-child {
  font-size: 20px;
}
`;

const LANGS = { tr: "Türkçe", ku: "Kürtçe", en: "English" };

// Translations
const T = {
  // Navigation
  dashboard: { tr: "Anasayfa", ku: "Serrûpel", en: "Dashboard" },
  pendingReports: { tr: "Bekleyen İhbarlar", ku: "Ragihandinên Li Benda", en: "Pending Reports" },
  fireMap: { tr: "Yangın Haritası", ku: "Nexşeya Agir", en: "Fire Map" },
  maps: { tr: "Haritalar", ku: "Nexşe", en: "Maps" },
  fires: { tr: "Yangınlar", ku: "Agir", en: "Fires" },
  volunteers: { tr: "Gönüllüler", ku: "Dilxwaz", en: "Volunteers" },
  droneThermal: { tr: "Drone Termal Görüntü", ku: "Dîmena Termal a Dronê", en: "Drone Thermal" },
  offlineMap: { tr: "Çevrimdışı Kaçış Haritası", ku: "Nexşeya Revînê ya Offline", en: "Offline Escape Map" },
  settings: { tr: "Ayarlar", ku: "Mîheng", en: "Settings" },
  help: { tr: "Yardım", ku: "Alîkarî", en: "Help" },
  
  // Header
  online: { tr: "Çevrimiçi", ku: "Serhêl", en: "Online" },
  citizenMode: { tr: "Vatandaş Modu", ku: "Moda Welatiyan", en: "Citizen Mode" },
  afadMode: { tr: "AFAD / İtfaiye Modu", ku: "Moda AFAD / Agirkuj", en: "AFAD / Fire Mode" },
  
  // Dashboard
  welcome: { tr: "Hoş geldiniz", ku: "Bi xêr hatî", en: "Welcome" },
  liveDashboard: { tr: "Canlı Dashboard", ku: "Dashboard Zindî", en: "Live Dashboard" },
  activeVolunteers: { tr: "Aktif Gönüllüler", ku: "Dilxwazên Çalak", en: "Active Volunteers" },
  highIntensity: { tr: "Yüksek Yoğunluk", ku: "Tundiya Bilind", en: "High Intensity" },
  recentEmergency: { tr: "Son Acil Durumlar", ku: "Rewşên Acîl ên Dawî", en: "Recent Emergency Reports" },
  noEmergency: { tr: "Acil durum bildirimi yok", ku: "Ragihandina rewşa acîl tune", en: "No emergency reports" },
  allClear: { tr: "Bölgenizde her şey yolunda", ku: "Li herêma we her tişt baş e", en: "All clear in your area" },
  volunteerStatus: { tr: "Gönüllü Durumu", ku: "Rewşa Dilxwazan", en: "Volunteer Status" },
  noActiveVolunteers: { tr: "Henüz aktif gönüllü yok", ku: "Hîn dilxwazên çalak tune", en: "No active volunteers yet" },
  
  // Emergency
  emergencyReport: { tr: "Acil İhbar", ku: "Ragihandina Acîl", en: "Emergency Report" },
  holdToSend: { tr: "2 saniye basılı tutun - konum otomatik alınır, ardından durumu açıklayın", ku: "2 saniye bigire - cîh bixweber tê girtin, paşê rewşê rave bike", en: "Hold for 2 seconds - location captured automatically, then describe the situation" },
  keepHolding: { tr: "Basılı tutmaya devam edin...", ku: "Berdewam bike...", en: "Keep holding..." },
  sosButton: { tr: "SOS İHBAR ET", ku: "SOS RAGIHANDINA", en: "SOS REPORT" },
  
  // Quick Tools
  quickTools: { tr: "Hızlı Araçlar", ku: "Amûrên Bilez", en: "Quick Tools" },
  downloadMap: { tr: "Harita İndir", ku: "Nexşeyê Daxîne", en: "Download Map" },
  download: { tr: "İndir", ku: "Daxîne", en: "Download" },
  addFamily: { tr: "Aile Ekle", ku: "Malbatê Zêde Bike", en: "Add Family" },
  open: { tr: "Aç", ku: "Veke", en: "Open" },
  switchToAfad: { tr: "AFAD Moduna Geç", ku: "Bibe Moda AFAD", en: "Switch to AFAD" },
  switchBtn: { tr: "Geç", ku: "Biguherîne", en: "Switch" },
  
  // Alerts
  activeAlerts: { tr: "Aktif Uyarılar (FIRMS)", ku: "Hişyariyên Çalak (FIRMS)", en: "Active Alerts (FIRMS)" },
  mediumIntensity: { tr: "Orta Yoğunluk", ku: "Tundiya Navîn", en: "Medium Intensity" },
  
  // Volunteers Page
  volunteerNetwork: { tr: "Gönüllü Ağı", ku: "Tora Dilxwazan", en: "Volunteer Network" },
  signUpToHelp: { tr: "Riskli bölgelerde görev almak için kayıt olun", ku: "Ji bo alîkariyê li deverên xeternak tomar bibin", en: "Sign up to help in high-risk areas" },
  role: { tr: "Görev Türü", ku: "Cureya Peywirê", en: "Role" },
  patrol: { tr: "Devriye", ku: "Dewriye", en: "Patrol" },
  rescue: { tr: "Kurtarma", ku: "Rizgarkirin", en: "Rescue" },
  medical: { tr: "Sağlık", ku: "Tenduristî", en: "Medical" },
  logistics: { tr: "Lojistik", ku: "Lojîstîk", en: "Logistics" },
  join: { tr: "Gönüllü Ol", ku: "Bibe Dilxwaz", en: "Join" },
  getQr: { tr: "QR Al", ku: "QR Bistîne", en: "Get QR" },
  registeredVolunteers: { tr: "Kayıtlı Gönüllüler", ku: "Dilxwazên Tomarkirî", en: "Registered Volunteers" },
  noVolunteers: { tr: "Henüz gönüllü yok", ku: "Hîn dilxwaz tune", en: "No volunteers yet" },
  
  // Drone Page
  droneOff: { tr: "Kapalı", ku: "Girtî", en: "Off" },
  droneSystemOff: { tr: "Drone termal görüntü sistemi kapalı", ku: "Sîstema dîmena termal a dronê girtî ye", en: "Drone thermal feed is off" },
  start: { tr: "Aç", ku: "Dest Pê Bike", en: "Start" },
  speed: { tr: "Hız", ku: "Lez", en: "Speed" },
  
  // Offline Maps
  noCachedMap: { tr: "Önbelleğe alınmış harita yok", ku: "Nexşeya cache tune", en: "No cached map" },
  cacheMap: { tr: "Harita Önbellekle", ku: "Nexşeyê Cache Bike", en: "Cache Map" },
  savedMap: { tr: "Kaydedilmiş Harita", ku: "Nexşeya Tomarkirî", en: "Saved Map" },
  
  // Settings
  accessibility: { tr: "Erişilebilirlik", ku: "Gihîştin", en: "Accessibility" },
  customizeAccess: { tr: "Daha iyi erişilebilirlik için deneyiminizi özelleştirin", ku: "Ji bo gihîştina çêtir ezmûna xwe xweş bikin", en: "Customize your experience for better accessibility" },
  bigText: { tr: "Büyük Yazı", ku: "Nivîsa Mezin", en: "Big Text" },
  bigTextDesc: { tr: "Daha iyi okunabilirlik için yazı boyutunu artırın", ku: "Ji bo xwendina çêtir mezinahiya nivîsê zêde bikin", en: "Increase text size for better readability" },
  colorBlind: { tr: "Renk Körü", ku: "Korê Rengan", en: "Color Blind" },
  colorBlindDesc: { tr: "Yalnızca renkler yerine desenler kullanın", ku: "Li şûna rengan tenê nexşeyan bikar bînin", en: "Use patterns instead of colors only" },
  voiceCommand: { tr: "Sesli Komut", ku: "Fermana Dengî", en: "Voice Command" },
  voiceCommandDesc: { tr: "Uygulamayı sesli komutlarla kontrol edin", ku: "Serlêdanê bi fermanên dengî kontrol bikin", en: "Control the app with voice commands" },
  appearance: { tr: "Görünüm", ku: "Xuyang", en: "Appearance" },
  customizeLook: { tr: "Uygulamanın görünümünü özelleştirin", ku: "Xuyanga serlêdanê xweş bikin", en: "Customize the look of the application" },
  theme: { tr: "Tema", ku: "Tema", en: "Theme" },
  themeDesc: { tr: "Açık ve koyu mod arasında geçiş yapın", ku: "Di navbera moda ronahî û tarî de biguherînin", en: "Switch between light and dark mode" },
  language: { tr: "Dil", ku: "Ziman", en: "Language" },
  
  // Help
  helpFaq: { tr: "Yardım & SSS", ku: "Alîkarî & Pirsên Pir Pirsîn", en: "Help & FAQ" },
  emergencyContacts: { tr: "Acil Numaralar", ku: "Hejmarên Acîl", en: "Emergency Contacts" },
  fireDepartment: { tr: "İtfaiye", ku: "Agirkuj", en: "Fire Department" },
  police: { tr: "Polis", ku: "Polîs", en: "Police" },
  ambulance: { tr: "Ambulans", ku: "Ambûlans", en: "Ambulance" },
  faq: { tr: "Sıkça Sorulan Sorular", ku: "Pirsên Pir Pirsîn", en: "Frequently Asked Questions" },
  faqDesc: { tr: "Uygulama kullanımı hakkında sık sorulan sorular", ku: "Pirsên hevpar li ser karanîna serlêdanê", en: "Common questions about using the app" },
  
  // Map
  fireMapTitle: { tr: "Yangın Haritası", ku: "Nexşeya Agir", en: "Fire Map" },
  liveFireTracking: { tr: "Canlı yangın takip haritası", ku: "Nexşeya şopandina agir a zindî", en: "Live fire tracking map" },
  highIntensityDetected: { tr: "yüksek yoğunluklu yangın tespit edildi", ku: "agirê bi tundiya bilind hat dîtin", en: "high-intensity fires detected" },
  checkEvacuation: { tr: "Tahliye rotalarını kontrol edin ve güncellemeler için takipte kalın", ku: "Rêyên derketinê kontrol bikin û ji bo nûvekirinên li şopa bimînin", en: "Check evacuation routes and stay alert for updates" },
  
  // Misc
  noPendingReports: { tr: "Bekleyen ihbar bulunmuyor", ku: "Ragihandinên li bendê tune", en: "No pending reports" },
  emergencyReviewDesc: { tr: "Onay bekleyen acil durum bildirimleri", ku: "Ragihandinên rewşa acîl ên li benda pejirandinê", en: "Emergency reports awaiting review" },
  liveFeedActive: { tr: "Canlı yayın aktif", ku: "Weşana zindî çalak e", en: "Live feed active" },
  
  // Education Module
  education: { tr: "Eğitim Modülü", ku: "Modula Perwerdehiyê", en: "Education Module" },
  educationDesc: { tr: "Yangın öncesi, sırası ve sonrası ne yapmalısınız öğrenin", ku: "Fêr bibin ka berî, di dema û piştî agir de çi bikin", en: "Learn what to do before, during and after a fire" },
  beforeFire: { tr: "Yangın Öncesi", ku: "Berî Agir", en: "Before Fire" },
  duringFire: { tr: "Yangın Sırası", ku: "Di Dema Agir de", en: "During Fire" },
  afterFire: { tr: "Yangın Sonrası", ku: "Piştî Agir", en: "After Fire" },
  watchVideo: { tr: "Eğitim Videosunu İzle", ku: "Vîdyoya Perwerdehiyê Temaşe Bike", en: "Watch Training Video" },
  stepByStep: { tr: "Adım Adım Talimatlar", ku: "Rêwerzên Gav bi Gav", en: "Step by Step Instructions" },
};

export default function App() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [mode, setMode] = useState("citizen"); // citizen | afad
  const [lang, setLang] = useState("tr");
  
  // User state
  const [name, setName] = useState(localStorage.getItem("hes_name") || "");
  const [phone, setPhone] = useState(localStorage.getItem("hes_phone") || "");
  
  // Settings state
  const [bigText, setBigText] = useState(false);
  const [colorBlind, setColorBlind] = useState(false);
  const [voiceCmd, setVoiceCmd] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Data state
  const [volunteers, setVolunteers] = useState([]);
  const [pendingReports, setPendingReports] = useState(0);
  const [activeVolunteers, setActiveVolunteers] = useState(0);
  const [highIntensityFires, setHighIntensityFires] = useState(1);
  const [offlineMap, setOfflineMap] = useState(null);
  const [droneFeedActive, setDroneFeedActive] = useState(false);
  const [droneViewMode, setDroneViewMode] = useState("thermal");
  const [familyMembers, setFamilyMembers] = useState([]);
  const [volunteerRole, setVolunteerRole] = useState("patrol");
  
  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);
  
  // Education tab state
  const [educationTab, setEducationTab] = useState("before");

  // SOS Button state
  const [sosProgress, setSosProgress] = useState(0);
  const [sosHolding, setSosHolding] = useState(false);
  const [showSosModal, setShowSosModal] = useState(false);
  const [sosMessage, setSosMessage] = useState("");
  const [sosLocation, setSosLocation] = useState(null);
  const [sosSending, setSosSending] = useState(false);
  const sosTimerRef = useRef(null);
  const sosIntervalRef = useRef(null);

  // Animal emergency state
  const [showAnimalModal, setShowAnimalModal] = useState(false);
  const [animalType, setAnimalType] = useState("wild");
  const [animalCount, setAnimalCount] = useState("1-5");
  const [animalAlertSending, setAnimalAlertSending] = useState(false);

  // SOS Button handlers
  const startSosHold = () => {
    setSosHolding(true);
    setSosProgress(0);
    
    const startTime = Date.now();
    const duration = 2000; // 2 seconds
    
    sosIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setSosProgress(progress);
      
      if (progress >= 100) {
        clearInterval(sosIntervalRef.current);
        triggerSos();
      }
    }, 50);
  };

  const endSosHold = () => {
    setSosHolding(false);
    setSosProgress(0);
    if (sosIntervalRef.current) {
      clearInterval(sosIntervalRef.current);
    }
  };

  const triggerSos = () => {
    setSosHolding(false);
    setSosProgress(0);
    if (sosIntervalRef.current) {
      clearInterval(sosIntervalRef.current);
    }
    
    // Get location and show modal
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setSosLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setShowSosModal(true);
      },
      (err) => {
        setSosLocation(null);
        setShowSosModal(true);
      }
    );
  };

  const sendSosReport = () => {
    setSosSending(true);
    
    const payload = {
      name,
      phone,
      location: sosLocation,
      message: sosMessage,
      time: new Date().toISOString()
    };
    
    console.log("SOS gönderiliyor:", payload);
    
    // Simulate sending
    setTimeout(() => {
      setSosSending(false);
      setShowSosModal(false);
      setSosMessage("");
      alert(lang === "tr" 
        ? "🆘 ACİL İHBAR GÖNDERİLDİ!\n\nKonum ve mesajınız yetkililere iletildi." 
        : "🆘 EMERGENCY SENT!\n\nYour location and message have been sent to authorities.");
    }, 1500);
  };

  // Send animal emergency alert
  const sendAnimalAlert = () => {
    setAnimalAlertSending(true);
    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const payload = {
          type: "ANIMAL_EMERGENCY",
          animalType,
          animalCount,
          location: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          },
          timestamp: new Date().toISOString()
        };
        
        console.log("Hayvan ihbarı gönderiliyor:", payload);
        
        setTimeout(() => {
          setAnimalAlertSending(false);
          setShowAnimalModal(false);
          alert(lang === "tr" 
            ? "🐾 HAYVAN İHBARI GÖNDERİLDİ!\n\nYetkililer bilgilendirildi."
            : "🐾 ANIMAL ALERT SENT!\n\nAuthorities have been notified.");
        }, 1500);
      },
      (err) => {
        setTimeout(() => {
          setAnimalAlertSending(false);
          setShowAnimalModal(false);
          alert(lang === "tr" 
            ? "🐾 HAYVAN İHBARI GÖNDERİLDİ!\n\n(Konum alınamadı)"
            : "🐾 ANIMAL ALERT SENT!\n\n(Location unavailable)");
        }, 1500);
      }
    );
  };

  // Save preferences
  useEffect(() => {
    localStorage.setItem("app_prefs", JSON.stringify({ bigText, colorBlind, voiceCmd, darkMode }));
  }, [bigText, colorBlind, voiceCmd, darkMode]);

  // Navigation items
  const navItems = [
    { id: "dashboard", icon: "📊", label: T.dashboard[lang] },
    { id: "reports", icon: "⚠️", label: T.pendingReports[lang] },
    { id: "maps", icon: "🗺️", label: T.maps[lang] },
    { id: "fires", icon: "🔥", label: T.fires[lang], badge: highIntensityFires },
    { id: "volunteers", icon: "👥", label: T.volunteers[lang] },
    { id: "education", icon: "🎓", label: T.education[lang] },
  ];

  const toolItems = [
    { id: "offline", icon: "📶", label: T.offlineMap[lang] },
    { id: "settings", icon: "⚙️", label: T.settings[lang] },
    { id: "help", icon: "❓", label: T.help[lang] },
  ];

  const faqItems = [
    { 
      q: { tr: "Acil durumu nasıl bildiririm?", ku: "Ez çawa rewşa acîl radigihînim?", en: "How do I report an emergency?" },
      a: { tr: "Ana sayfadaki kırmızı 'Acil İhbar' butonuna 2 saniye basılı tutun. Konum, fotoğraf ve ses kaydı otomatik olarak gönderilir.", ku: "Li ser bişkoja sor a 'Ragihandina Acîl' ya li ser rûpela sereke 2 saniye bigire. Cîh, wêne û dengê dê bixweber werin şandin.", en: "Hold the red 'Emergency' button for 2 seconds. Location, photo and audio will be sent automatically." }
    },
    {
      q: { tr: "Çevrimdışı harita nasıl kullanılır?", ku: "Nexşeya offline çawa tê bikaranîn?", en: "How to use offline maps?" },
      a: { tr: "İnternet bağlantınız varken 'Harita Önbellekle' butonuna tıklayın. Harita cihazınıza kaydedilir ve internet olmadan kullanılabilir.", ku: "Dema ku girêdana we ya înternet hebe li ser bişkoja 'Nexşeyê Cache Bike' bikirtînin. Nexşe dê li cîhaza we were tomarkirin û bêyî înternet were bikaranîn.", en: "Click 'Cache Map' while online. The map will be saved and available offline." }
    },
    {
      q: { tr: "Gönüllü nasıl olunur?", ku: "Meriv çawa dibe dilxwaz?", en: "How to become a volunteer?" },
      a: { tr: "Gönüllüler sayfasından rol seçip 'Gönüllü Ol' butonuna tıklayın. QR kodunuzu alarak görev yerinde kullanabilirsiniz.", ku: "Ji rûpela dilxwazan rol hilbijêrin û li ser bişkoja 'Bibe Dilxwaz' bikirtînin. QR koda xwe bistînin û li cihê peywirê bikar bînin.", en: "Select a role on the Volunteers page and click 'Join'. Get your QR code for check-in." }
    },
  ];

  // Save profile
  const saveProfile = () => {
    localStorage.setItem("hes_name", name);
    localStorage.setItem("hes_phone", phone);
    alert(lang === "tr" ? "Profil kaydedildi" : "Profile saved");
  };

  // Join volunteer
  const joinVolunteer = () => {
    if (!name) return alert(lang === "tr" ? "Lütfen isim girin" : "Please enter name");
    const v = { id: Date.now(), name, role: volunteerRole };
    setVolunteers([...volunteers, v]);
    setActiveVolunteers(activeVolunteers + 1);
    alert(lang === "tr" ? "Gönüllü kaydınız alındı!" : "Volunteer registered!");
  };

  // Cache map
  const cacheMap = () => {
    setOfflineMap({ id: Date.now(), name: "Cached " + new Date().toLocaleString() });
    alert(lang === "tr" ? "Harita önbelleğe alındı!" : "Map cached!");
  };

  // Add family member
  const addFamilyMember = () => {
    const member = { 
      id: Date.now(), 
      name: `${lang === "tr" ? "Aile Üyesi" : "Member"} ${familyMembers.length + 1}`,
      lat: 37.0 + Math.random() * 0.02,
      lon: 38.0 + Math.random() * 0.02
    };
    setFamilyMembers([...familyMembers, member]);
  };

  // Render page content
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <div>
                <h1 className="page-title">
                  {mode === "afad" ? T.afadMode[lang] : T.citizenMode[lang]}
                </h1>
                <p className="page-subtitle">{T.welcome[lang]}</p>
              </div>
              {mode === "afad" && (
                <button className="btn btn-primary">📡 {T.liveDashboard[lang]}</button>
              )}
            </div>

            {mode === "afad" ? (
              <>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: "#fef3c7" }}>⚠️</div>
                    <div className="stat-value">{pendingReports}</div>
                    <div className="stat-label">{T.pendingReports[lang]}</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: "#dbeafe" }}>👥</div>
                    <div className="stat-value">{activeVolunteers}</div>
                    <div className="stat-label">{T.activeVolunteers[lang]}</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: "#fee2e2" }}>🔥</div>
                    <div className="stat-value">{highIntensityFires}</div>
                    <div className="stat-label">{T.highIntensity[lang]}</div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">⚠️ {T.recentEmergency[lang]}</h3>
                  </div>
                  {pendingReports === 0 ? (
                    <div className="empty-state">
                      <div className="empty-icon">✓</div>
                      <p>{T.noEmergency[lang]}</p>
                      <p style={{ fontSize: "0.85rem" }}>{T.allClear[lang]}</p>
                    </div>
                  ) : (
                    <p>Reports list here...</p>
                  )}
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">👥 {T.volunteerStatus[lang]}</h3>
                  </div>
                  {volunteers.length === 0 ? (
                    <p style={{ color: "#6b7280" }}>{T.noActiveVolunteers[lang]}</p>
                  ) : (
                    volunteers.map(v => (
                      <div key={v.id} style={{ padding: "8px 0", borderBottom: "1px solid #f3f4f6" }}>
                        {v.name} - {v.role}
                      </div>
                    ))
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Citizen Mode Dashboard */}
                <div className="card" style={{ background: "#fef2f2", border: "2px solid #fecaca" }}>
                  <h3 style={{ color: "var(--primary)", marginBottom: 16 }}>🔥 {T.emergencyReport[lang]}</h3>
                  <p style={{ marginBottom: 16, color: "#6b7280" }}>
                    {T.holdToSend[lang]}
                  </p>
                  <div className="sos-button-container">
                    <button 
                      className={`sos-button ${sosHolding ? "holding" : ""}`}
                      onMouseDown={startSosHold}
                      onMouseUp={endSosHold}
                      onMouseLeave={endSosHold}
                      onTouchStart={startSosHold}
                      onTouchEnd={endSosHold}
                    >
                      <div className="sos-progress" style={{ width: `${sosProgress}%` }}></div>
                      <div className="sos-button-content">
                        🆘 {T.sosButton[lang]}
                      </div>
                    </button>
                  </div>
                  {sosHolding && (
                    <p style={{ textAlign: "center", marginTop: 12, color: "var(--primary)", fontWeight: 600, fontSize: "0.9rem" }}>
                      {T.keepHolding[lang]}
                    </p>
                  )}
                </div>

                {/* Animal Emergency Button */}
                <div className="card" style={{ background: "#fef9c3", border: "2px solid #facc15" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 32 }}>🐾</div>
                    <div>
                      <h3 style={{ color: "#a16207", fontWeight: 600 }}>
                        {lang === "tr" ? "Hayvanlar İçin Acil Müdahale" : "Animal Emergency Response"}
                      </h3>
                      <p style={{ fontSize: "0.85rem", color: "#854d0e" }}>
                        {lang === "tr" 
                          ? "Yangın bölgesinde hayvan gördüyseniz bu butona basarak yetkililere bildirin"
                          : "If you see animals in the fire area, press this button to alert authorities"}
                      </p>
                    </div>
                  </div>
                  <button 
                    className="btn btn-block"
                    onClick={() => setShowAnimalModal(true)}
                    style={{ 
                      background: "#ca8a04", 
                      color: "white",
                      padding: "16px 24px",
                      fontSize: "1rem",
                      fontWeight: 700
                    }}
                  >
                    🐾 {lang === "tr" ? "Hayvanlar İçin Acil Müdahale Butonu" : "Animal Emergency Button"}
                  </button>
                </div>

                <div className="card">
                  <h3 className="card-title" style={{ marginBottom: 16 }}>{T.quickTools[lang]}</h3>
                  <div style={{ display: "grid", gap: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12, background: "#f9fafb", borderRadius: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span>📶</span>
                        <span>{T.downloadMap[lang]}</span>
                      </div>
                      <button className="btn btn-outline" onClick={cacheMap}>
                        {offlineMap ? "Cached" : T.download[lang]}
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12, background: "#f9fafb", borderRadius: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span>👪</span>
                        <span>{T.addFamily[lang]}</span>
                      </div>
                      <button className="btn btn-outline" onClick={addFamilyMember}>{familyMembers.length}</button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12, background: "#f9fafb", borderRadius: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span>🔄</span>
                        <span>{T.switchToAfad[lang]}</span>
                      </div>
                      <button className="btn btn-outline" onClick={() => setMode("afad")}>
                        {T.switchBtn[lang]}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="card-title" style={{ marginBottom: 16 }}>{T.activeAlerts[lang]}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 12, background: "#fef3c7", borderRadius: 8, marginBottom: 8 }}>
                    <span>🔥</span>
                    <span>Region 1 - {T.mediumIntensity[lang]}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 12, background: "#fee2e2", borderRadius: 8 }}>
                    <span>🔥</span>
                    <span>Region 2 - {T.highIntensity[lang]}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        );

      case "reports":
        return (
          <div>
            <h1 className="page-title">{T.pendingReports[lang]}</h1>
            <p className="page-subtitle">{T.emergencyReviewDesc[lang]}</p>
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <p>{T.noPendingReports[lang]}</p>
            </div>
          </div>
        );

      case "maps":
        return (
          <div>
            <h1 className="page-title">🗺️ {T.maps[lang]}</h1>
            <p className="page-subtitle">{lang === "tr" ? "Google Maps ile konumunuzu ve çevrenizi görüntüleyin" : "View your location and surroundings with Google Maps"}</p>
            
            <div className="card" style={{ marginBottom: 16 }}>
              <h3 className="card-title" style={{ marginBottom: 16 }}>📍 {lang === "tr" ? "Konum Haritası" : "Location Map"}</h3>
              <div style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: 12,
                border: "1px solid #e5e7eb"
              }}>
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6243874.239498022!2d32.0!3d39.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sT%C3%BCrkiye!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
                  title="Google Maps - Türkiye"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a 
                  href="https://www.google.com/maps/@39.0,35.0,6z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ textDecoration: "none" }}
                >
                  🗺️ {lang === "tr" ? "Google Maps'te Aç" : "Open in Google Maps"}
                </a>
              </div>
            </div>
          </div>
        );

      case "fires":
        return (
          <div>
            <h1 className="page-title">🔥 {T.fires[lang]} - NASA FIRMS</h1>
            <p className="page-subtitle">{lang === "tr" ? "Gerçek zamanlı uydu verileriyle aktif yangınları takip edin" : "Track active fires with real-time satellite data"}</p>

            <div className="card" style={{ background: "#eff6ff", border: "1px solid #bfdbfe", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 32 }}>🛰️</span>
                <div>
                  <h4 style={{ color: "#1e40af", marginBottom: 4 }}>NASA FIRMS - {lang === "tr" ? "Uydu Yangın Takip Sistemi" : "Satellite Fire Tracking System"}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#3b82f6" }}>
                    {lang === "tr" 
                      ? "Gerçek zamanlı uydu verileriyle dünya genelindeki aktif yangınları görüntüleyin" 
                      : "View active fires worldwide with real-time satellite data"}
                  </p>
                </div>
              </div>
              <a 
                href="https://firms.modaps.eosdis.nasa.gov/map/#d:24hrs;@39.0,35.0,6.0z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
                style={{ textDecoration: "none", justifyContent: "center" }}
              >
                🛰️ {lang === "tr" ? "NASA FIRMS Yangın Haritasını Aç" : "Open NASA FIRMS Fire Map"}
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
              <div className="card" style={{ textAlign: "center", padding: 16 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🛰️</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>MODIS & VIIRS</div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                  {lang === "tr" ? "NASA Uyduları" : "NASA Satellites"}
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: 16 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>⏱️</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>
                  {lang === "tr" ? "Gerçek Zamanlı" : "Real-Time"}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                  {lang === "tr" ? "24 saat içinde güncellenir" : "Updated within 24 hours"}
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: 16 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🌍</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>
                  {lang === "tr" ? "Dünya Geneli" : "Worldwide"}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                  {lang === "tr" ? "Tüm dünyayı kapsar" : "Covers entire globe"}
                </div>
              </div>
            </div>

            <div className="card">
              <h4 style={{ marginBottom: 12 }}>{lang === "tr" ? "Harita Göstergeleri" : "Map Legend"}</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 16, height: 16, background: "#ff0000", borderRadius: 4 }}></div>
                  <span style={{ fontSize: "0.85rem" }}>{lang === "tr" ? "Son 24 saat - Yüksek Güvenilirlik" : "Last 24h - High Confidence"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 16, height: 16, background: "#ff6600", borderRadius: 4 }}></div>
                  <span style={{ fontSize: "0.85rem" }}>{lang === "tr" ? "Son 24 saat - Orta Güvenilirlik" : "Last 24h - Medium Confidence"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 16, height: 16, background: "#ffcc00", borderRadius: 4 }}></div>
                  <span style={{ fontSize: "0.85rem" }}>{lang === "tr" ? "Son 24 saat - Düşük Güvenilirlik" : "Last 24h - Low Confidence"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 16, height: 16, background: "#ff00ff", borderRadius: 4 }}></div>
                  <span style={{ fontSize: "0.85rem" }}>{lang === "tr" ? "Son 48 saat" : "Last 48h"}</span>
                </div>
              </div>
            </div>

            <div className="map-alert" style={{ marginTop: 16 }}>
              <span>ℹ️</span>
              <div>
                <strong>{lang === "tr" ? "Nasıl Kullanılır?" : "How to Use?"}</strong>
                <p style={{ fontSize: "0.85rem", marginTop: 4 }}>
                  {lang === "tr" 
                    ? "Yukarıdaki butona tıklayarak NASA FIRMS haritasını yeni sekmede açın. Haritada kırmızı noktalar aktif yangınları gösterir."
                    : "Click the button above to open NASA FIRMS map in a new tab. Red dots on the map indicate active fires."}
                </p>
              </div>
            </div>
          </div>
        );

      case "volunteers":
        return (
          <div>
            <h1 className="page-title">{T.volunteerNetwork[lang]}</h1>
            <p className="page-subtitle">{T.signUpToHelp[lang]}</p>
            
            <div className="card">
              <div className="form-group">
                <label className="form-label">{T.role[lang]}</label>
                <select className="form-select" value={volunteerRole} onChange={(e) => setVolunteerRole(e.target.value)}>
                  <option value="patrol">{T.patrol[lang]}</option>
                  <option value="rescue">{T.rescue[lang]}</option>
                  <option value="medical">{T.medical[lang]}</option>
                  <option value="logistics">{T.logistics[lang]}</option>
                </select>
              </div>
              
              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={joinVolunteer}>
                  👥 {T.join[lang]}
                </button>
                <button className="btn btn-outline">
                  📱 {T.getQr[lang]}
                </button>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title" style={{ marginBottom: 16 }}>{T.registeredVolunteers[lang]}</h3>
              {volunteers.length === 0 ? (
                <p style={{ color: "#6b7280" }}>{T.noVolunteers[lang]}</p>
              ) : (
                volunteers.map(v => (
                  <div key={v.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #f3f4f6" }}>
                    <span>{v.name}</span>
                    <span style={{ background: "#dbeafe", padding: "4px 12px", borderRadius: 12, fontSize: "0.8rem" }}>{v.role}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        );

      case "offline":
        return (
          <div>
            <h1 className="page-title">{T.offlineMap[lang]}</h1>
            <p className="page-subtitle">{offlineMap ? offlineMap.name : T.noCachedMap[lang]}</p>
            
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span style={{ background: "#dcfce7", color: "#16a34a", padding: "4px 12px", borderRadius: 12, fontSize: "0.8rem" }}>
                    {navigator.onLine ? T.online[lang] : "Offline"}
                  </span>
                </div>
                <button className="btn btn-outline" onClick={cacheMap}>
                  ⬇️ {T.cacheMap[lang]}
                </button>
              </div>
            </div>

            {offlineMap && (
              <div className="card">
                <h3 className="card-title">{T.savedMap[lang]}</h3>
                <p style={{ color: "#6b7280", marginTop: 8 }}>{offlineMap.name}</p>
              </div>
            )}
          </div>
        );

      case "settings":
        return (
          <div>
            <h1 className="page-title">⚙️ {T.settings[lang]}</h1>
            
            <div className="card">
              <h3 className="card-title" style={{ marginBottom: 8 }}>{T.accessibility[lang]}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 16 }}>
                {T.customizeAccess[lang]}
              </p>
              
              <div className="toggle-row">
                <div className="toggle-info">
                  <h4>T {T.bigText[lang]}</h4>
                  <p>{T.bigTextDesc[lang]}</p>
                </div>
                <div className={`toggle-switch ${bigText ? "active" : ""}`} onClick={() => setBigText(!bigText)}></div>
              </div>
              
              <div className="toggle-row">
                <div className="toggle-info">
                  <h4>👁️ {T.colorBlind[lang]}</h4>
                  <p>{T.colorBlindDesc[lang]}</p>
                </div>
                <div className={`toggle-switch ${colorBlind ? "active" : ""}`} onClick={() => setColorBlind(!colorBlind)}></div>
              </div>
              
              <div className="toggle-row" style={{ borderBottom: "none" }}>
                <div className="toggle-info">
                  <h4>🎤 {T.voiceCommand[lang]}</h4>
                  <p>{T.voiceCommandDesc[lang]}</p>
                </div>
                <div className={`toggle-switch ${voiceCmd ? "active" : ""}`} onClick={() => setVoiceCmd(!voiceCmd)}></div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title" style={{ marginBottom: 8 }}>{T.appearance[lang]}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 16 }}>
                {T.customizeLook[lang]}
              </p>
              
              <div className="toggle-row">
                <div className="toggle-info">
                  <h4>🎨 {T.theme[lang]}</h4>
                  <p>{T.themeDesc[lang]}</p>
                </div>
                <div className="theme-toggle">
                  <button className={`theme-btn ${!darkMode ? "active" : ""}`} onClick={() => setDarkMode(false)}>☀️</button>
                  <button className={`theme-btn ${darkMode ? "active" : ""}`} onClick={() => setDarkMode(true)}>🌙</button>
                </div>
              </div>
              
              <div className="toggle-row" style={{ borderBottom: "none" }}>
                <div className="toggle-info">
                  <h4>🌐 {T.language[lang]}</h4>
                </div>
                <select className="form-select" style={{ width: "auto" }} value={lang} onChange={(e) => setLang(e.target.value)}>
                  {Object.keys(LANGS).map(k => (
                    <option key={k} value={k}>{LANGS[k]}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div>
            <h1 className="page-title">🎓 {T.education[lang]}</h1>
            <p className="page-subtitle">{T.educationDesc[lang]}</p>

            {/* Video Section */}
            <div className="card" style={{ marginBottom: 24 }}>
              <h3 className="card-title" style={{ marginBottom: 16 }}>🎬 {T.watchVideo[lang]}</h3>
              <div style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: 12,
                background: "#1f2937"
              }}>
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                  src="https://www.youtube.com/embed/NP7JAGGLFy0"
                  title="Yangın Güvenliği Eğitimi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p style={{ marginTop: 12, fontSize: "0.85rem", color: "#6b7280", textAlign: "center" }}>
                {lang === "tr" ? "AFAD Yangın Güvenliği Eğitim Videosu" : "AFAD Fire Safety Training Video"}
              </p>
            </div>

            {/* Tab Selection */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {["before", "during", "after"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setEducationTab(tab)}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: educationTab === tab ? "2px solid var(--primary)" : "1px solid #e5e7eb",
                    background: educationTab === tab ? "#fef2f2" : "white",
                    color: educationTab === tab ? "var(--primary)" : "#4b5563",
                    fontWeight: educationTab === tab ? 600 : 400,
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  {tab === "before" && "🛡️ "}{tab === "during" && "🔥 "}{tab === "after" && "🏠 "}
                  {tab === "before" ? T.beforeFire[lang] : tab === "during" ? T.duringFire[lang] : T.afterFire[lang]}
                </button>
              ))}
            </div>

            {/* Step by Step Instructions */}
            <div className="card">
              <h3 className="card-title" style={{ marginBottom: 16 }}>
                📋 {T.stepByStep[lang]} - {educationTab === "before" ? T.beforeFire[lang] : educationTab === "during" ? T.duringFire[lang] : T.afterFire[lang]}
              </h3>

              {educationTab === "before" && (
                <div>
                  {[
                    { tr: "Evinizin etrafındaki kuru otları ve çalıları temizleyin", en: "Clear dry grass and bushes around your home", ku: "Giyayên hişk û deviyên li dora mala xwe paqij bikin" },
                    { tr: "Acil durum çantası hazırlayın (su, ilaç, evrak, el feneri)", en: "Prepare an emergency bag (water, medicine, documents, flashlight)", ku: "Çenteyeke acîl amade bikin (av, derman, belge, çira destê)" },
                    { tr: "Aile ile buluşma noktası belirleyin", en: "Determine a meeting point with family", ku: "Bi malbatê re cihê hevdîtinê diyar bikin" },
                    { tr: "Acil numaraları (110, 112, 122) telefonunuza kaydedin", en: "Save emergency numbers (110, 112, 122) to your phone", ku: "Hejmarên acîl (110, 112, 122) li têlefona xwe tomar bikin" },
                    { tr: "Tahliye rotalarını önceden öğrenin", en: "Learn evacuation routes in advance", ku: "Rêyên derketinê ji berê fêr bibin" },
                    { tr: "Bahçe hortumunun çalıştığından emin olun", en: "Make sure the garden hose is working", ku: "Piştrast bikin ku hortûma baxçe dixebite" },
                    { tr: "Yanıcı maddeleri evden uzak tutun", en: "Keep flammable materials away from home", ku: "Madeyên şewitok ji malê dûr bihêlin" },
                    { tr: "Komşularınızla iletişim planı yapın", en: "Make a communication plan with neighbors", ku: "Bi cîranên xwe re plana ragihandinê çêbikin" }
                  ].map((step, index) => (
                    <div key={index} style={{
                      display: "flex",
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: index < 7 ? "1px solid #f3f4f6" : "none"
                    }}>
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#dcfce7",
                        color: "#16a34a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <div style={{ color: "#374151" }}>{step[lang]}</div>
                    </div>
                  ))}
                </div>
              )}

              {educationTab === "during" && (
                <div>
                  {[
                    { tr: "Panik yapmayın, sakin kalın", en: "Don't panic, stay calm", ku: "Panîk nekin, aram bimînin" },
                    { tr: "Hemen 110 (İtfaiye) veya 112'yi arayın", en: "Call 110 (Fire Department) or 112 immediately", ku: "Tavilê 110 (Agirkuj) an 112 bang bikin" },
                    { tr: "Pencere ve kapıları kapatın (havalandırmayı engelleyin)", en: "Close windows and doors (prevent ventilation)", ku: "Pencere û derîyan bigirin (hewayê asteng bikin)" },
                    { tr: "Islak havlu ile ağız ve burnunuzu kapatın", en: "Cover your mouth and nose with a wet towel", ku: "Devê xwe û pozê xwe bi destmalek şil bigirin" },
                    { tr: "Alçakta kalın - duman yukarı çıkar", en: "Stay low - smoke rises up", ku: "Li jêr bimînin - dûman bilind dibe" },
                    { tr: "Tahliye rotasını kullanarak bölgeden uzaklaşın", en: "Leave the area using the evacuation route", ku: "Bi rêya derketinê ji deverê dûr bikevin" },
                    { tr: "Asla yangına doğru koşmayın", en: "Never run towards the fire", ku: "Tu carî ber bi agir ve nerevîn" },
                    { tr: "Araçla kaçıyorsanız farları açın, camları kapatın", en: "If escaping by car, turn on lights, close windows", ku: "Heke bi erebê direvin, çirayan vêxin, caman bigirin" },
                    { tr: "Yetkililerin talimatlarına uyun", en: "Follow the instructions of authorities", ku: "Li gorî talîmatên rayedaran tevbigerin" }
                  ].map((step, index) => (
                    <div key={index} style={{
                      display: "flex",
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: index < 8 ? "1px solid #f3f4f6" : "none"
                    }}>
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#fee2e2",
                        color: "#dc2626",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <div style={{ color: "#374151" }}>{step[lang]}</div>
                    </div>
                  ))}
                </div>
              )}

              {educationTab === "after" && (
                <div>
                  {[
                    { tr: "Yetkililer izin vermeden bölgeye dönmeyin", en: "Don't return to the area without permission from authorities", ku: "Bêyî destûra rayedaran vegerin deverê" },
                    { tr: "Yanmış yapılara girmeyin - çökme riski var", en: "Don't enter burned buildings - risk of collapse", ku: "Nekevin avahiyên şewitî - xetera hilweşînê heye" },
                    { tr: "Elektrik ve gaz kaçağı kontrolü yapın", en: "Check for electricity and gas leaks", ku: "Kontrola elektrîk û gazê bikin" },
                    { tr: "İçme suyunun güvenli olduğundan emin olun", en: "Make sure drinking water is safe", ku: "Piştrast bikin ku ava vexwarinê ewle ye" },
                    { tr: "Hasar tespiti için fotoğraf çekin", en: "Take photos for damage assessment", ku: "Ji bo nirxandina zirarê wêne bikişînin" },
                    { tr: "Sigorta şirketinize başvurun", en: "Contact your insurance company", ku: "Bi şirketa sîgortaya xwe re têkilî daynin" },
                    { tr: "Psikolojik destek almaktan çekinmeyin", en: "Don't hesitate to get psychological support", ku: "Ji piştgiriya derûnî dudilî nebin" },
                    { tr: "Komşularınıza yardım edin", en: "Help your neighbors", ku: "Alîkariya cîranên xwe bikin" }
                  ].map((step, index) => (
                    <div key={index} style={{
                      display: "flex",
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: index < 7 ? "1px solid #f3f4f6" : "none"
                    }}>
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#dbeafe",
                        color: "#2563eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <div style={{ color: "#374151" }}>{step[lang]}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Tips Card */}
            <div className="card" style={{ marginTop: 16, background: "#fffbeb", border: "1px solid #fcd34d" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 32 }}>💡</span>
                <div>
                  <h4 style={{ color: "#92400e", marginBottom: 4 }}>
                    {lang === "tr" ? "Önemli Hatırlatma" : "Important Reminder"}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#a16207" }}>
                    {lang === "tr" 
                      ? "Acil durumlarda önce kendinizi güvene alın, sonra başkalarına yardım edin. Asla kahramanlık yapmaya çalışmayın!"
                      : "In emergencies, secure yourself first, then help others. Never try to be a hero!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "help":
        return (
          <div>
            <h1 className="page-title">❓ {T.helpFaq[lang]}</h1>
            
            <div className="emergency-card">
              <div className="emergency-header">
                📞 {T.emergencyContacts[lang]}
              </div>
              <div className="emergency-list">
                <div className="emergency-item">
                  <span>AFAD</span>
                  <span className="emergency-number">122</span>
                </div>
                <div className="emergency-item">
                  <span>{T.fireDepartment[lang]}</span>
                  <span className="emergency-number">110</span>
                </div>
                <div className="emergency-item">
                  <span>{T.police[lang]}</span>
                  <span className="emergency-number">155</span>
                </div>
                <div className="emergency-item">
                  <span>{T.ambulance[lang]}</span>
                  <span className="emergency-number">112</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title" style={{ marginBottom: 16 }}>
                {T.faq[lang]}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 16 }}>
                {T.faqDesc[lang]}
              </p>
              
              {faqItems.map((item, index) => (
                <div className="faq-item" key={index}>
                  <div className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>⚠️ {item.q[lang]}</span>
                    <span>{openFaq === index ? "▲" : "▼"}</span>
                  </div>
                  {openFaq === index && (
                    <div className="faq-answer">{item.a[lang]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  // Apply dark mode styles
  const darkModeStyles = darkMode ? `
    body { background: #111827 !important; }
    .app-container { background: #111827; color: #f3f4f6; }
    .sidebar { background: #1f2937; border-color: #374151; }
    .sidebar-title, .sidebar-subtitle { color: #f3f4f6; }
    .nav-section-title { color: #9ca3af; }
    .nav-item { color: #d1d5db; }
    .nav-item:hover { background: #374151; }
    .nav-item.active { background: #7f1d1d; color: #fca5a5; }
    .main-content { background: #111827; }
    .top-header { background: #1f2937; border-color: #374151; }
    .header-title { color: #f3f4f6; }
    .header-mode { color: #9ca3af; }
    .page-title { color: #f3f4f6; }
    .page-subtitle { color: #9ca3af; }
    .card { background: #1f2937; border-color: #374151; color: #f3f4f6; }
    .card-title { color: #f3f4f6; }
    .stat-card { background: #1f2937; border-color: #374151; }
    .stat-value { color: #f3f4f6; }
    .stat-label { color: #9ca3af; }
    .form-input, .form-select { background: #374151; border-color: #4b5563; color: #f3f4f6; }
    .btn-outline { background: #374151; border-color: #4b5563; color: #f3f4f6; }
    .toggle-info h4 { color: #f3f4f6; }
    .toggle-info p { color: #9ca3af; }
    .toggle-row { border-color: #374151; }
    .faq-question { background: #1f2937; color: #f3f4f6; }
    .faq-answer { color: #9ca3af; }
    .faq-item { border-color: #374151; }
    .emergency-card { background: #7f1d1d; border-color: #991b1b; }
    .emergency-item { border-color: #991b1b; color: #fca5a5; }
    .mobile-nav { background: #1f2937; border-color: #374151; }
    .mobile-nav-item { color: #9ca3af; }
    .mobile-nav-item.active { color: #fca5a5; }
    .lang-select { background: #374151; border-color: #4b5563; color: #f3f4f6; }
    .icon-btn { background: #374151; border-color: #4b5563; color: #f3f4f6; }
  ` : '';

  // Apply color blind styles (high contrast patterns)
  const colorBlindStyles = colorBlind ? `
    :root {
      --primary: #0066cc;
      --primary-dark: #004499;
      --success: #006600;
      --warning: #cc6600;
    }
    .fire-zone { border-style: solid; border-width: 4px; }
    .safe-zone { border-style: dashed; border-width: 4px; }
    .stat-icon { border: 3px solid currentColor; }
    .nav-item.active { border-left: 4px solid var(--primary); }
    .btn-primary { border: 2px solid #000; }
    .toggle-switch.active { background: #0066cc; border: 2px solid #004499; }
    .emergency-number { text-decoration: underline; }
    .status-online { border: 2px solid #006600; }
  ` : '';

  return (
    <div className="app-container" style={{ fontSize: bigText ? "18px" : "14px" }}>
      <style>{styles}</style>
      <style>{darkModeStyles}</style>
      <style>{colorBlindStyles}</style>
      
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">🔥</div>
          <div>
            <div className="sidebar-title">Hayat Yeşile Sığar</div>
            <div className="sidebar-subtitle">{mode === "afad" ? "AFAD / İtfaiye Modu" : "AFAD / İtfaiye Modu"}</div>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Navigation</div>
            {navItems.map(item => (
              <div 
                key={item.id}
                className={`nav-item ${currentPage === item.id ? "active" : ""}`}
                onClick={() => setCurrentPage(item.id)}
              >
                <span className="nav-item-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </div>
            ))}
          </div>
          
          <div className="nav-section">
            <div className="nav-section-title">Tools</div>
            {toolItems.map(item => (
              <div 
                key={item.id}
                className={`nav-item ${currentPage === item.id ? "active" : ""}`}
                onClick={() => setCurrentPage(item.id)}
              >
                <span className="nav-item-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </nav>
        
        <div className="sidebar-footer">
          <div className="online-status">
            <div className="online-dot"></div>
            <span>{T.online[lang]}</span>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <div className="header-logo">🔥</div>
            <div>
              <div className="header-title">Hayat Yeşile Sığar</div>
              <div className="header-mode">{mode === "afad" ? "AFAD / İtfaiye Modu" : "AFAD / İtfaiye Modu"}</div>
            </div>
          </div>
          
          <div className="header-right">
            <div className="status-badge status-online">
              <div className="online-dot"></div>
              <span>{T.online[lang]}</span>
            </div>
            
            <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value)}>
              {Object.keys(LANGS).map(k => (
                <option key={k} value={k}>{LANGS[k]}</option>
              ))}
            </select>
            
            <button 
              className={`mode-btn ${mode === "citizen" ? "mode-btn-citizen" : "mode-btn-afad"}`}
              onClick={() => setMode(mode === "citizen" ? "afad" : "citizen")}
            >
              👥 {mode === "citizen" ? T.citizenMode[lang] : T.afadMode[lang]}
            </button>
            
            <button className="icon-btn" onClick={() => setCurrentPage("settings")}>⚙️</button>
            <button className="icon-btn">🔄</button>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="page-content">
          {renderPage()}
        </div>
      </main>

      {/* SOS Message Modal */}
      {showSosModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "white",
            borderRadius: 16,
            padding: 24,
            width: "90%",
            maxWidth: 450,
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
          }}>
            {/* Header */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: "2px solid #fecaca"
            }}>
              <h2 style={{ 
                fontSize: "1.25rem", 
                fontWeight: 700, 
                color: "#dc2626",
                display: "flex", 
                alignItems: "center", 
                gap: 8 
              }}>
                🆘 {lang === "tr" ? "Acil Durum İhbarı" : "Emergency Report"}
              </h2>
              <button 
                onClick={() => { setShowSosModal(false); setSosMessage(""); }}
                style={{ 
                  background: "none", 
                  border: "none", 
                  fontSize: 24, 
                  cursor: "pointer",
                  color: "#6b7280"
                }}
              >
                ✕
              </button>
            </div>

            {/* Location Info */}
            <div style={{
              background: sosLocation ? "#dcfce7" : "#fef3c7",
              padding: 12,
              borderRadius: 8,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 12
            }}>
              <span style={{ fontSize: 24 }}>{sosLocation ? "📍" : "⚠️"}</span>
              <div>
                <div style={{ fontWeight: 600, color: sosLocation ? "#166534" : "#92400e" }}>
                  {sosLocation 
                    ? (lang === "tr" ? "Konum Alındı" : "Location Captured")
                    : (lang === "tr" ? "Konum Alınamadı" : "Location Unavailable")
                  }
                </div>
                <div style={{ fontSize: "0.85rem", color: sosLocation ? "#15803d" : "#a16207" }}>
                  {sosLocation 
                    ? `${sosLocation.lat.toFixed(6)}, ${sosLocation.lng.toFixed(6)}`
                    : (lang === "tr" ? "Manuel konum girebilirsiniz" : "You can enter location manually")
                  }
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ 
                display: "block", 
                fontWeight: 600, 
                marginBottom: 8,
                color: "#374151"
              }}>
                {lang === "tr" ? "Ne görüyorsunuz? Durumu açıklayın:" : "What do you see? Describe the situation:"}
              </label>
              <textarea
                value={sosMessage}
                onChange={(e) => setSosMessage(e.target.value)}
                placeholder={lang === "tr" 
                  ? "Örn: Ormanda duman görüyorum, yaklaşık 500 metre uzaklıkta..." 
                  : "E.g: I see smoke in the forest, about 500 meters away..."}
                style={{
                  width: "100%",
                  minHeight: 120,
                  padding: 12,
                  borderRadius: 8,
                  border: "2px solid #e5e7eb",
                  fontSize: "1rem",
                  resize: "vertical",
                  fontFamily: "inherit"
                }}
              />
            </div>

            {/* Quick Message Buttons */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: 8 }}>
                {lang === "tr" ? "Hızlı Mesajlar:" : "Quick Messages:"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  { tr: "🔥 Yangın görüyorum", en: "🔥 I see fire" },
                  { tr: "💨 Duman var", en: "💨 There's smoke" },
                  { tr: "🏠 Evler tehlikede", en: "🏠 Houses in danger" },
                  { tr: "🐾 Hayvanlar var", en: "🐾 Animals present" }
                ].map((msg, i) => (
                  <button
                    key={i}
                    onClick={() => setSosMessage(sosMessage + (sosMessage ? " " : "") + msg[lang])}
                    style={{
                      padding: "6px 12px",
                      background: "#f3f4f6",
                      border: "1px solid #e5e7eb",
                      borderRadius: 20,
                      fontSize: "0.85rem",
                      cursor: "pointer"
                    }}
                  >
                    {msg[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Send Button */}
            <button
              onClick={sendSosReport}
              disabled={sosSending}
              style={{
                width: "100%",
                padding: "16px 24px",
                background: sosSending ? "#9ca3af" : "#dc2626",
                color: "white",
                border: "none",
                borderRadius: 12,
                fontSize: "1.1rem",
                fontWeight: 700,
                cursor: sosSending ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8
              }}
            >
              {sosSending ? (
                <>⏳ {lang === "tr" ? "Gönderiliyor..." : "Sending..."}</>
              ) : (
                <>📡 {lang === "tr" ? "İHBARI GÖNDER" : "SEND REPORT"}</>
              )}
            </button>

            <p style={{ 
              marginTop: 12, 
              fontSize: "0.8rem", 
              color: "#6b7280", 
              textAlign: "center" 
            }}>
              {lang === "tr" 
                ? "İhbarınız AFAD ve yetkili birimlere iletilecektir"
                : "Your report will be sent to AFAD and relevant authorities"
              }
            </p>
          </div>
        </div>
      )}

      {/* Animal Emergency Modal */}
      {showAnimalModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "white",
            borderRadius: 16,
            padding: 24,
            width: "90%",
            maxWidth: 450,
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                🐾 {lang === "tr" ? "Yangın Bölgesinde Hayvan Bildirimi" : "Animal Report in Fire Zone"}
              </h2>
              <button 
                onClick={() => setShowAnimalModal(false)}
                style={{ 
                  background: "none", 
                  border: "none", 
                  fontSize: 24, 
                  cursor: "pointer",
                  color: "#6b7280"
                }}
              >
                ✕
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">{lang === "tr" ? "Hayvan Türü Seçin" : "Select Animal Type"}</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                <button
                  onClick={() => setAnimalType("wild")}
                  style={{
                    padding: 16,
                    border: animalType === "wild" ? "2px solid #ca8a04" : "1px solid #e5e7eb",
                    borderRadius: 12,
                    background: animalType === "wild" ? "#fef9c3" : "white",
                    cursor: "pointer",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 4 }}>🦌</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>{lang === "tr" ? "Yabani" : "Wild"}</div>
                </button>
                <button
                  onClick={() => setAnimalType("farm")}
                  style={{
                    padding: 16,
                    border: animalType === "farm" ? "2px solid #ca8a04" : "1px solid #e5e7eb",
                    borderRadius: 12,
                    background: animalType === "farm" ? "#fef9c3" : "white",
                    cursor: "pointer",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 4 }}>🐄</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>{lang === "tr" ? "Çiftlik" : "Farm"}</div>
                </button>
                <button
                  onClick={() => setAnimalType("pet")}
                  style={{
                    padding: 16,
                    border: animalType === "pet" ? "2px solid #ca8a04" : "1px solid #e5e7eb",
                    borderRadius: 12,
                    background: animalType === "pet" ? "#fef9c3" : "white",
                    cursor: "pointer",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 4 }}>🐕</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>{lang === "tr" ? "Evcil" : "Pet"}</div>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{lang === "tr" ? "Tahmini Hayvan Sayısı" : "Estimated Animal Count"}</label>
              <select 
                className="form-select" 
                value={animalCount} 
                onChange={(e) => setAnimalCount(e.target.value)}
              >
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-20">11-20</option>
                <option value="20+">20+</option>
                <option value="unknown">{lang === "tr" ? "Bilinmiyor" : "Unknown"}</option>
              </select>
            </div>

            <button
              onClick={sendAnimalAlert}
              disabled={animalAlertSending}
              className="btn btn-block"
              style={{
                background: "#ca8a04",
                color: "white",
                padding: "16px 24px",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginTop: 16,
                opacity: animalAlertSending ? 0.7 : 1
              }}
            >
              {animalAlertSending ? (
                <>⏳ {lang === "tr" ? "Gönderiliyor..." : "Sending..."}</>
              ) : (
                <>📡 {lang === "tr" ? "AFAD'a Bildir" : "Report to AFAD"}</>
              )}
            </button>

            <p style={{ 
              marginTop: 16, 
              fontSize: "0.8rem", 
              color: "#6b7280", 
              textAlign: "center" 
            }}>
              {lang === "tr" 
                ? "Konumunuz otomatik olarak yetkililerle paylaşılacaktır"
                : "Your location will be automatically shared with authorities"
              }
            </p>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav">
        <button 
          className={`mobile-nav-item ${currentPage === "dashboard" ? "active" : ""}`}
          onClick={() => setCurrentPage("dashboard")}
        >
          <span>🏠</span>
          <span>{T.dashboard[lang]}</span>
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === "maps" ? "active" : ""}`}
          onClick={() => setCurrentPage("maps")}
        >
          <span>🗺️</span>
          <span>{T.maps[lang]}</span>
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === "fires" ? "active" : ""}`}
          onClick={() => setCurrentPage("fires")}
        >
          <span>🔥</span>
          <span>{T.fires[lang]}</span>
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === "education" ? "active" : ""}`}
          onClick={() => setCurrentPage("education")}
        >
          <span>🎓</span>
          <span>{T.education[lang]}</span>
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === "volunteers" ? "active" : ""}`}
          onClick={() => setCurrentPage("volunteers")}
        >
          <span>👥</span>
          <span>{T.volunteers[lang]}</span>
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === "settings" ? "active" : ""}`}
          onClick={() => setCurrentPage("settings")}
        >
          <span>⚙️</span>
          <span>{T.settings[lang]}</span>
        </button>
      </nav>
    </div>
  );
}



