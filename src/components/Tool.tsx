import React, { useRef } from "react";
import { DomainType, Tool } from "types/Tool";

import styles from "./Tool.module.scss";

const domainTypeToString: {
  [k in DomainType]: string;
} = {
  front: "Frontend",
  back: "Backend",
  design: "Design",
};

interface Props {
  tool: Tool;
}
const ToolTile = ({ tool }: Props) => {
  const confidenceBgRef = useRef<HTMLDivElement>(null);

  function toggleConfidence(show: boolean) {
    if (!confidenceBgRef.current) return;
    const confidenceKeyFrames: Keyframe[] = [
      {
        width: 0,
      },
      {
        width: `${tool.confidence * 10}%`,
      },
    ];
    confidenceBgRef.current.animate(
      show ? confidenceKeyFrames : confidenceKeyFrames.reverse(),
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  }

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => toggleConfidence(true)}
      onMouseLeave={() => toggleConfidence(false)}
    >
      <div className={styles.tech}>{tool.name}</div>
      <div className={styles.confidenceBg} ref={confidenceBgRef} />
      <div className={styles.info}>
        {domainTypeToString[tool.domain]} ·{" "}
        <strong>{tool.confidenceLevel.toLocaleUpperCase()}</strong>
      </div>
    </div>
  );
};

export default ToolTile;
