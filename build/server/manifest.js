const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.bf2bea34.js","app":"_app/immutable/entry/app.e96b0f66.js","imports":["_app/immutable/entry/start.bf2bea34.js","_app/immutable/chunks/index.c02989e7.js","_app/immutable/chunks/singletons.b3cb6cd2.js","_app/immutable/entry/app.e96b0f66.js","_app/immutable/chunks/index.c02989e7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-276d3610.js'),
			() => import('./chunks/1-8a321dd2.js'),
			() => import('./chunks/2-5bf70c5a.js'),
			() => import('./chunks/3-a55cae33.js'),
			() => import('./chunks/4-5c0f70e8.js'),
			() => import('./chunks/5-b6fac7b8.js'),
			() => import('./chunks/6-ed96f0e5.js'),
			() => import('./chunks/7-e19fcc11.js'),
			() => import('./chunks/8-2724fac8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aluno/[id]",
				pattern: /^\/aluno\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dados",
				pattern: /^\/dados\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dia/[day=day]-[month=month]",
				pattern: /^\/dia\/([^/]+?)-([^/]+?)\/?$/,
				params: [{"name":"day","matcher":"day","optional":false,"rest":false,"chained":false},{"name":"month","matcher":"month","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/editar/[day=day]-[month=month]",
				pattern: /^\/editar\/([^/]+?)-([^/]+?)\/?$/,
				params: [{"name":"day","matcher":"day","optional":false,"rest":false,"chained":false},{"name":"month","matcher":"month","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/novidades",
				pattern: /^\/novidades\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
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
