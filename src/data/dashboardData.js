export const revenueData = [
  { month: 'Jan', revenue: 32000, users: 4200 },
  { month: 'Feb', revenue: 41000, users: 4800 },
  { month: 'Mar', revenue: 38000, users: 5100 },
  { month: 'Apr', revenue: 52000, users: 6300 },
  { month: 'May', revenue: 49000, users: 6900 },
  { month: 'Jun', revenue: 64000, users: 8100 },
  { month: 'Jul', revenue: 71000, users: 9200 },
  { month: 'Aug', revenue: 68000, users: 9800 },
  { month: 'Sep', revenue: 84000, users: 11200 },
  { month: 'Oct', revenue: 92000, users: 12400 },
  { month: 'Nov', revenue: 88000, users: 12900 },
  { month: 'Dec', revenue: 104000, users: 14100 },
]

export const trafficData = [
  { name: 'Organic', value: 42, color: '#6366f1' },
  { name: 'Direct', value: 28, color: '#a855f7' },
  { name: 'Referral', value: 18, color: '#ec4899' },
  { name: 'Social', value: 12, color: '#f59e0b' },
]

export const orders = [
  { id: '#NV-7841', customer: 'Sara Mammadova', email: 'sara@lumen.io', plan: 'Pro', amount: '$290', status: 'Paid', date: 'Jun 12' },
  { id: '#NV-7840', customer: 'David Chen', email: 'david@shiplane.co', plan: 'Enterprise', amount: '$990', status: 'Paid', date: 'Jun 11' },
  { id: '#NV-7839', customer: 'Aytac Rzayeva', email: 'aytac@brightpay.az', plan: 'Pro', amount: '$29', status: 'Pending', date: 'Jun 11' },
  { id: '#NV-7838', customer: 'Marcus Hill', email: 'marcus@nexora.com', plan: 'Pro', amount: '$290', status: 'Paid', date: 'Jun 10' },
  { id: '#NV-7837', customer: 'Leyla Quliyeva', email: 'leyla@orbit.io', plan: 'Starter', amount: '$0', status: 'Trial', date: 'Jun 10' },
  { id: '#NV-7836', customer: 'Tom Becker', email: 'tom@flowstate.app', plan: 'Enterprise', amount: '$990', status: 'Paid', date: 'Jun 09' },
  { id: '#NV-7835', customer: 'Nigar Aliyeva', email: 'nigar@peak.co', plan: 'Pro', amount: '$29', status: 'Failed', date: 'Jun 09' },
  { id: '#NV-7834', customer: 'James Wright', email: 'james@delta.io', plan: 'Pro', amount: '$290', status: 'Paid', date: 'Jun 08' },
]

// ---- Analytics ----
export const trafficTrend = [
  { day: 'Mon', sessions: 3200, pageviews: 8400 },
  { day: 'Tue', sessions: 4100, pageviews: 10200 },
  { day: 'Wed', sessions: 3800, pageviews: 9600 },
  { day: 'Thu', sessions: 5200, pageviews: 13100 },
  { day: 'Fri', sessions: 6100, pageviews: 15800 },
  { day: 'Sat', sessions: 4800, pageviews: 11900 },
  { day: 'Sun', sessions: 4300, pageviews: 10500 },
]

export const devices = [
  { name: 'Desktop', value: 58, color: '#6366f1' },
  { name: 'Mobile', value: 34, color: '#ec4899' },
  { name: 'Tablet', value: 8, color: '#f59e0b' },
]

export const topPages = [
  { path: '/', views: 28400, change: '+12%', up: true },
  { path: '/pricing', views: 19200, change: '+8%', up: true },
  { path: '/blog/analytics-101', views: 14100, change: '+24%', up: true },
  { path: '/features', views: 11800, change: '−3%', up: false },
  { path: '/dashboard', views: 9600, change: '+5%', up: true },
  { path: '/contact', views: 4200, change: '−1%', up: false },
]

export const funnel = [
  { stage: 'Visited', value: 100 },
  { stage: 'Signed up', value: 42 },
  { stage: 'Activated', value: 28 },
  { stage: 'Paid', value: 11 },
]

// ---- Revenue ----
export const mrrData = [
  { month: 'Jul', mrr: 38000 },
  { month: 'Aug', mrr: 41000 },
  { month: 'Sep', mrr: 46000 },
  { month: 'Oct', mrr: 52000 },
  { month: 'Nov', mrr: 58000 },
  { month: 'Dec', mrr: 67000 },
]

