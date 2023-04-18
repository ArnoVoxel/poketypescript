import axios, { AxiosInstance } from "axios";
import FormData from "form-data";

export class AxiosInstanceService {
  readonly axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axios.interceptors.request.use((req) => {
      if (req.method && req.baseURL && req.url) {
        const body = req.data ? JSON.stringify(req.data) : "";
        console.log(
          `${req.method.toUpperCase()} ${req.baseURL + req.url} ${body}`
        );
      }
      return req;
    });
  }

  setAuthorization(authorization: string) {
    this.axios.defaults.headers["Authorization"] = authorization;
  }

  private buildUrl(endpoint: string, query?: URLSearchParams) {
    if (query && Array.from(query).length)
      return `${endpoint}?${query.toString()}`;
    else return endpoint;
  }

  private getDataHeaders(data: any) {
    if (data instanceof FormData) return data.getHeaders();
    else return {};
  }

  async get<TReturn = any>(endpoint: string, config: GetConfig = {}) {
    const url = this.buildUrl(endpoint, config.query);
    return (await this.axios.get<TReturn>(url)).data;
  }

  async post<TReturn = any>(endpoint: string, config: PostConfig = {}) {
    const url = this.buildUrl(endpoint, config.query);
    const contentTypeHeaders = this.getDataHeaders(config.data);
    return (
      await this.axios.post<TReturn>(url, config.data, {
        headers: contentTypeHeaders,
      })
    ).data;
  }

  async put<TReturn = any>(endpoint: string, config: PutConfig = {}) {
    const url = this.buildUrl(endpoint, config.query);
    const contentTypeHeaders = this.getDataHeaders(config.data);
    return (
      await this.axios.put<TReturn>(url, config.data, {
        headers: contentTypeHeaders,
      })
    ).data;
  }

  async patch<TReturn = any>(endpoint: string, config: PatchConfig = {}) {
    const url = this.buildUrl(endpoint, config.query);
    const contentTypeHeaders = this.getDataHeaders(config.data);
    return (
      await this.axios.patch<TReturn>(url, config.data, {
        headers: contentTypeHeaders,
      })
    ).data;
  }

  async delete<TReturn = any>(endpoint: string, config: DeleteConfig = {}) {
    const url = this.buildUrl(endpoint, config.query);
    return (await this.axios.delete<TReturn>(url)).data;
  }
}

interface GetConfig {
  query?: URLSearchParams;
}

interface PostConfig {
  query?: URLSearchParams;
  data?: any;
}

interface PutConfig {
  query?: URLSearchParams;
  data?: any;
}

interface PatchConfig {
  query?: URLSearchParams;
  data?: any;
}

interface DeleteConfig {
  query?: URLSearchParams;
}
