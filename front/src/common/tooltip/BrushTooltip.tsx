import React from "react";

interface BrushTooltipProps {
    xScale: number;
    margin: any;
    width: number;
    height: number;
    initialMinEdge: number;
    initialMaxEdge: number;
}

export const BrushTooltip: React.FC<BrushTooltipProps> = ({
    xScale,
    margin,
    width,
    height,
    initialMinEdge,
    initialMaxEdge,
}) => {
    return null;
//   return ( 
//     <g onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>
//       <rect
//         x={-1 * margin.left}
//         y={0}
//         width={width + margin.left + margin.right}
//         height={height}
//         style={{
//           opacity: 0.2,
//           fill: 'transparent'
//         }}
//         onMouseDown={onMouseDown('new')}
//       />
//       <rect
//         x={minEdge - 2 * PADDING}
//         y={0}
//         width={2 * PADDING}
//         height={height}
//         style={{
//           opacity: 0,
//           cursor: 'ew-resize'
//         }}
//         onMouseDown={onMouseDown('minEdge')}
//       />
//       <rect
//         x={maxEdge}
//         y={0}
//         width={2 * PADDING}
//         height={height}
//         style={{
//           opacity: 0,
//           cursor: 'ew-resize'
//         }}
//         onMouseDown={onMouseDown('maxEdge')}
//       />
//       <rect
//         x={minEdge}
//         y={0}
//         width={maxEdge - minEdge}
//         height={height}
//         style={{
//           opacity: 0.3,
//           fill: 'black',
//           cursor: 'col-resize'
//         }}
//         onMouseDown={onMouseDown('both')}
//       />
//     </g>
//   );
};

const onMouseMove = () => {
};

const onMouseUp = () => {
};

const onMouseLeave = () => {
};
