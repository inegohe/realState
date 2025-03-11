# 🏡 RealState - React Native Real Estate App

![RealState Banner](https://via.placeholder.com/1200x400.png?text=RealState+Property+Showcase+App)

## 🚀 Overview
RealState is a **React Native** application designed to showcase real estate properties with authentication and backend management powered by **Appwrite**. Users can browse property listings, view details, and securely sign in to manage their favorite properties.

## 🛠️ Tech Stack
- **Frontend:** React Native (Expo)
- **Backend & Database:** Appwrite
- **Authentication:** Appwrite Authentication
- **State Management:** Redux Toolkit / Context API
- **UI Library:** React Native Paper / TailwindCSS

## 🎯 Features
- 📌 **User Authentication (Login/Register using Appwrite)**
- 📌 **Browse Real Estate Listings**
- 📌 **Property Details Page**
- 📌 **Save Favorite Properties**
- 📌 **Filter and Search for Properties**
- 📌 **Secure API Integration with Appwrite**

## 📂 Project Structure
```
📦 realState
├── 📁 src                # Main source code
│   ├── 📁 components    # Reusable UI components
│   ├── 📁 screens       # App screens (Home, Details, Login, etc.)
│   ├── 📁 navigation    # React Navigation setup
│   ├── 📁 context       # Context API / Redux Store
│   ├── 📁 services      # Appwrite API services
│   ├── 📄 App.js        # Main app entry file
├── 📁 assets            # Static images & icons
├── 📄 .env              # Environment variables
├── 📄 package.json      # Dependencies & scripts
├── 📄 README.md         # Project documentation
└── 📄 app.json          # Expo config
```

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/inegohe/realState.git
   cd realState
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   APPWRITE_PROJECT_ID=your_appwrite_project_id
   APPWRITE_ENDPOINT=your_appwrite_api_endpoint
   ```

4. **Run the development server:**
   ```sh
   expo start
   ```

5. Open the app using an emulator or Expo Go on your device.

## 📸 Screenshots
| Home Screen | Property Details | Authentication |
|------------|-----------------|----------------|
| ![Home](https://private-user-images.githubusercontent.com/161653709/421267491-8b80acf7-0a81-4dfb-89ea-b93569cacc0f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2ODI1NzEsIm5iZiI6MTc0MTY4MjI3MSwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjY3NDkxLThiODBhY2Y3LTBhODEtNGRmYi04OWVhLWI5MzU2OWNhY2MwZi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwODM3NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zODBiZTRiZTk4ODkyOTY0YjQ2Y2Q0Y2VjMzZiOGEwNjVhZmQyYWFhMzI2OTYzM2RjMzgyYTEzMzJhMTRkOTViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.1jIb8ZUv8x1IfWhFJVow9c2-q0vj0wln6Ae3jGaCaYE) | ![Details](https://private-user-images.githubusercontent.com/161653709/421267489-654d2aeb-7f1b-46be-85b0-9a89bbe1fd1a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2ODI1NzEsIm5iZiI6MTc0MTY4MjI3MSwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjY3NDg5LTY1NGQyYWViLTdmMWItNDZiZS04NWIwLTlhODliYmUxZmQxYS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwODM3NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZTM3NGUwOGU0N2JmNGE4MWQ5OTQ3YmRlYWU0ZDQ1NDBmMDk1NGVhZTM2ZWQ5YzllMjY1M2IzMTAyYTk1MTljJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ULuUw2rG6Nm1yIcgt39HW19fntKxQ_dTy487LwZ4iYU) | ![Auth](https://private-user-images.githubusercontent.com/161653709/421267490-527c5d5b-ec61-480b-b404-18c6949d78d0.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE2ODI1NzEsIm5iZiI6MTc0MTY4MjI3MSwicGF0aCI6Ii8xNjE2NTM3MDkvNDIxMjY3NDkwLTUyN2M1ZDViLWVjNjEtNDgwYi1iNDA0LTE4YzY5NDlkNzhkMC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMVQwODM3NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZTRkOWFmNzYzZjE5NjMwNDNkY2RkNzE0YjQ1MGRmM2FkY2ZjNTVkY2Q0NTE3NDIwMTAzMzE2YWFhNmI1NjljJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.QAV2TitagD7Yagxl5OKHmgRFVEKi5qDXwJBrnl80Gtc) |

## 🚀 Deployment
- Deploy the backend using **Appwrite Cloud** or a self-hosted instance.
- Use **EAS (Expo Application Services)** for building and deploying the mobile app.

## 💡 Future Improvements
- 🔹 User profile & settings page
- 🔹 Push notifications for new property listings
- 🔹 Advanced filtering & sorting options
- 🔹 Real-time chat with property agents

## 🤝 Contributing
Feel free to fork this repository, submit issues, or create pull requests to enhance the project.

## 📜 License
This project is licensed under the **MIT License**.

---
⭐ If you like this project, give it a **star** on GitHub!

