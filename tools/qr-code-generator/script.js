// ============================================
// QR CODE GENERATOR - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const qrType = document.getElementById('qrType');
const qrSize = document.getElementById('qrSize');
const generateBtn = document.getElementById('generateBtn');
const qrcodeDiv = document.getElementById('qrcode');
const qrPreview = document.getElementById('qrPreview');
const downloadSection = document.getElementById('downloadSection');
const downloadPngBtn = document.getElementById('downloadPngBtn');
const downloadSvgBtn = document.getElementById('downloadSvgBtn');

// Input sections
const textInput = document.getElementById('textInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const smsInput = document.getElementById('smsInput');
const wifiInput = document.getElementById('wifiInput');

// Input fields
const textContent = document.getElementById('textContent');
const emailAddress = document.getElementById('emailAddress');
const emailSubject = document.getElementById('emailSubject');
const phoneNumber = document.getElementById('phoneNumber');
const smsNumber = document.getElementById('smsNumber');
const smsMessage = document.getElementById('smsMessage');
const wifiSSID = document.getElementById('wifiSSID');
const wifiPassword = document.getElementById('wifiPassword');
const wifiSecurity = document.getElementById('wifiSecurity');

// State
let currentQRCode = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    // QR type change
    qrType.addEventListener('change', handleTypeChange);
    
    // Generate button
    generateBtn.addEventListener('click', generateQRCode);
    
    // Download buttons
    downloadPngBtn.addEventListener('click', downloadPNG);
    downloadSvgBtn.addEventListener('click', downloadSVG);
}

// ============================================
// TYPE HANDLING
// ============================================

function handleTypeChange() {
    const type = qrType.value;
    
    // Hide all input sections
    textInput.style.display = 'none';
    emailInput.style.display = 'none';
    phoneInput.style.display = 'none';
    smsInput.style.display = 'none';
    wifiInput.style.display = 'none';
    
    // Show relevant input section
    switch(type) {
        case 'text':
        case 'url':
            textInput.style.display = 'block';
            textContent.placeholder = type === 'url' ? 'https://example.com' : 'Enter text...';
            break;
        case 'email':
            emailInput.style.display = 'block';
            break;
        case 'phone':
            phoneInput.style.display = 'block';
            break;
        case 'sms':
            smsInput.style.display = 'block';
            break;
        case 'wifi':
            wifiInput.style.display = 'block';
            break;
    }
    
    window.deepvlab.trackEvent('QR Code Generator', 'Type Change', type);
}

// ============================================
// QR CODE GENERATION
// ============================================

function generateQRCode() {
    const type = qrType.value;
    const content = getContentForType(type);
    
    if (!content) {
        window.deepvlab.showToast('Please enter content', 'warning');
        return;
    }
    
    // Clear previous QR code
    qrcodeDiv.innerHTML = '';
    
    // Get size
    const size = parseInt(qrSize.value);
    
    try {
        // Generate QR code
        currentQRCode = new QRCode(qrcodeDiv, {
            text: content,
            width: size,
            height: size,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Show QR code and hide placeholder
        qrPreview.querySelector('.qr-placeholder').style.display = 'none';
        qrcodeDiv.style.display = 'flex';
        downloadSection.style.display = 'flex';
        
        window.deepvlab.showToast('QR code generated!', 'success');
        window.deepvlab.trackEvent('QR Code Generator', 'Generate', type);
    } catch (error) {
        window.deepvlab.showToast('Failed to generate QR code', 'error');
        console.error(error);
    }
}

function getContentForType(type) {
    switch(type) {
        case 'text':
        case 'url':
            return textContent.value.trim();
            
        case 'email':
            const email = emailAddress.value.trim();
            const subject = emailSubject.value.trim();
            if (!email) return '';
            return `mailto:${email}${subject ? '?subject=' + encodeURIComponent(subject) : ''}`;
            
        case 'phone':
            const phone = phoneNumber.value.trim();
            if (!phone) return '';
            return `tel:${phone}`;
            
        case 'sms':
            const smsNum = smsNumber.value.trim();
            const msg = smsMessage.value.trim();
            if (!smsNum) return '';
            return `sms:${smsNum}${msg ? '?body=' + encodeURIComponent(msg) : ''}`;
            
        case 'wifi':
            const ssid = wifiSSID.value.trim();
            const password = wifiPassword.value.trim();
            const security = wifiSecurity.value;
            if (!ssid) return '';
            return `WIFI:T:${security};S:${ssid};P:${password};;`;
            
        default:
            return '';
    }
}

// ============================================
// DOWNLOAD FUNCTIONS
// ============================================

function downloadPNG() {
    if (!currentQRCode) {
        window.deepvlab.showToast('Generate a QR code first', 'warning');
        return;
    }
    
    try {
        const canvas = qrcodeDiv.querySelector('canvas');
        if (!canvas) {
            window.deepvlab.showToast('QR code not ready', 'error');
            return;
        }
        
        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `qrcode-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            window.deepvlab.showToast('Downloaded!', 'success');
            window.deepvlab.trackEvent('QR Code Generator', 'Download', 'PNG');
        });
    } catch (error) {
        window.deepvlab.showToast('Failed to download', 'error');
        console.error(error);
    }
}

function downloadSVG() {
    if (!currentQRCode) {
        window.deepvlab.showToast('Generate a QR code first', 'warning');
        return;
    }
    
    try {
        const canvas = qrcodeDiv.querySelector('canvas');
        if (!canvas) {
            window.deepvlab.showToast('QR code not ready', 'error');
            return;
        }
        
        // Convert canvas to SVG
        const size = parseInt(qrSize.value);
        const imageData = canvas.toDataURL('image/png');
        
        const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <image width="${size}" height="${size}" xlink:href="${imageData}"/>
</svg>`;
        
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `qrcode-${Date.now()}.svg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        window.deepvlab.showToast('Downloaded!', 'success');
        window.deepvlab.trackEvent('QR Code Generator', 'Download', 'SVG');
    } catch (error) {
        window.deepvlab.showToast('Failed to download', 'error');
        console.error(error);
    }
}

