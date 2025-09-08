import { lazy, Suspense, useEffect } from 'react';
import { totalStat } from '@assets/index';
import { loadSvgComponent } from '@/utils/svgUtils';
import { initSvgColorAdjustments } from '@/utils/colorUtils';

// Lazy load both github.svg and grid.svg
const GithubSvg = lazy(() => loadSvgComponent(totalStat, './github.svg'));

const GridSvg = lazy(() => loadSvgComponent(totalStat, './grid.svg'));

const SVGStat = () => {
  useEffect(() => {
    // Initialize SVG color adjustments when component mounts
    const timer = setTimeout(() => {
      initSvgColorAdjustments();
    }, 100); // Small delay to ensure SVG is rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="svgStat" className="space-y-8">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Activity Calendar</h2>
          <div className="flex justify-center">
            <GithubSvg className="github-svg max-w-4xl w-full h-auto" />
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Activity Grid</h2>
          <div className="flex justify-center">
            <GridSvg className="grid-svg max-w-3xl w-full h-auto" />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default SVGStat;
