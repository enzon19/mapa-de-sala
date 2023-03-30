const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8a2faa32.js","imports":["_app/immutable/entry/start.8a2faa32.js","_app/immutable/chunks/index.23c5746a.js","_app/immutable/chunks/singletons.aef4b30a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ff2f212b.js","imports":["_app/immutable/entry/app.ff2f212b.js","_app/immutable/chunks/index.23c5746a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-68f71d23.js'),
			() => import('./chunks/1-49ae97b0.js'),
			() => import('./chunks/2-6f91cd23.js'),
			() => import('./chunks/3-7195ec48.js'),
			() => import('./chunks/4-06cc15f2.js'),
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
