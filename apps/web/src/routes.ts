import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("components/layouts/main.tsx", [
    index("routes/onboard.tsx"),
    route("login", "./routes/login.tsx"),
    route("register", "./routes/register.tsx"),
    route("product", "./routes/product.tsx"),
    route("product/:slug", "./routes/productDetails.tsx"),
  ]),
  ...prefix("admin", [
    layout("components/layouts/dashboard.tsx", [
      index("./routes/admin/dashboard.tsx"),
      route("product", "./routes/admin/product/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
