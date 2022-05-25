import React from "react";
import { ResponsiveLine, Serie } from "@nivo/line";

interface BrushChartProps {
  data: Serie[];
  maxBrush: Serie;
}

export const BrushChart: React.FC<BrushChartProps> = ({
  data,
  maxBrush,
}) => {
  return data.length ? (
    <ResponsiveLine
      data={data}
      layers={[
        "axes",
        "areas",
        "crosshair",
        "mesh",
        "slices",
      ]}
      margin={{ top: 3, right: 30, bottom: 2, left: 30 }}
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
      colors={{ scheme: 'dark2' }}
      axisLeft={null}
      axisBottom={null}
      curve={"cardinal"}
      enablePoints={false}
      enableArea={true}
      areaOpacity={1}
      useMesh={true}
      enableSlices={"x"}
      legends={[]}
    />
  ) : null;
};
