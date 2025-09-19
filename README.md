# ReactJS Frontend Developer Assignments - Complete Implementation

## 🚀 How to Clone

To clone this repository, run the following command in your terminal:

```bash
git clone https://github.com/sasankkona/user-profile-basic.git
```

## ⚙️ How to Use

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. To create a production build:

```bash
npm run build
```

## ✅ Project Completion Status

Both ReactJS assignments have been successfully implemented and tested, meeting all specified requirements.

## 📁 Project Structure

```
Desktop/
├── react-assignment-1-basic/          # Assignment 1 (Basic React App)
│   ├── src/
│   │   ├── App.js                     # Main app component with user fetching
│   │   ├── UserCard.js                # Bootstrap-styled user profile cards
│   │   ├── LoadingSpinner.js          # SpinKit loading animation
│   │   └── LoadingSpinner.css         # CSS for loading animation
│   ├── public/index.html              # Bootstrap CDN included
│   └── README-Assignment.md           # Detailed documentation
```

## 🎯 Assignment 1 - User Profile Basic

### ✅ All Requirements Met:
- **Create React App Setup**: ✓ Generated with `npx create-react-app`
- **JSX Understanding**: ✓ Components use proper JSX syntax
- **Props Passing**: ✓ User data and avatar URLs passed to UserCard
- **State Management**: ✓ Uses useState for users, loading, and error states
- **Component Lifecycle**: ✓ useEffect for data fetching on mount
- **API Integration**: ✓ Fetches from JSONPlaceholder API
- **Conditional Rendering**: ✓ Shows loader, error, or user list
- **List Rendering**: ✓ Maps over users array to render cards
- **Bootstrap Styling**: ✓ Responsive grid and card components
- **Loading Indicator**: ✓ SpinKit CSS spinner implementation
- **Avatar Generation**: ✓ DiceBear API integration

### 🔧 Technical Features:
- Responsive Bootstrap grid (col-md-4)
- Error handling for API failures
- Proper component separation
- Clean, readable code structure

## 🌐 API Integration
- **User Data**: `https://jsonplaceholder.typicode.com/users`
- **Avatars**: `https://avatars.dicebear.com/v2/avataaars/{username}.svg`

## 🚀 Ready for Deployment

Both applications are deployment-ready with:
- Production builds working (`npm run build`)
- Clean code without console errors
- Proper error handling

## 📋 Deployment Options Provided

1. **Vercel CLI** (Recommended)
2. **GitHub Pages** (Alternative)

## 🎖️ Skills Demonstrated

### Assignment 1 Skills:
- React fundamentals
- Component architecture
- State management
- API integration
- Bootstrap styling
- Loading states