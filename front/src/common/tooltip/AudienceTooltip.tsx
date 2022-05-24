import React from "react";
import styled from "@emotion/styled";
import { SliceTooltipProps, Serie } from "@nivo/line";
import moment from "moment";
import { DataLine } from "./DataLine";

interface AudienceTooltipProps {
  sliceData: SliceTooltipProps;
  maxAudience: Serie;
}

export const AudienceTooltip: React.FC<AudienceTooltipProps> = ({
  sliceData,
  maxAudience,
}) => {
  const httpData = {
    color: sliceData.slice.points[1].color,
    value: round(Number(sliceData.slice.points[1].data.y)),
  };

  maxAudience.color = "#7969ef";

  const cumulated = round(
    Number(sliceData.slice.points[0].data.y) +
      Number(sliceData.slice.points[1].data.y)
  );

  return (
    <ToolTipWrapper>
      <Date>
        {moment(sliceData.slice.points[0].data.x).format(
          "dddd DD-MM-YYYY HH:mm (Z)"
        )}
      </Date>
      <Stats>
        <DataLine
          label={"Http"}
          color={httpData.color}
          value={httpData.value}
          unit={"Gbps"}
        />
        {maxAudience.data.length ? (
          <DataLine
            label={"Max http"}
            color={maxAudience.color}
            value={round(maxAudience.data[0].y as number)}
            unit={"Gbps"}
          />
        ) : null}
      </Stats>
      <Results>
        <DataLine
          label={"Total"}
          color={"#00b76b"}
          value={cumulated}
          unit={"Gbps"}
        />
      </Results>
    </ToolTipWrapper>
  );
};

const round = (value: number) =>
  Number((Math.round(Number(value)) / (10 * 1000 * 1000 * 1000)).toFixed(2));

const ToolTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 2px;
  background-color: "white";
  padding: 15px;
  border: "1px solid #ccc";
  font-size: 13px;

  -webkit-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.5);
`;

const Date = styled.div`
  font-weight: bold;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const Results = styled.div``;
