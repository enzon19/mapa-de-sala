import db from "./db.json";

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function applyFilters(data, filters) {
  return filters.reduce((res, f) => res.filter(f), data);
}

function applyOrder(data, field, ascending = true) {
  return [...data].sort((a, b) => {
    if (a[field] < b[field]) return ascending ? -1 : 1;
    if (a[field] > b[field]) return ascending ? 1 : -1;
    return 0;
  });
}

function applyRange(data, from, to) {
  return data.slice(from, to + 1);
}

function JsonbaseQuery(tableName) {
  const rawData = clone(db[tableName] || []);
  const filters = [];
  let rangeFrom = null;
  let rangeTo = null;
  let orderBy = null;
  let orderAsc = true;

  function execute() {
    let data = rawData;
    data = applyFilters(data, filters);
    if (orderBy) data = applyOrder(data, orderBy, orderAsc);
    if (rangeFrom !== null && rangeTo !== null) {
      data = applyRange(data, rangeFrom, rangeTo);
    }
    return Promise.resolve({ data, error: null });
  }

  const query = {
    eq(field, value) {
      filters.push((row) => row[field] === value);
      return proxy;
    },
    neq(field, value) {
      filters.push((row) => row[field] !== value);
      return proxy;
    },
    lt(field, value) {
      filters.push((row) => {
        const rowVal = row[field];
        if (typeof rowVal === "string" && typeof value === "string") {
          const rowTime = Date.parse(rowVal);
          const valTime = Date.parse(value);
          if (!isNaN(rowTime) && !isNaN(valTime)) {
            return rowTime < valTime;
          }
        }
        return rowVal < value;
      });
      return proxy;
    },
    gt(field, value) {
      filters.push((row) => {
        const rowVal = row[field];
        if (typeof rowVal === "string" && typeof value === "string") {
          const rowTime = Date.parse(rowVal);
          const valTime = Date.parse(value);
          if (!isNaN(rowTime) && !isNaN(valTime)) {
            return rowTime > valTime;
          }
        }
        return rowVal > value;
      });
      return proxy;
    },
    lte(field, value) {
      filters.push((row) => {
        const rowVal = row[field];
        if (typeof rowVal === "string" && typeof value === "string") {
          const rowTime = Date.parse(rowVal);
          const valTime = Date.parse(value);
          if (!isNaN(rowTime) && !isNaN(valTime)) {
            return rowTime <= valTime;
          }
        }
        return rowVal <= value;
      });
      return proxy;
    },
    gte(field, value) {
      filters.push((row) => {
        const rowVal = row[field];
        if (typeof rowVal === "string" && typeof value === "string") {
          const rowTime = Date.parse(rowVal);
          const valTime = Date.parse(value);
          if (!isNaN(rowTime) && !isNaN(valTime)) {
            return rowTime >= valTime;
          }
        }
        return rowVal >= value;
      });
      return proxy;
    },
    like(field, pattern) {
      filters.push((row) => String(row[field] || "").includes(pattern));
      return proxy;
    },
    not(operator, field, value) {
      const ops = {
        eq: (f, v) => (row) => row[f] !== v,
        gt: (f, v) => (row) => row[f] <= v,
        gte: (f, v) => (row) => row[f] < v,
        lt: (f, v) => (row) => row[f] >= v,
        lte: (f, v) => (row) => row[f] > v,
        like: (f, v) => (row) => !String(row[f] || "").includes(v),
      };
      if (ops[operator]) filters.push(ops[operator](field, value));
      return proxy;
    },
    or(conditions) {
      const conditionFns = conditions.split("||").map((cond) => {
        const [field, op, value] = cond.split(".");
        const val = isNaN(value) ? value : Number(value);
        const ops = {
          eq: (r) => r[field] === val,
          neq: (r) => r[field] !== val,
          gt: (r) => r[field] > val,
          gte: (r) => r[field] >= val,
          lt: (r) => r[field] < val,
          lte: (r) => r[field] <= val,
          like: (r) => String(r[field] || "").includes(val),
        };
        return ops[op];
      });

      filters.push((row) => conditionFns.some((fn) => fn(row)));
      return proxy;
    },
    order(field, { ascending = true } = {}) {
      orderBy = field;
      orderAsc = ascending;
      return proxy;
    },
    limit(count) {
      rangeFrom = 0;
      rangeTo = count - 1;
      return proxy;
    },
    range(from, to) {
      rangeFrom = from;
      rangeTo = to;
      return proxy;
    },
    overlaps(field, valuesArray) {
      filters.push((row) => {
        const rowVal = row[field];
        if (Array.isArray(rowVal)) {
          return rowVal.some(
            (item) => valuesArray.some((v) => item == v) // comparação flexível (número vs string)
          );
        }
        return false;
      });
      return proxy;
    },
    select(columns = "*") {
      // apenas retorna proxy para continuar o chain
      return proxy;
    },
  };

  const queryHandler = {
    get(target, prop) {
      if (prop === "then") {
        return execute().then.bind(execute());
      }
      return Reflect.get(target, prop);
    },
  };

  const proxy = new Proxy(query, queryHandler);

  return proxy;
}

export const supabase = {
  from: JsonbaseQuery,
};
