import { ExpoConfig } from "expo/config";

type AppConfig = {
  logLevel: "debug" | "info" | "warn" | "error";
  name: string;
  package: string;
};

const version = "1.0.0";

const appConfigs: Record<string, AppConfig> = {
  debug: {
    logLevel: "debug",
    name: "Expo debug",
    package: "com.expo.demo.debug",
  },
  release: {
    logLevel: "warn",
    name: "Expo",
    package: "com.expo.demo",
  },
};

export default (): ExpoConfig => {
  const env = process.env.ENV || "debug";
  const config = appConfigs[env];

  return {
    plugins: [
      [
        "app-icon-badge",
        {
          enabled: env !== "release",
          badges: [
            {
              text: env,
              type: "ribbon",
              color: "white",
              background: "#94ad99",
            },
            {
              text: version,
              type: "banner",
              color: "white",
              background: "#94ad99",
            },
          ],
        },
      ],
    ],
    splash: {
      image: "./assets/splash-screen.png",
      resizeMode: "cover",
    },
    orientation: "portrait",
    name: config.name,
    slug: "expo-app",
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
        foregroundImage: "./assets/icon-adaptative.png",
        backgroundColor: "#ffffff",
      },
      package: config.package,
    },
  };
};
