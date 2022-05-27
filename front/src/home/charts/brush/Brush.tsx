// Please insert some code to have a nice and functionnal chart to view the audience

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { BrushChart } from "./BrushChart";
import { Serie } from "@nivo/line";
import { maxValue, generateSerie } from "../../../common/helpers";
import moment from "moment";

import { BrushTooltip } from "../../../common/tooltip";

interface BrushProps {
  brush: Serie[];
}

export const Brush: React.FC<BrushProps> = ({ brush }) => {
  const [maxBrush, setMaxBrush] = useState(generateSerie("maxBrush"));
  const [xScale, setXScale] = useState(0);
  const [margin, setMargin] = useState({ top: 0, right: 0, bottom: 0, left: 0});
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [initialMinEdge, setInitialMinEdge] = useState(0);
  const [initialMaxEdge, setInitialMaxEdge] = useState(0);

  useEffect(() => {
    if (brush.length) {
      setMaxBrush(buildMaxSerie(brush[0]));
      setXScale(1);
      setMargin({ top: 1, right: 1, bottom: 1, left: 1});
      setWidth(1);
      setHeight(1);
      setInitialMaxEdge(1);
      setInitialMinEdge(1);

    }
  }, [brush]);

  return (
    <BrushWrapper>
      <ChartWrapper>
        <BrushChart maxBrush={maxBrush} data={brush} />
        <BrushTooltip
          xScale={xScale}
          margin={margin}
          width={width}
          height={height}
          initialMinEdge={initialMinEdge}
          initialMaxEdge={initialMaxEdge}
        />
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
