import uiSlice from "./slices/ui.slice";
import groupsSlice from "./slices/group.slice";
import fetchGroupSlice from "./slices/fetch/groups/fetchGroups.slice";
import fetchTeachersSlice from "./slices/fetch/teachers/fetchTeachers.slice";
import fetchAuditoriumsSlice from "./slices/fetch/auditoriums/fetchAuditoriums.slice";
import fetchEventsSlice from "./slices/fetch/events/fetchEvents.slice";

const rootReducers = {
    ui: uiSlice.reducer,
    groups: groupsSlice.reducer,
    fetchGroups: fetchGroupSlice.reducer,
    fetchTeachers: fetchTeachersSlice.reducer,
    fetchAuditoriums: fetchAuditoriumsSlice.reducer,
    fetchEvents: fetchEventsSlice.reducer,
};

export default rootReducers;
