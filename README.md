# 📱 Mobile Authentication App

A beautiful React Native mobile authentication app with pixel-perfect UI design, featuring phone number-based authentication with OTP verification.

## 🎨 Screenshots

  <img src="https://github.com/user-attachments/assets/7a1f6884-b18e-4dcf-bdd8-07dc60d13d8f" width = "300" />
  <img src="https://github.com/user-attachments/assets/696164f7-c5f1-4716-977a-29730bb18b70" width = "300" />
  <img src="https://github.com/user-attachments/assets/fcba3657-5d95-4162-8c9f-d14c06e522a1" width = "300" />
  <img src="https://github.com/user-attachments/assets/7d24bf76-fc51-4443-b026-ef5d55a7d952" width = "300" />
  <img src="https://github.com/user-attachments/assets/6296507f-b7c6-4290-96d7-f48b111cd7bd" width = "300" />
  <img src="https://github.com/user-attachments/assets/82ab1f35-a04b-4660-93bf-835fb87a63ab" width = "300" />

## ✨ Features

- **🔐 Phone Number Authentication** - Secure login/signup with mobile numbers
- **📱 OTP Verification** - 5-digit SMS verification code system
- **🎨 Pixel-Perfect UI** - Matches provided design mockups exactly
- **🔄 Smooth Navigation** - Seamless flow between screens
- **📝 Form Validation** - Input validation and error handling
- **♿ Accessibility** - Proper focus management and screen reader support
- **🌐 Cross-Platform** - Works on both iOS and Android

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS - macOS only)

### Installation

1. **Clone and setup project**
   ```bash
   npx react-native init MobileAuthApp --template react-native-template-typescript
   cd MobileAuthApp
   ```

2. **Install dependencies**
   ```bash
   npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler
   ```

3. **iOS setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Replace generated files** with the provided source files

5. **Start the app**
   ```bash
   # Start Metro bundler
   npm start
   
   # Run on Android
   npm run android
   
   # Run on iOS
   npm run ios
   ```

## 📁 Project Structure

```
MobileAuthApp/
├── App.tsx                     # Main app with navigation setup
├── index.js                    # App entry point
├── package.json               # Dependencies and scripts
├── babel.config.js            # Babel configuration
├── metro.config.js            # Metro bundler config
├── tsconfig.json              # TypeScript configuration
├── app.json                   # App metadata
└── src/
    ├── screens/
    │   ├── LoginScreen.tsx    # 🏠 Landing page - phone login
    │   ├── SignupScreen.tsx   # 📝 Account registration
    │   └── OTPScreen.tsx      # 🔢 SMS verification
    └── components/
        └── BackButton.tsx     # ↩️ Reusable back navigation
        └── GradientText.tsx   # Gradient Text
```

## 🎯 Screen Details

### 🏠 Login Screen (Landing Page)
- **Welcome Back** gradient text header
- Phone number input with validation
- "Register" link for new users
- Clean, modern design with rounded inputs

### 📝 Signup Screen
- **Create Account** header
- Back button navigation
- Identical styling to login screen
- "Log In" link for existing users

### 🔢 OTP Verification Screen
- 5 individual input boxes for verification code
- Auto-focus between inputs
- Masked phone number display (`*****3210`)
- Re-send code functionality
- Backspace navigation support

## 🎨 Design System

### Colors
```css
Primary Orange: #FF6B35
Secondary Orange: #FFA500
Background: #FFFFFF
Input Background: #F5F5F5
Text Primary: #000000
Text Secondary: #888888
Button: #000000
Error/Resend: #FF0000
```

### Typography
- **Headers**: 28px, Semi-bold
- **Body**: 16px, Regular
- **Helper Text**: 14px, Regular
- **Buttons**: 16px, Semi-bold

## 🧪 Testing the App

### Demo Credentials
- **Phone Number**: Any 10+ digit number
- **OTP Code**: `12345` (for successful verification)
- Any other code will show error message

### Test Flow
1. App opens to Login screen
2. Enter phone number → Continue
3. Enter OTP `12345` → Success
4. Test navigation between Login/Signup
5. Test form validation with empty/invalid inputs

## ⚙️ Configuration

### Environment Setup
The app currently uses mock authentication. To integrate real SMS services:

1. **Choose a provider** (Firebase, Twilio, AWS SNS)
2. **Get API credentials**
3. **Replace mock functions** in `OTPScreen.tsx`
4. **Add loading states** and error handling
5. **Test with real phone numbers**

### Customization
- **Colors**: Update StyleSheet objects in each screen
- **Fonts**: Modify fontFamily properties
- **Spacing**: Adjust margin/padding values
- **Validation**: Update phone number regex patterns

## 📦 Dependencies

### Core Navigation
- `@react-navigation/native` - Navigation framework
- `@react-navigation/stack` - Stack navigator
- `react-native-screens` - Native screen optimization
- `react-native-safe-area-context` - Safe area handling
- `react-native-gesture-handler` - Touch gestures

### Development
- `typescript` - Type safety
- `@types/react` - React type definitions
- `eslint` - Code linting
- `prettier` - Code formatting

## 🛠️ Development Commands

```bash
# Start development server
npm start

# Run on specific platform
npm run android
npm run ios

# Reset Metro cache
npm start -- --reset-cache

# Lint code
npm run lint

# Run tests
npm test

# Clean builds
cd android && ./gradlew clean && cd ..  # Android
# iOS: Clean in Xcode
```

## 🔧 Troubleshooting

### Common Issues

**Metro bundler not starting:**
```bash
npx react-native start --reset-cache
```

**Android build errors:**
```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

**iOS build errors:**
- Clean build folder in Xcode
- Run `pod install` in ios folder
- Reset iOS Simulator

**Navigation errors:**
- Ensure all navigation dependencies are installed
- Check React Navigation version compatibility

### Performance Tips
- Use `react-native-flipper` for debugging
- Profile with Hermes engine
- Optimize images and assets
- Test on physical devices

## 🚀 Production Checklist

### Before Release
- [ ] Replace mock OTP with real SMS service
- [ ] Add proper error handling and logging
- [ ] Implement loading states
- [ ] Test on multiple devices/screen sizes
- [ ] Add analytics tracking
- [ ] Configure app icons and splash screens
- [ ] Set up code signing (iOS) / keystores (Android)
- [ ] Test with real phone numbers internationally

### Security Considerations
- [ ] Implement rate limiting for OTP requests
- [ ] Add phone number format validation
- [ ] Protect against brute force attacks
- [ ] Use HTTPS for all API calls
- [ ] Validate server responses
- [ ] Handle edge cases (network failures, etc.)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in this repository
- Check the troubleshooting section above
- Review React Native documentation

---

**Built with ❤️ using React Native and TypeScript**
