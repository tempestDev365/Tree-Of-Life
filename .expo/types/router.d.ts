/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}/About.Module` | `/About.Module`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}/Home.Module` | `/Home.Module`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(home)'}/About.Module` | `/About.Module`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(home)'}/Home.Module` | `/Home.Module`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(home)'}/about` | `/about`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(home)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(home)'}/About.Module${`?${string}` | `#${string}` | ''}` | `/About.Module${`?${string}` | `#${string}` | ''}` | `${'/(home)'}/Home.Module${`?${string}` | `#${string}` | ''}` | `/Home.Module${`?${string}` | `#${string}` | ''}` | `${'/(home)'}/about${`?${string}` | `#${string}` | ''}` | `/about${`?${string}` | `#${string}` | ''}` | `${'/(home)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}/About.Module` | `/About.Module`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}/Home.Module` | `/Home.Module`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}` | `/`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
