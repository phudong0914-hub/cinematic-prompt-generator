import React from 'react';
import { Composition } from 'remotion';
import { CineComposition } from './CineComposition';

export const Root: React.FC = () => {
  return (
    <Composition
      id="CineMainComposition"
      component={CineComposition}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        title: "Cine Prompt Pro Master",
        director: "Đạo Diễn Trungvt",
        sequences: []
      }}
    />
  );
};
