## ACE - RN
A very simple CLI tool to generate the **Ultimate React Native starter kit**.
This is a very basic CLI with no options to help developers start creating the project with already built-in production ready features in a matter of seconds. Just disable or remove any unnecessary (not needed feature from the code of the project).

![ACE-RN usage image](https://i.postimg.cc/d3ByBs1R/ffff.png)
---
The starter kit provides:

 - A good/clean pattern/architecture: call service from UI => service calls thunk and updates store (no return: no side effects, one source of truth: store) => UI uses selector (middlewares work in between).
 - Testable components / screens.
 - Already configured fonts.
 - Already configured icons.
 - Redux toolkit, redux persist, thunks all typed.
 - Offline notice.
 - Full screen.
 - RTL support
 - Sentry.
 - I18n.
 - Theming with color schemes (exp. dark mode).
 - Network service with DI, provider configurable with token&refresh, cancel token, interceptors and error handling.
 - Environment variables already configured.
 - Global loader: middleware to detect loading then add it to global slice or dispatch directly to global reducer from UI.
 - Global error: service => thunk (reject) => middleware (dispatch global error) => state updated by thunk => UI toast selector.
 - Rollback transactions options in case of failure.
 - Singletons that are used to store critical info in memory but not persisted.
 - Logger per API (allowed APIs for logging + allowed levels) / per user implicit (no need to add it by developers) and Networking requests logs.
 - Performance: implicit: inside logger with a reference to message.
More features to be added later...

 




Please visit the [project repo](https://github.com/AceBlazer/react-native-ultimate-starter) for more details, clarifications or issues.  
