import { useState, useEffect } from "react";

function useCookies(
  cookieName: string
): [string | null, (newValue: string, expires?: string) => void] {
  const [cookieValue, setCookieValue] = useState<string | null>(null);

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      const name = cookie[0];
      const value = cookie[1];
      if (name === cookieName) {
        setCookieValue(value);
        return;
      }
    }
  }, [cookieName]);

  function setCookie(newValue: string, expires = "") {
    const cookie = `${cookieName}=${newValue}; expires=${expires}; path=/`;
    document.cookie = cookie;
    setCookieValue(newValue);
  }

  return [cookieValue, setCookie];
}

export default useCookies;
