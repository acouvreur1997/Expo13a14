import { ExpoConfig } from "expo/config";

type AppConfig = {
  logLevel: "debug" | "info" | "warn" | "error";
  name: string;
  package: string;
};

const appConfigs: Record<string, AppConfig> = {
  debug: {
    logLevel: "debug",
    name: "13à14 Debug",
    package: "com.expo.demo.debug",
  },
  release: {
    logLevel: "warn",
    name: "13à14",
    package: "com.expo.demo",
  },
};

export default (): ExpoConfig => {
  const env = process.env.ENV || "debug";
  const config = appConfigs[env];

  return {
    plugins: [],
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    orientation: "portrait",
    name: config.name,
    slug: "13-a-14-app",
    version: "1.0.0",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: config.package,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: config.package,
    },
  };
};
