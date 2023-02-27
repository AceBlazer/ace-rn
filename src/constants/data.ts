export const url =
  "https://github.com/AceBlazer/react-native-ultimate-starter.git";

export const msgs = {
  one: "👋 What's the name of your project? ",
  twoStart: "👌 Let's start ",
  twoEnd: "",
  three: "🤙 Ready to go! Run ",
  cmdStart: " cd ",
  cmdEnd: " && npm start ",
  error: "👎 Try another name?",
};

export const description = `The ultimate React-Native starter kit CLI 🔥🔥🔥

ACE-RN starter contains:
  - testable components / screens + clean architecture (ts, BaseView, combine providers).
  - fonts.
  - icomoon.
  - redux toolkit, redux persist, thunks, custom subscribe package for a specific slice all typed.
  - offline notice.
  - full screen.
  - RTL support.
  - sentry (couldn't add sourcemaps and multiple environments, only multiple releases).
  - i18n.
  - theming with color schemes.
  - network service DI, provider configurable with token&refresh, cancel token, cache, interceptors and error handling.
  - env vars (couldn't add inline custom var so added react_app_environment env var).
  - global loader: slice global, selector in app.js, middleware to detect loading then add it to global
    (couldn't configure from whom it gets loading, but rather from thunk itself). From ui, dispatch directly to global reducer.
  - global error: service => thunk (reject) => middleware (dispatch global error) => state updated by thunk => ui toast.
  - rollback transaction (redux-undo) used as example in settings slice to undo store changes when request fails
    should be dispatched manually.
  - singletons that are used to store critical info in memory so it's not persisted (example: current connected user: we cant always
    get it from secure/async storage so we get it the first time and populate our singleton. BEWARE: in this case our source of truth
    should be always the singleton).
  - logger per api (allowed apis for logging + allowed levels) / per user implicit (no need to add it by devs) + axios requests logs.
  - performance: implicit: inside logger with a reference to message, should write logs "x started ..." and "x ended ..." will
    automatically include performance for "x" (exp. included in network elapsed time).`;
