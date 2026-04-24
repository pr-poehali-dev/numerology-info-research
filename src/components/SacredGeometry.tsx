const SacredGeometry = ({ size = 300, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 300 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle */}
    <circle cx="150" cy="150" r="140" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
    <circle cx="150" cy="150" r="115" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
    
    {/* Hexagram (Star of David / Merkaba) */}
    <polygon points="150,30 255,195 45,195" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" fill="none" />
    <polygon points="150,270 255,105 45,105" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" fill="none" />
    
    {/* Inner circles - Flower of Life */}
    <circle cx="150" cy="90" r="60" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" fill="none" />
    <circle cx="150" cy="210" r="60" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" fill="none" />
    <circle cx="98" cy="120" r="60" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" fill="none" />
    <circle cx="202" cy="120" r="60" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" fill="none" />
    <circle cx="98" cy="180" r="60" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" fill="none" />
    <circle cx="202" cy="180" r="60" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" fill="none" />
    <circle cx="150" cy="150" r="60" stroke="rgba(201,168,76,0.18)" strokeWidth="0.8" fill="none" />
    
    {/* Cross lines */}
    <line x1="10" y1="150" x2="290" y2="150" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
    <line x1="150" y1="10" x2="150" y2="290" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
    
    {/* Center dot */}
    <circle cx="150" cy="150" r="3" fill="rgba(201,168,76,0.5)" />
    <circle cx="150" cy="150" r="6" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" fill="none" />
    
    {/* Outer decorative diamonds */}
    <polygon points="150,12 157,25 150,38 143,25" fill="rgba(201,168,76,0.3)" />
    <polygon points="150,262 157,275 150,288 143,275" fill="rgba(201,168,76,0.3)" />
    <polygon points="12,150 25,157 38,150 25,143" fill="rgba(201,168,76,0.3)" />
    <polygon points="262,150 275,157 288,150 275,143" fill="rgba(201,168,76,0.3)" />
  </svg>
);

export default SacredGeometry;
