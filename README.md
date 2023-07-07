# Image Proxy Server

This repository contains a simple image proxy server built with Node.js and Express.js. The server allows you to fetch and serve images from remote URLs by providing the image URL as a query parameter. It retrieves the image, sets the appropriate Content-Type header, and streams the image data as the response.

## Features

- Fetch and serve images from remote URLs
- Support for various image formats and Content-Type handling
- Lightweight and efficient with Express.js
- Easy to use and deploy

## Usage

1. Make sure you have Node.js installed on your system.
2. Clone this repository:

   ```
   git clone https://github.com/spidirman/image-proxy-server.git
   
   ```
3. Install the dependencies:
   ```
   npm install express axios
   ```
4. Start the server:
   
   ```
   cd image-proxy-server
   node server.js
   
   ```
5. Send a GET request to the /image endpoint with the image URL as a query parameter:

   ```
    GET /image?url=https://example.com/image.jpg

   ```

   The server will fetch the image, set the appropriate Content-Type header, and stream the image data as the response.
   
## Exemple :

   ![Example Image](https://github.com/spidirman/image-proxy-server/blob/main/images/exemple.png?raw=true)

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


## Disclaimer
Please note that this application is intended for educational and personal use only. Make sure to respect copyright and usage rights when using images from external sources.

