import store from "./store";

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof store.getState>;

export default store;
