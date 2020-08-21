import React, { useState } from "react";

import { Button } from "../Button";
import { Wrapper, StyledTextarea, BottomBar, Status, Buttons } from "./styled";

import { isValidJSON } from "../../common/helpers";
import { defaultParams } from "./default";

type EditorProps = {
  onSubmitCallback: Function;
};

export const Editor = ({ onSubmitCallback }: EditorProps) => {
  const [config, updateConfig] = useState<string>(
    JSON.stringify(defaultParams, undefined, 2)
  );
  const [parseError, setParseError] = useState<boolean>(true);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setParseError(isValidJSON(value));
    updateConfig(value);
  };

  const prettifyJson = () => {
    const json = JSON.parse(config);
    const pretty = JSON.stringify(json, undefined, 2);
    updateConfig(pretty);
  };

  const handleApply = () => {
    onSubmitCallback(JSON.parse(config));
  };

  return (
    <Wrapper>
      <StyledTextarea value={config} onChange={handleInput} />
      <BottomBar>
        <Status error={parseError}>
          {parseError ? "Valid JSON" : "InvalidJSON"}
        </Status>
        <Buttons>
          <Button
            disabled={!parseError}
            onClick={prettifyJson}
            title={"Prettify JSON"}
          />
          <Button
            disabled={!parseError}
            onClick={handleApply}
            title={"Apply"}
          />
        </Buttons>
      </BottomBar>
    </Wrapper>
  );
};
