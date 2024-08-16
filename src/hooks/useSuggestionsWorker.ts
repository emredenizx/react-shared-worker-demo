import { Answers } from "@/types";
import { Dispatch, useCallback, useEffect, useRef } from "react";

const useSuggestionsWorker = (onMessage?: Dispatch<MessageEvent["data"]>) => {
  const ref = useRef<SharedWorker | null>(null);

  const postMessage = useCallback(
    (data: Answers) => ref.current?.port.postMessage(data),
    []
  );

  useEffect(() => {
    ref.current = new SharedWorker(
      new URL("../workers/suggestionsWorker.ts", import.meta.url),
      {
        type: "module",
      }
    );

    ref.current.port.onmessage = (event: MessageEvent) =>
      onMessage?.(event.data);

    ref.current.onerror = (event: ErrorEvent) => console.error(event);
  }, [onMessage]);

  // Unmount
  useEffect(() => () => ref.current?.port.close(), []);

  return { postMessage };
};

export default useSuggestionsWorker;
