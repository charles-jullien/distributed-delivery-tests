import React from "react";
import { ResponsiveLine, Serie } from "@nivo/line";
import { useLineGenerator } from "../../../common/hooks";
import { AudienceTooltip } from "../../../common/tooltip";

interface AudienceChartProps {
  data: Serie[];
  maxAudience: Serie;
}

export const AudienceChart: React.FC<AudienceChartProps> = ({
  data,
  maxAudience,
}) => {
  const [MaxAudienceLine] = useLineGenerator(maxAudience, "maxAudience", "#7969ef");
  return data.length ? (
    <ResponsiveLine
      data={data}
      layers={[
        "axes",
        "areas",
        "crosshair",
        "lines",
        "slices",
        "mesh",
        "legends",
        MaxAudienceLine,
      ]}
      margin={{ top: 20, right: 20, bottom: 50, left: 100 }}
      enableGridX={false}
      enableGridY={false}
      xScale={{
        type: "time",
        format: "%Y-%m-%d-%H",
        useUTC: false,
        precision: "hour",
      }}
      xFormat="time:%Y-%m-%d-%H"
      yScale={{
        type: "linear",
      }}
      axisLeft={{
        legendOffset: 0,
        tickValues: 4,
      }}
      axisBottom={{
        format: "%b %d",
        tickValues: "every 1 days",
        legendOffset: -12,
      }}
      colors={{ scheme: 'nivo' }}
      curve={"cardinal"}
      enablePoints={false}
      lineWidth={2}
      useMesh={true}
      enableSlices={"x"}
      /*sliceTooltip={(sliceData) => (
        <AudienceTooltip
          maxAudience={maxAudience}
          sliceData={sliceData}
        />
      )}*/
      legends={[]}
    />
  ) : null;
};
