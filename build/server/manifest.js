const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ae60c84c.js","imports":["_app/immutable/entry/start.ae60c84c.js","_app/immutable/chunks/index.23c5746a.js","_app/immutable/chunks/singletons.d719f8a0.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ccf2a701.js","imports":["_app/immutable/entry/app.ccf2a701.js","_app/immutable/chunks/index.23c5746a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-71286856.js'),
			() => import('./chunks/1-29592611.js'),
			() => import('./chunks/2-9d3a845a.js'),
			() => import('./chunks/3-25d42972.js'),
			() => import('./chunks/4-795c081f.js'),
			() => import('./chunks/5-2a753f9a.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dia/[day=day]-[month=month]",
				pattern: /^\/dia\/([^/]+?)-([^/]+?)\/?$/,
				params: [{"name":"day","matcher":"day","optional":false,"rest":false,"chained":false},{"name":"month","matcher":"month","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/editar/[day=day]-[month=month]",
				pattern: /^\/editar\/([^/]+?)-([^/]+?)\/?$/,
				params: [{"name":"day","matcher":"day","optional":false,"rest":false,"chained":false},{"name":"month","matcher":"month","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: day } = await import ('./chunks/day-81b2938d.js');
			const { match: month } = await import ('./chunks/month-64ce9462.js');
			return { day, month };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
