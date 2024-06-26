import React, { memo } from "react";

import {
  Button,
  Div,
  FormItem,
  Group,
  Input,
  Platform,
  Spacing,
  Textarea,
  Title,
  usePlatform,
} from "@vkontakte/vkui";

import { AppDiv } from "$/components/AppDiv";

interface IProps {
  initialSystemMessage: string;
  isChangedSystemMessage: boolean;
  systemMessageValue: string;
  resetSystemMessage: () => void;
  clearSystemMessage: () => void;
  updateSystemMessage: (value: string) => void;
}

function SystemMessageForm({
  initialSystemMessage,
  clearSystemMessage,
  isChangedSystemMessage,
  systemMessageValue,
  resetSystemMessage,
  updateSystemMessage,
}: IProps) {
  return (
    <Group
      mode="plain"
      header={
        <AppDiv>
          <Title level="3" Component="h3">
            Системное сообщение
          </Title>
        </AppDiv>
      }
      description="Системное сообщение предназначено для ChatGPT.
                Оно определяет начальный контекст всего диалога.
                (Писать стихи, музыку, код, рецепты и т.д.)"
    >
      <FormItem>
        <Textarea
          placeholder="Введите промпт..."
          value={systemMessageValue}
          onChange={({ target }) => updateSystemMessage(target.value)}
        />
      </FormItem>
      <Div style={{ paddingTop: 0 }}>
        {initialSystemMessage !== "" && (
          <Button
            mode="outline"
            disabled={systemMessageValue === ""}
            onClick={clearSystemMessage}
          >
            Очистить системное сообщение
          </Button>
        )}
        <Spacing size={8} />
        <Button
          disabled={isChangedSystemMessage}
          mode="outline"
          appearance="negative"
          onClick={resetSystemMessage}
        >
          Сбросить системное сообщение
        </Button>
      </Div>
    </Group>
  );
}

export default memo(SystemMessageForm);
