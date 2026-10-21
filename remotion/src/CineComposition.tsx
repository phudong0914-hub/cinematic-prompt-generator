import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Img
} from 'remotion';

export interface SequenceItem {
  id: string;
  title: string;
  from: number;
  durationInFrames: number;
  motionRecipe?: string;
  imageSrc?: string;
  subtitle?: {
    text: string;
    color: string;
    highlightColor: string;
    fontFamily: string;
  };
}

export interface CineProps {
  title?: string;
  director?: string;
  sequences?: SequenceItem[];
}

export const CineComposition: React.FC<CineProps> = ({ sequences = [] }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#090A0F' }}>
      {sequences.map((seq) => (
        <Sequence
          key={seq.id}
          from={seq.from}
          durationInFrames={seq.durationInFrames}
        >
          <SceneRenderer sequence={seq} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const SceneRenderer: React.FC<{ sequence: SequenceItem }> = ({ sequence }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 2.5D Camera Drift / Parallax (Recipe: rec_parallax_25d)
  const scale = interpolate(frame, [0, sequence.durationInFrames], [1.0, 1.15], {
    extrapolateRight: 'clamp'
  });

  // Spring Zoom Punch (Recipe: rec_whip_zoom_punch)
  const punchSpring = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.5, stiffness: 100 }
  });
  const punchScale = interpolate(punchSpring, [0, 1], [1.3, 1.0]);

  const activeScale = sequence.motionRecipe?.includes('whip_zoom') ? punchScale : scale;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      {/* Background Plate with 2.5D Camera Drift */}
      <AbsoluteFill
        style={{
          transform: `scale(${activeScale})`,
          transformOrigin: 'center center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {sequence.imageSrc ? (
          <Img
            src={sequence.imageSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, #1e293b 0%, #090a0f 100%)'
            }}
          />
        )}
      </AbsoluteFill>

      {/* Sigmar Kinetic Subtitle */}
      {sequence.subtitle && sequence.subtitle.text && (
        <div
          style={{
            position: 'absolute',
            bottom: '180px',
            left: '40px',
            right: '40px',
            textAlign: 'center',
            fontFamily: sequence.subtitle.fontFamily,
            fontSize: '52px',
            fontWeight: 900,
            color: sequence.subtitle.color,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 0 20px rgba(16,185,129,0.4)',
            zIndex: 10
          }}
        >
          {sequence.subtitle.text}
        </div>
      )}
    </AbsoluteFill>
  );
};
