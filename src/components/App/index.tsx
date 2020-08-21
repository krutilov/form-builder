import React, { useState, useCallback } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Builder } from "../Builder";
import { Editor } from "../Editor";
import { AppWrapper, H1 } from "./styled";

import { Form } from "../../common/types";

export const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [builderData, setBuilderData] = useState<Form>();

  const applyCallback = useCallback((data: Form) => {
    setBuilderData(data);
    setTabIndex(1);
  }, []);

  return (
    <AppWrapper>
      <H1>Form generator</H1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Config</Tab>
          <Tab>Result</Tab>
        </TabList>
        <TabPanel forceRender>
          <Editor onSubmitCallback={applyCallback} />
        </TabPanel>
        <TabPanel forceRender>
          {builderData ? <Builder {...builderData} /> : "No data to display"}
        </TabPanel>
      </Tabs>
    </AppWrapper>
  );
};
