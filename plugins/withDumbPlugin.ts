import type { ConfigPlugin } from "@expo/config-plugins";
import {
  withAndroidManifest,
  withInfoPlist,
  withPlugins,
} from "@expo/config-plugins";

const androiManifestPlugin =
  (androidDumbId: string): ConfigPlugin =>
  (expoConfig) =>
    withAndroidManifest(expoConfig, (content) => {
      let androidManifest = content.modResults.manifest;

      if (
        androidManifest.application &&
        androidManifest.application[0] &&
        androidManifest.application[0]["meta-data"]
      ) {
        androidManifest.application[0]["meta-data"].push({
          $: {
            "android:name": "Dumb:Appid",
            "android:value": androidDumbId,
          },
        });
      }
      return content;
    });

const iosInfoPlist =
  (iosDumbId: string): ConfigPlugin =>
  (expoConfig) =>
    withInfoPlist(expoConfig, (content) => {
      content.modResults.DumbId = iosDumbId;

      return content;
    });

type Props = {
  androidDumbId: string;
  iosDumbId: string;
};

const withDumbPlugin: ConfigPlugin<Props> = (
  expoConfig,
  { androidDumbId, iosDumbId }
) => {
  const plugins = [
    androiManifestPlugin(androidDumbId),
    iosInfoPlist(iosDumbId),
  ];

  return withPlugins(expoConfig, plugins);
};

export default withDumbPlugin;
