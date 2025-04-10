# IP Address Tracker

A modern React application that allows users to track IP addresses and view their associated geographical information. Built with React and styled with CSS animations.

![IP Address Tracker Screenshot](screenshot.png)

## Features

- 🔍 Real-time IP address tracking
- 🌍 Interactive map display
- 📱 Responsive design
- ✨ Beautiful animations and transitions
- 🔒 Secure API key management
- 🎯 Precise location data
- 💫 Modern UI/UX design

## Technologies Used

- React.js
- CSS3 with Animations
- IPify API for IP tracking
- Leaflet for map integration
- Environment Variables for API key management

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ip-address-tracker-react.git
```

2. Navigate to the project directory
```bash
cd ip-address-tracker-react
```

3. Install dependencies
```bash
npm install
```

4. Create a `.env` file in the root directory and add your IPify API key
```env
REACT_APP_IPIFY_API_KEY=your_api_key_here
```

5. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
ip-address-tracker-react/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── IPDetails.js
│   │   ├── Map.js
│   │   └── Loader.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── .gitignore
└── package.json
```

## Features in Detail

### IP Address Tracking
- Real-time IP address lookup
- Support for both IPv4 and IPv6 addresses
- Domain name resolution
- Error handling for invalid inputs

### Location Data
- Country information
- City details
- ISP data
- Timezone information
- Latitude and longitude coordinates

### Interactive Map
- Centered on the searched IP location
- Zoom controls
- Marker placement
- Responsive design

### User Interface
- Clean and modern design
- Responsive layout
- Loading animations
- Error state handling
- Smooth transitions

## API Integration

The application uses the IPify API for IP address tracking. To use the application:

1. Sign up for an API key at [IPify](https://www.ipify.org/)
2. Add your API key to the `.env` file
3. The application will automatically use the key for API requests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- IPify API for providing the IP tracking service
- Leaflet for the map integration
- React community for the amazing framework
- Font Awesome for the icons

## Contact

Salatech - [Twitter](https://twitter.com/salatech2)

Project Link: [https://github.com/salatech/ip-address-tracker-react](https://github.com/salatech/ip-address-tracker-react)
