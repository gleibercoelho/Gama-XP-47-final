import { api } from "./api";
import { ResponseObject } from "../Utils/type";

export function fetchData() {
    return api.get("/");
}