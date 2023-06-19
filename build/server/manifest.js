const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.4474ec8a.js","app":"_app/immutable/entry/app.ea9ecc91.js","imports":["_app/immutable/entry/start.4474ec8a.js","_app/immutable/chunks/index.c02989e7.js","_app/immutable/chunks/singletons.024c9020.js","_app/immutable/entry/app.ea9ecc91.js","_app/immutable/chunks/index.c02989e7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-a29d9c08.js'),
			() => import('./chunks/1-1719bf81.js'),
			() => import('./chunks/2-f82ab2fa.js'),
			() => import('./chunks/3-91747fae.js'),
			() => import('./chunks/4-671c69fd.js'),
			() => import('./chunks/5-aea31a77.js'),
			() => import('./chunks/6-655017a8.js'),
			() => import('./chunks/7-50067736.js'),
			() => import('./chunks/8-6bf40350.js')
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
