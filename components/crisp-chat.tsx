import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4b84c15c-f1f5-4166-82a2-7618e4d9670a");
  }, []);

  return <div id="crisp-chat-container"></div>;
};
