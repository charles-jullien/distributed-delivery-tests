import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Bandwidth } from "./bandwidth";
import { Audience } from "./concurrent-viewers";
import { useBandiwdth, useAudience } from "../../common/hooks";

export const Charts: React.FC = () => {
  const [bandwidth] = useBandiwdth(15);
  const [currentBandwidth, setCurrentBandWidth] = useState(bandwidth);
  const [initBandwidth, setInitBandwidth] = useState(true);
  const [audience] = useAudience(15);
  const [currentAudience, setCurrentAudience] = useState(audience);
  const [initAudience, setInitAudience] = useState(true);

  useEffect(() => {
    if (bandwidth.length && bandwidth[0].data.length && initBandwidth) {
      setCurrentBandWidth(bandwidth);
      setInitBandwidth(false);
    }
    if (audience.length && audience[0].data.length && initAudience) {
      setCurrentAudience(audience);
      setInitAudience(false);
    }
  }, [initBandwidth, initAudience, bandwidth, audience]);

  return (
    <ChartsWrapper>
      <Bandwidth bandwidth={currentBandwidth} />
      <Audience audience={currentAudience} />
    </ChartsWrapper>
  );
};

const ChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  padding: 20px;

  & > * {
    margin-bottom: 10px;
  }
`;
