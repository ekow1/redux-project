import { legacy_createStore as createStore} from "redux";

import noteReducer from "./noteReducer";

const store = createStore( noteReducer);

export default store