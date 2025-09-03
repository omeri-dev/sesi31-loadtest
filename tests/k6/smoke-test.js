import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1,          // 1 user
  iterations: 1,   // jalan sekali saja (smoke test)
};

export default function () {
  const res = http.get("http://localhost:3000"); // ganti dengan base URL app kamu
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
