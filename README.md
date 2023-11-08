# TEST AV React Native

Run:
```
adb devices
npx react-native start
npx react-native run-android
```

Build:
```
yarn install
cd android
(./gradlew clean)
./gradlew assembleRelease
```

Screens:
```
Pages/colors.js:	Farger
Pages/globb.js:		???
```

App.js is the front/start page of this application.
From here you will navigate to different test pages.
- Colors will be a page with different colored boxes
info will be clickable pictures with info

Globb will be a button to a code in another tab
