import { dataActions } from "core/store/slices/data.slice";

export default function clearCache() {
    location.reload();
    dataActions.clearAllData();
    localStorage.clear();
}
