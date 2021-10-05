```sh
$ yarn install
$ yarn ts-node test.ts
```

```
TSError: ⨯ Unable to compile TypeScript:
test.ts:4:26 - error TS2345: Argument of type '(url: RequestInfo, init?: RequestInit | undefined) => Promise<Response>' is not assignable to parameter of type '(input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>'.
  Types of parameters 'url' and 'input' are incompatible.
    Type 'RequestInfo' is not assignable to type 'import("/Users/suzil/Documents/ownup/test/node_modules/node-fetch/@types/index").RequestInfo'.
      Type 'Request' is not assignable to type 'RequestInfo'.
        Type 'Request' is missing the following properties from type 'Request': size, buffer

4 const fetch = fetchRetry(originalFetch);
```
