import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const ChartCard = ({
  title,
  labels,
  series,     
  metric,      
  subtext,     
  period = 'This Week',
  periods = ['This Week', 'Last Week'],
  onPeriodChange = () => { },
}) => {
  const data = labels.map((label, i) => {
    const point = { name: label };
    series.forEach((s, idx) => { point[`s${idx}`] = s.data[i]; });
    return point;
  });

  const colors = ['#7987FF', '#E697FF', '#FFA5CB'];

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        fontFamily: 'Work Sans, sans-serif',
        width: '100%',
        border: '1px solid #D4D4D4',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#111827', textTransform: 'uppercase' }}>
          {title}
        </span>
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="link"
            size="sm"
            style={{
              color: '#374151',
              fontSize: 12,
              padding: 0,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {period}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {periods.map(p => (
              <Dropdown.Item key={p} active={p === period} onClick={() => onPeriodChange(p)}>
                {p}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Metric + Subtext */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
        <span style={{ fontSize: 32, fontWeight: 700, color: '#165BAA' }}>
          {metric}
        </span>
        <span style={{ fontSize: 14, color: '#6B7280' }}>
          {subtext}
        </span>
      </div>

      <div style={{ width: '100%', height: 235, borderRadius: 8, overflow: 'hidden' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis
              domain={[60, -60]}
              // exact ticks
              ticks={[60, 20, -20, -60]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Tooltip contentStyle={{ borderRadius: 8 }} itemStyle={{ fontSize: 12 }} />
            <Legend
              verticalAlign="bottom"
              align="left"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ marginTop: 8, paddingLeft: 0 }}
              formatter={value => <span style={{ color: '#111827', fontSize: 12 }}>{value}</span>}
            />

            {series.map((s, idx) => (
              <Line
                key={`s${idx}`}
                type="natural"
                dataKey={`s${idx}`}
                name={s.name}
                stroke={colors[idx]}
                strokeWidth={2}
                dot={{ r: 3.5, fill: colors[idx], strokeWidth: 0 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;