import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.lotogagnant.starter',
  appName: 'loto gagnant',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, // Durée d'affichage du splash screen en millisecondes
      launchAutoHide: false, // Ne pas cacher automatiquement le splash screen
      splashImmersive: true,
      splashFullScreen: true,
      backgroundColor: '#ffffffff',
      splashFileName: 'resources/splash.png',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashScaleType: 'CENTER_CROP',
      splashSpinnerStyle: 'horizontal',
      splashSpinnerColor: '#999999',
      splashMaintainAspectRatio: true,
      splashShowOnlyFirstTime: false,
      splashSpinnerSize: 'large',
    },
  },
};

export default config;
