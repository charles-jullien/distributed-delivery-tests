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
  console.log(sliceData);
  const audienceData = {
    color: sliceData.slice.points[0].color,
    value: Number(sliceData.slice.points[0].data.y),
  };

  maxAudience.color = "#7969ef";

  return (
    <ToolTipWrapper>
      <Date>
        {moment(sliceData.slice.points[0].data.x).format(
          "dddd DD-MM-YYYY HH:mm (Z)"
        )}
      </Date>
      <Stats>
        <DataLine
          label={"Audience"}
          color={audienceData.color}
          value={audienceData.value}
          unit={"users"}
        />
      </Stats>
    </ToolTipWrapper>
  );
};

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
  margin-top: 10px;
`;
