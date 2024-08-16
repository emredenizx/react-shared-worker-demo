import { Answers } from "@/types";
import generateSuggestions from "@/utils/suggestions";

const connections: MessagePort[] = [];

onconnect = function (event: MessageEvent) {
  const port = event.ports[0];
  connections.push(port);

  port.onmessage = (event: MessageEvent<Answers>) => {
    const suggestions = generateSuggestions(event.data);
    connections.forEach((connection) => connection.postMessage(suggestions));
  };
};
