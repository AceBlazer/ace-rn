import fs from "fs/promises";

const rename = async (name: string) => {
  const configurationFiles = [
    `${name}/app.json`,
    `${name}/package.json`,
    `${name}/app/config/sentry/index.ts`,
    `${name}/android/settings.gradle`,
    `${name}/android/app/build.gradle`,
    `${name}/android/app/src/debug/java/com/poste/ReactNativeFlipper.java`,
    `${name}/android/app/src/main/java/com/poste/MainActivity.java`,
    `${name}/android/app/src/main/java/com/poste/MainApplication.java`,
    `${name}/android/app/src/main/res/values/strings.xml`,
    `${name}/android/app/src/release/java/com/poste/ReactNativeFlipper.java`,
    `${name}/ios/Podfile`,
    `${name}/ios/poste/Info.plist`,
    `${name}/ios/poste/LaunchScreen.storyboard`,
    `${name}/ios/poste.xcodeproj/project.pbxproj`,
    `${name}/ios/poste.xcodeproj/xcschemes/poste.xcscheme`,
    `${name}/ios/posteTests/posteTests.m`,
  ];

  for (const configurationFile of configurationFiles) {
    try {
      const data = await fs.readFile(configurationFile, { encoding: "utf8" });
      const result = data.replace(/poste/g, name);

      try {
        await fs.writeFile(configurationFile, result, { encoding: "utf8" });
      } catch (error) {
        console.log(
          `could not change project name in file ${configurationFile}`
        );
      }
    } catch (error) {
      console.log(`could not read file ${configurationFile}`);
    }
  }

  fs.rename(`${name}/ios/poste`, `${name}/ios/${name}`);
  fs.rename(
    `${name}/android/app/src/main/java/com/poste`,
    `${name}/android/app/src/main/java/com/${name}`
  );
  fs.rename(
    `${name}/android/app/src/debug/java/com/poste`,
    `${name}/android/app/src/debug/java/com/${name}`
  );
  fs.rename(
    `${name}/android/app/src/release/java/com/poste`,
    `${name}/android/app/src/release/java/com/${name}`
  );
  fs.rename(`${name}/ios/posteTests`, `${name}/ios/${name}Tests`);
  fs.rename(`${name}/ios/poste.xcodeproj`, `${name}/ios/${name}.xcodeproj`);
  fs.rename(`${name}/ios/poste.xcodeproj`, `${name}/ios/${name}.xcodeproj`);
};

export default rename;
