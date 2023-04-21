const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.098404b6.js","imports":["_app/immutable/entry/start.098404b6.js","_app/immutable/chunks/index.19c244fc.js","_app/immutable/chunks/singletons.be2167c6.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d55cbfa6.js","imports":["_app/immutable/entry/app.d55cbfa6.js","_app/immutable/chunks/index.19c244fc.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-13833245.js'),
			() => import('./chunks/1-53164dfa.js'),
			() => import('./chunks/2-de6e8fa1.js'),
			() => import('./chunks/3-092bf20e.js'),
			() => import('./chunks/4-eef7a99b.js'),
			() => import('./chunks/5-377ae45f.js'),
			() => import('./chunks/6-9ac130af.js')
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
				id: "/novidades",
				pattern: /^\/novidades\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
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
