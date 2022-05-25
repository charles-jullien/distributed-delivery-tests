// Please insert some code to have a nice and functionnal chart to view the audience

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { BrushChart } from "./BrushChart";
import { Serie } from "@nivo/line";
import { maxValue, generateSerie } from "../../../common/helpers";
import moment from "moment";

interface BrushProps {
  brush: Serie[];
}

export const Brush: React.FC<BrushProps> = ({ brush }) => {
  const [maxBrush, setMaxBrush] = useState(generateSerie("maxBrush"));

  useEffect(() => {
    if (brush.length) {
      setMaxBrush(buildMaxSerie(brush[0]));
    }
  }, [brush]);

  return (
    <BrushWrapper>
      <ChartWrapper>
        <BrushChart maxBrush={maxBrush} data={brush} />
      </ChartWrapper>
    </BrushWrapper>
  );
};

const BrushWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const ChartWrapper = styled.div`
  height: 15vh;
`;

const buildMaxSerie = (serie: Serie) =>
  generateSerie("maxBrush", [
    {
      x: moment(serie.data[0].x, "YYYY-MM-DD-hh").valueOf(),
      y: maxValue(serie, "y"),
    },
    {
      x: moment(serie.data[serie.data.length - 1].x, "YYYY-MM-DD-hh").valueOf(),
      y: maxValue(serie, "y"),
    },
  ]);
