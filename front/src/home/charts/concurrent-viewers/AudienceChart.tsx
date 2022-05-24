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
      curve={"cardinal"}
      enablePoints={false}
      enableArea={false}
      areaOpacity={0.8}
      lineWidth={2}
      useMesh={true}
      enableSlices={"x"}
      sliceTooltip={(sliceData) => (
        <AudienceTooltip
          maxAudience={maxAudience}
          sliceData={sliceData}
        />
      )}
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          translateX: -160,
          translateY: 50,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  ) : null;
};
