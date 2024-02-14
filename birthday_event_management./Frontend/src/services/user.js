import instance from "./axios";

const api_uri = "https://localhost:8081";

export const userList = ()=> instance.get('{api_uri}/api/v1/user/userlist');