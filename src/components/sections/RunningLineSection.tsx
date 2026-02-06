'use client';

interface RunningLineSectionProps {
  whiteLogoUrl?: string;
  greenLogoUrl?: string;
}

export function RunningLineSection({
  whiteLogoUrl = 'https://www.figma.com/api/mcp/asset/988bc586-d55d-451a-9c0c-143d0c064c95',
  greenLogoUrl = 'https://www.figma.com/api/mcp/asset/839c21b6-6366-4260-be65-b733eda30baa',
}: RunningLineSectionProps) {
  const text = 'РЕЗИДЕНТ IT PARK UZBEKISTAN';
  const repeatCount = 5;

  const renderContent = (logoUrl: string) => (
    <>
      {Array.from({ length: repeatCount }).map((_, i) => (
        <span key={i}>
          <span className="running-line-text">{text}</span>
          <img src={logoUrl} alt="" className="running-line-logo" />
        </span>
      ))}
    </>
  );

  return (
    <section className="running-line-section">
      {/* White line (top, rotated +3°, moves left) */}
      <div className="running-line running-line-white">
        <div className="running-line-track running-line-track-left">
          <div className="running-line-content">
            {renderContent(whiteLogoUrl)}
          </div>
          <div className="running-line-content" aria-hidden="true">
            {renderContent(whiteLogoUrl)}
          </div>
        </div>
      </div>

      {/* Green line (bottom, rotated -3°, moves right) */}
      <div className="running-line running-line-green">
        <div className="running-line-track running-line-track-right">
          <div className="running-line-content">
            {renderContent(greenLogoUrl)}
          </div>
          <div className="running-line-content" aria-hidden="true">
            {renderContent(greenLogoUrl)}
          </div>
        </div>
      </div>
    </section>
  );
}
