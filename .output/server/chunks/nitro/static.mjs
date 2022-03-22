import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/_nuxt/adminApi-f4e37e77.mjs": {
    "type": "application/javascript",
    "etag": "\"39f8-uWPbdGFhRycny6cE8YZEA1mN/bc\"",
    "mtime": "2022-03-22T02:59:03.778Z",
    "path": "../public/_nuxt/adminApi-f4e37e77.mjs"
  },
  "/_nuxt/bootstrap-824761c9.mjs": {
    "type": "application/javascript",
    "etag": "\"32c572-Vwiadl1sqkMLXhcwctnQQN9a+T0\"",
    "mtime": "2022-03-22T02:59:03.778Z",
    "path": "../public/_nuxt/bootstrap-824761c9.mjs"
  },
  "/_nuxt/bootstrap.83e2cc1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8e3e8-PFmOkW3SPdK/jNA2z5cRNoq0fb0\"",
    "mtime": "2022-03-22T02:59:03.775Z",
    "path": "../public/_nuxt/bootstrap.83e2cc1b.css"
  },
  "/_nuxt/default-ed649133.mjs": {
    "type": "application/javascript",
    "etag": "\"5e7-qwbrnMKBDY3O4Xs2rcOktfz9gdI\"",
    "mtime": "2022-03-22T02:59:03.774Z",
    "path": "../public/_nuxt/default-ed649133.mjs"
  },
  "/_nuxt/default.46e70ea8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"106-dc+6jRvqEb9cxTLBVslY43Olyj8\"",
    "mtime": "2022-03-22T02:59:03.774Z",
    "path": "../public/_nuxt/default.46e70ea8.css"
  },
  "/_nuxt/entry-2c4fe560.mjs": {
    "type": "application/javascript",
    "etag": "\"65-T4EOXs2L2UyjBl7CHF2nrSYJEV8\"",
    "mtime": "2022-03-22T02:59:03.773Z",
    "path": "../public/_nuxt/entry-2c4fe560.mjs"
  },
  "/_nuxt/index-97993b0b.mjs": {
    "type": "application/javascript",
    "etag": "\"203-Zfsh5pY1jPVLPFMyj1Fkl/iLcMI\"",
    "mtime": "2022-03-22T02:59:03.773Z",
    "path": "../public/_nuxt/index-97993b0b.mjs"
  },
  "/_nuxt/index-f3d5a54b.mjs": {
    "type": "application/javascript",
    "etag": "\"6c2-Lfre3HpJaN0EIZUfv9eQRBiZ3J4\"",
    "mtime": "2022-03-22T02:59:03.773Z",
    "path": "../public/_nuxt/index-f3d5a54b.mjs"
  },
  "/_nuxt/index.e0687032.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26-qMtNXutJMuN9NWiZsH71V5TACJE\"",
    "mtime": "2022-03-22T02:59:03.773Z",
    "path": "../public/_nuxt/index.e0687032.css"
  },
  "/_nuxt/logo.03d6d6da.png": {
    "type": "image/png",
    "etag": "\"1ac1-GmrON3Ez8UorLNfEjxA2mmvFSy4\"",
    "mtime": "2022-03-22T02:59:03.773Z",
    "path": "../public/_nuxt/logo.03d6d6da.png"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"658-AE9bj+LCeZ0u+ghoMXjgViiQ3eY\"",
    "mtime": "2022-03-22T02:59:03.772Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/tailApi-a2aceeff.mjs": {
    "type": "application/javascript",
    "etag": "\"2b47-BsuyH+lZZTpKo/gefKQUBEPAq1k\"",
    "mtime": "2022-03-22T02:59:03.772Z",
    "path": "../public/_nuxt/tailApi-a2aceeff.mjs"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/Users/yangwenjie/programe/nuxt3-app/dist" + "/" + "1647917909";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
