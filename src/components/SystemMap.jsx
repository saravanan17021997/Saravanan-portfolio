import { useState } from 'react';
import { systemNodes, systemEdges } from '../data/content';

// Geometry for each node box, in the SVG's own coordinate space.
const geo = {
  bc:        { x: 10,  y: 44,  w: 215, h: 50 },
  trackolap: { x: 10,  y: 228, w: 215, h: 50 },
  n8n:       { x: 330, y: 116, w: 190, h: 86 },
  supabase:  { x: 355, y: 244, w: 175, h: 50 },
  dashboard: { x: 660, y: 20,  w: 255, h: 50 },
  app:       { x: 660, y: 132, w: 255, h: 50 },
  whatsapp:  { x: 660, y: 244, w: 255, h: 50 },
};

// Explicit right-angle routing so wires stay readable.
const wirePath = {
  'bc-n8n': 'M225 69 H280 V159 H330',
  'trackolap-n8n': 'M225 253 H280 V159 H330',
  'n8n-supabase': 'M425 202 V224 H442 V244',
  'n8n-dashboard': 'M520 159 H595 V45 H660',
  'n8n-app': 'M520 159 H660',
  'n8n-whatsapp': 'M520 159 H595 V269 H660',
  'supabase-dashboard': 'M530 269 H625 V58 H660',
};

const boxClass = {
  source: 'box-source',
  hub: 'box-hub',
  store: 'box-store',
  output: 'box-output',
};

export default function SystemMap() {
  const [selected, setSelected] = useState(null);
  const node = selected ? systemNodes[selected] : null;

  const toggle = (id) => setSelected((cur) => (cur === id ? null : id));

  return (
    <div className="map">
      <div className="map-cap">
        <span>What I built and run</span>
        <span className="pulse">
          <span className="dot" />
          in production, six days a week
        </span>
      </div>

      <svg
        className="diagram"
        viewBox="0 0 925 316"
        role="img"
        aria-label="Architecture diagram. Business Central and TrackOlap feed an n8n automation layer running on a Linux VPS, which serves a sales dashboard, a customer mobile app and WhatsApp invoice delivery, with Supabase handling authentication and storage."
      >
        {systemEdges.map(([from, to]) => {
          const key = `${from}-${to}`;
          const lit = selected === from || selected === to;
          return (
            <path
              key={key}
              className={lit ? 'wire lit' : 'wire'}
              d={wirePath[key]}
            />
          );
        })}

        {Object.values(systemNodes).map((n) => {
          const g = geo[n.id];
          const isSel = selected === n.id;
          return (
            <g
              key={n.id}
              className={isSel ? 'node sel' : 'node'}
              onClick={() => toggle(n.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(n.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isSel}
              aria-label={`${n.label}. ${isSel ? 'Selected' : 'Select for detail'}`}
            >
              <rect
                className={boxClass[n.kind]}
                x={g.x}
                y={g.y}
                width={g.w}
                height={g.h}
                rx="2"
              />
              <text className="n-label" x={g.x + 16} y={g.y + 23}>
                {n.label}
              </text>
              {n.sub.split(' · ').length > 2 && n.id === 'n8n' ? (
                <>
                  <text className="n-sub" x={g.x + 16} y={g.y + 41}>
                    39 workflows
                  </text>
                  <text className="n-sub" x={g.x + 16} y={g.y + 56}>
                    Docker · Traefik · VPS
                  </text>
                </>
              ) : (
                <text className="n-sub" x={g.x + 16} y={g.y + 39}>
                  {n.sub}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {node ? (
        <div className="detail">
          <button
            className="detail-close"
            onClick={() => setSelected(null)}
            aria-label="Close detail"
          >
            close
          </button>
          <h3>{node.detail.title}</h3>
          <p>{node.detail.body}</p>
          <ul>
            {node.detail.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="hint">Select any box to see what it does and what I built there.</p>
      )}
    </div>
  );
}
