# Hero Section with AI-Powered Content Regeneration

A beautiful, responsive hero section component for React applications with inline editing and AI content regeneration features.

## 🚀 Setup Process

1. Open your terminal or command prompt
2. Clone this repository:
   ```bash
   git clone https://github.com/yw2006/Hero-Section.git
   ```
3. Navigate to the project directory:
   ```bash
   cd Hero-Section
   ```
4. Install the dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## ✨ Features

* **Interactive Hero Section**: Complete with headline, subheadline, CTA button, and image
* **Inline Text Editing**: Click any text to edit it directly inline
* **AI Content Regeneration**: Swap content instantly with a click of a button
* **Responsive Design**: Looks great on all device sizes
* **Modern UI**: Subtle animations and clean design

## 🗂 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── EditableText.jsx     # Reusable editable text component
│   └── sections/
│       └── HeroSection.jsx      # Main hero section component
├── data/
│   └── heroContent.json         # Content options for regeneration
├── utils/
│   └── randomizer.js            # Utility for random content generation
└── App.js                       # Main application component
```

## ⚙️ How It Works

* **EditableText Component**: Handles inline text editing with state management
* **HeroSection Component**: Manages the layout and regeneration functionality
* **Content Regeneration**: Uses a utility function to select random content
* **JSON Data**: Stores all content options in a separate data file

## 🔧 Customization

* Modify the `heroContent.json` file to add your own content options

## 🛠 Technologies Used

* React.js
* Tailwind CSS
* Lucide React (for icons)

---

Created with ❤️ by **Yousef Walid**
