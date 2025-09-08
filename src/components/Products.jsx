const products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: '£19.99',
    image: 'https://images.pexels.com/photos/33693665/pexels-photo-33693665.jpeg'
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: '£79.99',
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg'
  },
  {
    id: 3,
    name: 'Apple Monitor',
    price: '£249.99',
    image: 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg'
  },
  {
    id: 4,
    name: 'USB-C Hub',
    price: '£39.99',
    image: 'https://images.pexels.com/photos/20076003/pexels-photo-20076003.jpeg'
  },
  {
    id: 5,
    name: 'Wireless Earbuds',
    price: '£59.99',
    image: 'https://images.pexels.com/photos/3921845/pexels-photo-3921845.jpeg'
  },
  {
    id: 6,
    name: 'Smartphone Stand',
    price: '£14.99',
    image: 'https://images.pexels.com/photos/4526429/pexels-photo-4526429.jpeg'
  },
  {
    id: 7,
    name: 'Xtrike Me FN-813 Laptop Cooler',
    price: '1,250৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/laptop-cooler/xtrike-me/fn-813/fn-813-01-500x500.webp'
  },
  {
    id: 8,
    name: 'Seagate One Touch 1TB External Portable SSD',
    price: '17,000৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/ssd/seagate/onetouch-1tb/seagate-one-touch-1tb-ssd-500x500.jpg'
  },
  {
    id: 9,
    name: 'ASUS TUF Gaming H1 Gen II Wired Gaming Headphone',
    price: '6,099৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/headphone/asus/tuf-gaming-h1-gen-ii/tuf-gaming-h1-gen-ii-01-228x228.webp'
  },
  {
    id: 10,
    name: 'Smart Watch',
    price: '£129.99',
    image: 'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg'
  },
  {
    id: 11,
    name: 'Onikuma L6 RGB Gaming Bluetooth Speaker',
    price: '1,650৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/speaker/onikuma/l6-/l6-01-500x500.webp'
  },
  {
    id: 12,
    name: 'Baseus Wisdom Auto Alignment Car Mount Qi 15W Wireless Charger',
    price: '2,490৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/gadget/daily-lifestyle/baseus/wisdom-auto-alignment-car-mount-wireless-charger/wisdom-auto-alignment-car-mount-wireless-charger-01-500x500.webp'
  },
  {
    id: 13,
    name: 'Baseus Airpow 20W 10000mAh Portable Power Bank',
    price: '2,290৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/power-bank/baseus/airpow/airpow-500x500.webp'
  },
  {
    id: 14,
    name: 'Logitech C270 HD Webcam',
    price: '2,300৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/webcam/logitech/c270/c270-01-500x500.webp'
  },
  {
    id: 15,
    name: 'Samsung 65Q800T 65 Inch 8K QLED Smart TV with Alexa Built-in',
    price: '215,000৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/television/samsung/q800t/q800t-01-500x500.jpg'
  },
  {
    id: 16,
    name: 'Hikvision DS-3WR12C AC1200 1200Mbps Dual Band WiFi Router',
    price: '1,957৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/router/hikvision/ds-3wr12c/ds-3wr12c-01-500x500.webp'
  },
  {
    id: 17,
    name: 'PICO 4 All-in-One 128GB VR Headset',
    price: '57,400৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/vr-set/pico/pico-4/pico-4-05-500x500.webp'
  },
  {
    id: 18,
    name: 'Vertiv ITON CX 1000VA Offline UPS',
    price: '7,600৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/ups/vertiv/iton-cx-1000va/iton-cx-1000va-500x500.webp'
  },
  {
    id: 19,
    name: 'FIFINE K678 USB Microphone',
    price: '6,600৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/microphone/fifine/k678/k678-01-500x500.jpg'
  },
  {
    id: 20,
    name: 'Apple MacBook Air 13 inch M4 Liquid Retina Display 16GB RAM 512GB SSD Midnight',
    price: '159,000৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air-13-m4/midnight/macbook-air-13-m4-midnight-01-500x500.webp'
  },
  {
    id: 21,
    name: 'MSI Agility GD60 Gaming RGB Mouse Pad',
    price: '2,800৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/mouse-pad/msi/gd60/gd60-500x500.webp'
  },
  {
    id: 22,
    name: 'Netgear R6850 Wireless AC2000 Dual-Band Gigabit WiFi Router',
    price: '6,300৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/router/netgear/r6850/r6850-500x500.jpg'
    
  },
  {
    id: 23,
    name: 'Xiaomi Wanbo X5 1100 Lumens Smart Android Portable LED Projector',
    price: '31,000৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/projector/xiaomi/wanbo-x5/wanbo-x5-01-500x500.webp'
  },
  {
    id: 24,
    name: 'AMD Ryzen 5 5600G Budget Desktop PC',
    price: '39,700৳',
    image: 'https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/amd-ryzen-5-budget-desktop-pc-001-500x500.webp'
  },

];

export default products;