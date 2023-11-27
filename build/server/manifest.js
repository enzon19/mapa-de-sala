const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c31110c4.js","app":"_app/immutable/entry/app.e359192d.js","imports":["_app/immutable/entry/start.c31110c4.js","_app/immutable/chunks/index.b87f7290.js","_app/immutable/chunks/singletons.1ca8bc12.js","_app/immutable/chunks/index.7e639390.js","_app/immutable/entry/app.e359192d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.b87f7290.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-efe768a9.js')),
			__memo(() => import('./chunks/1-97f34c28.js')),
			__memo(() => import('./chunks/2-69717543.js')),
			__memo(() => import('./chunks/3-2a3f998d.js')),
			__memo(() => import('./chunks/4-0de10180.js')),
			__memo(() => import('./chunks/5-febd7fcd.js')),
			__memo(() => import('./chunks/6-b669a817.js')),
			__memo(() => import('./chunks/7-7a6dd990.js')),
			__memo(() => import('./chunks/8-142bf5fe.js')),
			__memo(() => import('./chunks/9-5d73a7d0.js'))
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
			},
			{
				id: "/tags",
				pattern: /^\/tags\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: day } = await import ('./chunks/day-81b2938d.js');
			const { match: month } = await import ('./chunks/month-64ce9462.js');
			return { day, month };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
