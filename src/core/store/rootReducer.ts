import uiSlice from "./slices/ui.slice";
import dataSlice from "./slices/data.slice";
import fetchGroupSlice from "./slices/fetch/groups/fetchGroups.slice";
import fetchTeachersSlice from "./slices/fetch/teachers/fetchTeachers.slice";
import fetchAuditoriumsSlice from "./slices/fetch/auditoriums/fetchAuditoriums.slice";
import fetchEventsSlice from "./slices/fetch/events/fetchEvents.slice";
import filterSlice from "./slices/filter.slice";

const rootReducers = {
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
    fetchGroups: fetchGroupSlice.reducer,
    fetchTeachers: fetchTeachersSlice.reducer,
    fetchAuditoriums: fetchAuditoriumsSlice.reducer,
    fetchEvents: fetchEventsSlice.reducer,
    filter: filterSlice.reducer,
};

export default rootReducers;
