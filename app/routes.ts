import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("components/layout/index.tsx", [
    index("routes/_index/route.tsx"),
  ]),
] satisfies RouteConfig;