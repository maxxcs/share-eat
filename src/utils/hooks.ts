import { useCallback } from "react";
import { useRouter } from "next/router";

export function useBackButton() {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return router.pathname !== "/" ? handleBack : null;
}

export function useChangeBackgroundColor() {
  const router = useRouter();

  if (process.browser) {
    switch (router.pathname) {
      case "/restaurant/[id]":
        document.documentElement.classList.add("restaurant");
        document.documentElement.classList.remove("home");
        break;
      case "/":
      default:
        document.documentElement.classList.add("home");
        document.documentElement.classList.remove("restaurant");
        break;
    }
  }
}
