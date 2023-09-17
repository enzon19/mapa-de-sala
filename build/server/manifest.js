const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.cd9f5add.js","app":"_app/immutable/entry/app.a6b96e37.js","imports":["_app/immutable/entry/start.cd9f5add.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/singletons.968a7d31.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/entry/app.a6b96e37.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.b87f7290.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-61c3ac6d.js'),
			() => import('./chunks/1-003907ae.js'),
			() => import('./chunks/2-23afdb99.js'),
			() => import('./chunks/3-4cc03515.js'),
			() => import('./chunks/4-00389a9b.js'),
			() => import('./chunks/5-15e5c54d.js'),
			() => import('./chunks/6-f6f10f81.js'),
			() => import('./chunks/7-72a0a034.js'),
			() => import('./chunks/8-cd8c364c.js')
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
