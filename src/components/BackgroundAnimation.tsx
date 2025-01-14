import { useEffect } from 'react';
import { useRef } from 'react';
import { useWindowSize } from '../hooks/use-window-size';

type Size = Readonly<{ width: number; height: number }>;

///Point where the x and y are ratios.
interface RelativePoint {
  x: number;
  y: number;
  readonly _tag: 'RelativePoint';
}

const RelativePoint = (x: number, y: number): RelativePoint => ({
  x,
  y,
  _tag: 'RelativePoint',
});

interface Line {
  origin: RelativePoint;
  destination: RelativePoint;
  color: Color;
}

type Drawable = RelativePoint | Line;

function isRelativePoint(drawable: Drawable): drawable is RelativePoint {
  return (drawable as RelativePoint)._tag === 'RelativePoint';
}

type Color = string;

const red: Color = 'rgba(255,0,0,1)';
const yellow: Color = 'hsla(49,90%,50%,1)';
const blue: Color = 'rgba(0,0,255,1)';

const colors: Array<Color> = [red, yellow, blue];

const getRandomColor = () => colors[Math.floor(Math.random() * 3)];

interface CanvasPoint {
  x: number;
  y: number;
  readonly _tag: 'CanvasPoint';
}

const toCanvasPoint = (relative: RelativePoint, size: Size): CanvasPoint => ({
  x: relative.x * size.width,
  y: relative.y * size.height,
  _tag: 'CanvasPoint',
});

export const drawDot = (
  context: CanvasRenderingContext2D,
  relative: RelativePoint,
) => {
  const point = toCanvasPoint(relative, context.canvas);
  context.beginPath();
  context.arc(point.x, point.y, 3, 0, 2 * Math.PI);
  context.fill();
};

export const drawLine = (context: CanvasRenderingContext2D, l: Line) => {
  const origin = toCanvasPoint(l.origin, context.canvas);
  const destination = toCanvasPoint(l.destination, context.canvas);

  context.beginPath();
  context.strokeStyle = l.color;
  context.lineWidth = 3;
  context.moveTo(origin.x, origin.y);
  context.lineTo(destination.x, destination.y);
  context.stroke();
};

const draw = (
  context: CanvasRenderingContext2D,
  drawable: RelativePoint | Line,
): void => {
  if (isRelativePoint(drawable)) {
    drawDot(context, drawable);
    return;
  }

  drawLine(context, drawable as Line);
};

export const getRandomPoints = (count: number): Array<RelativePoint> =>
  Array(count)
    .fill(0)
    .map(() => RelativePoint(Math.random(), Math.random()));

export const getConnections = (points: Array<RelativePoint>): Array<Line> => {
  const lines = new Set<Set<RelativePoint>>();
  for (const origin of points) {
    for (const destination of points) {
      lines.add(new Set([origin, destination]));
    }
  }
  return [...lines]
    .filter(s => s.size === 2)
    .map(s => [...s])
    .map(pair => ({
      origin: pair[0] as RelativePoint,
      destination: pair[1],
      color: getRandomColor(),
    }))
    .sort(() => Math.random() - 0.5);
};

interface DrawState {
  drawables: Array<Drawable>;
  index: number;
}

const getDrawables = (pointCount: number): Array<Drawable> => {
  const points = getRandomPoints(pointCount);
  return [...points, ...getConnections(points)];
};

export const Sol = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();

  const drawState = useRef<DrawState>({
    drawables: getDrawables(50),
    index: 0,
  });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d')!;
    context.reset();
    for (let i = 0; i < drawState.current.index; i++) {
      draw(context, drawState.current.drawables[i]);
    }

    let requestID = 0;
    let cancelled = false;
    const render = () => {
      if (cancelled) {
        return;
      }

      if (drawState.current.index >= drawState.current.drawables.length) {
        return;
      }
      draw(context, drawState.current.drawables[drawState.current.index++]);

      setTimeout(
        () => (requestID = requestAnimationFrame(render)),
        Math.random() * 2000,
      );
    };

    render();
    return () => {
      cancelAnimationFrame(requestID);
      cancelled = true;
    };
  }, [width, height]);

  return (
    <div
      className='fixed top-0 bottom-0 left-0 right-0 pointer-events-none z-50 motion-reduce:hidden'
      style={{ zIndex: -1 }}
    >
      <canvas ref={canvasRef} className='opacity-20' width='400' height='400' />
    </div>
  );
};
