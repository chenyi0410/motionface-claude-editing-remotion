import React from "react";
import { Composition } from "remotion";
import { EditingStory } from "./Story";
export const Root: React.FC = () => (
  <Composition
    id="EditingStory"
    component={EditingStory}
    durationInFrames={902}
    fps={30}
    width={1280}
    height={720}
  />
);
