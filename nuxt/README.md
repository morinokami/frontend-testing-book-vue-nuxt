# nuxt

TODO: Nuxt 周辺のエコシステムの未整備により、書籍のテストや Storybook を完全には再現できないと思われる。そうした現状の Nuxt における制約について記載する。

vite.config.ts により Nuxt の自動インポートのサブセットを Storybook において動くようにしているが、useFetch など Nuxt 固有の API については動作しない。
