export const API_BASE_URL = "http://localhost:8000/api";

// -------------------------------------------------------------
// AUTH HEADERS (Reads token from localStorage)
// -------------------------------------------------------------
export function getAuthHeaders(isJson = true) {
    const token = localStorage.getItem("access_token");
    const token = localStorage.getItem('authToken');
    let headers = {
        "Authorization": token ? `Bearer ${token}` : ""
    };

    if (isJson) {
        headers["Content-Type"] = "application/json";
    }

    return headers;
}

// -------------------------------------------------------------
// API ROUTES (Reusable across all pages)
// -------------------------------------------------------------


export const API = {
`${API_BASE_URL}`,
}