export const planRevenue = [
  { name: 'Pro', value: 58, color: '#6366f1' },
  { name: 'Enterprise', value: 34, color: '#a855f7' },
  { name: 'Starter', value: 8, color: '#f59e0b' },
]

export const transactions = [
  { id: 'TXN-9921', customer: 'Sara Mammadova', method: 'Visa •• 4242', amount: '$290', status: 'Succeeded', date: 'Jun 12, 14:22' },
  { id: 'TXN-9920', customer: 'David Chen', method: 'Mastercard •• 8801', amount: '$990', status: 'Succeeded', date: 'Jun 11, 09:10' },
  { id: 'TXN-9919', customer: 'Aytac Rzayeva', method: 'PayPal', amount: '$29', status: 'Pending', date: 'Jun 11, 18:45' },
  { id: 'TXN-9918', customer: 'Marcus Hill', method: 'Visa •• 1199', amount: '$290', status: 'Succeeded', date: 'Jun 10, 11:30' },
  { id: 'TXN-9917', customer: 'Nigar Aliyeva', method: 'Visa •• 3321', amount: '$29', status: 'Failed', date: 'Jun 09, 22:05' },
  { id: 'TXN-9916', customer: 'Tom Becker', method: 'Amex •• 0007', amount: '$990', status: 'Succeeded', date: 'Jun 09, 08:51' },
]

// ---- Customers ----
export const customers = [
  { name: 'Sara Mammadova', email: 'sara@lumen.io', company: 'Lumen', plan: 'Pro', spent: '$3,480', status: 'Active', initials: 'SM', color: 'from-brand-500 to-fuchsia-500' },
  { name: 'David Chen', email: 'david@shiplane.co', company: 'Shiplane', plan: 'Enterprise', spent: '$11,880', status: 'Active', initials: 'DC', color: 'from-sky-500 to-indigo-500' },
  { name: 'Aytac Rzayeva', email: 'aytac@brightpay.az', company: 'Brightpay', plan: 'Pro', spent: '$348', status: 'Trial', initials: 'AR', color: 'from-emerald-500 to-teal-500' },
  { name: 'Marcus Hill', email: 'marcus@nexora.com', company: 'Nexora', plan: 'Pro', spent: '$2,610', status: 'Active', initials: 'MH', color: 'from-amber-500 to-orange-500' },
  { name: 'Leyla Quliyeva', email: 'leyla@orbit.io', company: 'Orbit', plan: 'Starter', spent: '$0', status: 'Trial', initials: 'LQ', color: 'from-pink-500 to-rose-500' },
  { name: 'Tom Becker', email: 'tom@flowstate.app', company: 'Flowstate', plan: 'Enterprise', spent: '$9,900', status: 'Active', initials: 'TB', color: 'from-violet-500 to-purple-500' },
  { name: 'Nigar Aliyeva', email: 'nigar@peak.co', company: 'Peak', plan: 'Pro', spent: '$145', status: 'Churned', initials: 'NA', color: 'from-cyan-500 to-blue-500' },
  { name: 'James Wright', email: 'james@delta.io', company: 'Delta', plan: 'Pro', spent: '$1,740', status: 'Active', initials: 'JW', color: 'from-lime-500 to-green-500' },
]

// ---- Reports ----
export const reports = [
  { name: 'Monthly revenue report', desc: 'Full breakdown of revenue, refunds and net MRR.', type: 'Finance', updated: 'Jun 12, 2026', size: '2.4 MB' },
  { name: 'User growth & retention', desc: 'Cohort retention and signup trends for Q2.', type: 'Growth', updated: 'Jun 10, 2026', size: '1.1 MB' },
  { name: 'Traffic sources analysis', desc: 'Channel performance and conversion by source.', type: 'Marketing', updated: 'Jun 08, 2026', size: '3.0 MB' },
  { name: 'Churn & cancellation', desc: 'Reasons for churn and at-risk accounts.', type: 'Retention', updated: 'Jun 05, 2026', size: '880 KB' },
  { name: 'Product usage summary', desc: 'Feature adoption and active-user metrics.', type: 'Product', updated: 'Jun 02, 2026', size: '1.7 MB' },
  { name: 'Support performance', desc: 'Ticket volume, response and CSAT scores.', type: 'Support', updated: 'May 30, 2026', size: '640 KB' },
]
