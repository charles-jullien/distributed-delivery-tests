// Please insert some code to have a nice and functionnal chart to view the audience

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { AudienceChart } from "./AudienceChart";
import { Serie } from "@nivo/line";
import { maxValue, generateSerie } from "../../../common/helpers";
import moment from "moment";

interface AudienceProps {
  audience: Serie[];
}

export const Audience: React.FC<AudienceProps> = ({ audience }) => {
  const [maxAudience, setMaxAudience] = useState(generateSerie("maxAudience"));

  useEffect(() => {
    if (audience.length) {
      setMaxAudience(buildMaxSerie(audience[0]));
    }
  }, [audience]);

  return (
    <AudienceWrapper>
      <Title> Concurrent viewers </Title>
      <ChartWrapper>
        <AudienceChart maxAudience={maxAudience} data={audience} />
      </ChartWrapper>
    </AudienceWrapper>
  );
};

const AudienceWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const ChartWrapper = styled.div`
  height: 30vh;
`;

const Title = styled.h2`
  margin-left: 20px;
`;

const buildMaxSerie = (serie: Serie) =>
  generateSerie("maxAudience", [
    {
      x: moment(serie.data[0].x, "YYYY-MM-DD-hh").valueOf(),
      y: maxValue(serie, "y"),
    },
    {
      x: moment(serie.data[serie.data.length - 1].x, "YYYY-MM-DD-hh").valueOf(),
      y: maxValue(serie, "y"),
    },
  ]);
