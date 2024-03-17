import { createStore } from 'redux';
import reducer from '../reducer/CampaignReducer';


const store = createStore(reducer);

export default store;
