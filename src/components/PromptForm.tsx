import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { Form } from "react-final-form";
import { useState } from "react";
import { isEmpty } from "lodash";
import ConversationCard from "./ConversationCard";
import queryModel from "../lib/api/endpoints/prompts";
import { showSnackbar } from "../store/actions";
import PromptFormContent from "./PromptFormContent";

export interface Conversation {
  role: "user" | "assistant";
  message: string;
}

function PromptForm() {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<Conversation[]>([]);

  const onSubmit = async (values: any) => {
    try {
      const { query } = values;
      addConversation("user", query);
      setLoading(true);

      const data = await queryModel(query);
      const { messages } = data;

      addAssistantConversations(messages);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setLoading(false);
        showSnackbar(error.message);
      }
    }
  };

  const addAssistantConversations = (messages: string[]) => {
    messages.forEach((message) => {
      addConversation("assistant", message);
    });
  };

  const addConversation = (role: Conversation["role"], message: string) => {
    const conversation = {
      role,
      message,
    };
    setConversation((prev) => [...prev, conversation]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!isEmpty(conversation) && (
        <Card
          sx={{
            margin: 4,
            padding: 4,
            maxHeight: "400px",
            overflow: "scroll",
          }}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {conversation.map((convo) => (
              <ConversationCard {...convo} />
            ))}
          </CardContent>
        </Card>
      )}

      <Box sx={{ padding: 4, width: "100%" }}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <PromptFormContent loading={loading} />
            </form>
          )}
        />
      </Box>
    </Box>
  );
}

export default PromptForm;
