import { configureStore } from "@reduxjs/toolkit";

import reducers from './../redux/reducers';
export default configureStore({
  reducer: reducers,
});
