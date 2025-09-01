# Adblock
A lightweight browser extension that automatically removes **ads and unwanted elements** from websites.  
Currently supports **LinkedIn**, but designed to be **easily extended** to other platforms.

## Features
- Hides **promoted posts and ads** on LinkedIn.
- Automatically detects and removes ads as you scroll.
- Modular design — add new site-specific rules/scripts in minutes.
- Simple, fast, and minimal codebase.

## Installation

### 1. Clone or Download
     ```bash
     git clone https://github.com/<your-username>/adblock.git
     ```
Or download the ZIP and extract it.

### 2. Load in Chrome

     1. Open Chrome and go to chrome://extensions/.
     2. Enable Developer Mode (toggle in top right).
     3. Click Load unpacked.
     4. Select the folder where this extension lives.

### 3. Done
     Open LinkedIn and browse ad-free.
     Support for more websites coming soon!

## Project Structure
```
smart-adblocker/
├── manifest.json     # Extension config (permissions, scripts, metadata)
├── extension.js      # Background script (decides which content script to inject)
├── linkedin.js       # LinkedIn-specific ad removal logic
└── README.md         # Documentation (this file)
```

## How It Works

### 1. Background Script (extension.js)
     •	Detects when a supported site is opened and injects the correct content script.
### 2. Content Script(s) (e.g., linkedin.js)
	•	Scans the page for ad markers (like the text "Promoted" on LinkedIn).
	•	Locates the post container element.
	•	Removes or hides it automatically.
	•	Runs continuously while browsing.

## Roadmap
	•	Support LinkedIn.
	•	Add support for:
	     •	Twitter/X promoted posts
	     •	YouTube video ads & homepage ads
	     •	Facebook sponsored posts
	     •	Cookie popups and banners
	     •	Add settings page so users can pick which sites to block ads on.
	     •	Publish to the Chrome Web Store.
         •  Add cookie management settings.

## Limitations
	•	Works only on Google Chrome (but should work on any Chromium-based browser like Brave, Edge, Opera).
	•	If websites change their UI, selectors may need updating.

## Author

     •    Made with ❤️ by Toffee
     •    Contributions welcome! Fork the repo and open a pull request.

## License
     This project is licensed under the MIT License.