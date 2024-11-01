import axios, { AxiosInstance } from "axios";

export class apiManager {
  protected readonly instance: AxiosInstance;

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Request timed out.",
    });
  }

  axiosInstance() {
    return this.instance;
  }

  login(username: string, password: string) {
    return this.instance.post("/login", {
      username: username,
      password: password,
    });
  }

  logout() {
    return this.instance.post("/logout");
  }

  getProfile() {
    return this.instance.get("/profile");
  }

  refresh(refreshToken: string) {
    return this.instance.post("/refresh", {
      refreshToken: refreshToken,
    });
  }
  
}
