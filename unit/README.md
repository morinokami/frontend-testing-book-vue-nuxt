# unit

https://github.com/frontend-testing-book/unittest を Vue により書き換えた。また、Jest ではなく Vitest を使用している。

## Vitest + @testing-library/vue

[@testing-library/vue](https://github.com/testing-library/vue-testing-library) を使用できるようにするために、以下の設定をおこなった。

まず、[@testing-library/jest-dom](https://github.com/testing-library/jest-dom) の [Custom matchers](https://github.com/testing-library/jest-dom#custom-matchers) を使用できるようにするために、https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/ を参考に vitest.setup.ts を作成し、vitest.config.ts において `setupFiles` として読み込むようにした。

また、https://vitest.dev/guide/migration.html#migrating-from-jest の

> common libraries like testing-library will not run auto DOM cleanup

という記述にあるように、[`globals`](https://vitest.dev/config/#globals) を設定しないと DOM の自動クリーンアップがおこなわれない。`afterEach` などで明示的に [cleanup](https://testing-library.com/docs/vue-testing-library/api#cleanup) することも可能だが、すべてのテストファイルにおいて記述すると冗長であるため、`globals` を `true` に設定した。

最後に、pnpm をパッケージマネージャーとして使用している結果、マッチャーの型が認識されず `Property 'toBeInTheDocument' does not exist on type 'Assertion<HTMLElement>'.ts(2339)` などのエラーが発生するため、これを回避するために [@types/testing-library__jest-dom](https://www.npmjs.com/package/@types/testing-library__jest-dom) をインストールした。pnpm でのみこの現象が発生する理由については https://stackoverflow.com/a/75245402 を参照のこと。
