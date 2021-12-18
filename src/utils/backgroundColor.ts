import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

export function useChangeBackgroundColor() {
  const router = useRouter();

  const handleUpdateBgColor = useCallback((url: string) => {
    if (process.browser) {
      const path = url.split("/")[1];
      switch (path) {
        case "restaurant":
          document.documentElement.classList.add("restaurant");
          document.documentElement.classList.remove("home");
          break;
        case "":
        default:
          document.documentElement.classList.add("home");
          document.documentElement.classList.remove("restaurant");
          break;
      }
    }
  }, []);

  useEffect(() => {
    handleUpdateBgColor(router.route);
    router.events.on("routeChangeComplete", handleUpdateBgColor);
    return () => {
      router.events.off("routeChangeComplete", handleUpdateBgColor);
    };
  }, [handleUpdateBgColor, router]);
}
