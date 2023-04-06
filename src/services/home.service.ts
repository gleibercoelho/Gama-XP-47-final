import { api } from "./api";


export function fetchData() {
    return api.get("/");
}