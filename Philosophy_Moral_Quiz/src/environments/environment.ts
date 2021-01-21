// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: KEY,
    authDomain: "moral-quiz.firebaseapp.com",
    projectId: "moral-quiz",
    storageBucket: "moral-quiz.appspot.com",
    messagingSenderId: "877147098921",
    appId: "1:877147098921:web:c0bf6b566ad5ea5be03138",
    measurementId: "G-TNH9FMQMK5"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
