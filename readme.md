# учебная сборка

Собрано из видеоурока https://youtu.be/bozzyi8Tok0 
https://github.com/ai297/webpack-ts-eslint--empty-project
https://github.com/ai297/webpack-ts-eslint--empty-project/blob/main/HowToConfigureWebpack.md


Какие пакеты были установлены

```>
npm i --save-dev webpack webpack-cli
npm i -D typescript ts-loader
npm i --save-dev html-webpack-plugin
npm i -D copy-webpack-plugin
npm i -D clean-webpack-plugin
npm i -D webpack-dev-server

npm i -D css-loader sass sass-loader mini-css-extract-plugin

npm i -D eslint eslint-webpack-plugin
npm i -D eslint-plugin-import eslint-config-airbnb-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

```

Установка eslint https://youtu.be/bozzyi8Tok0?t=6108

Рекомендовано было поставить глобально

```>
npm install -g typescript
```

Проверка верка, что TS установлен глобально

```>
tsc -v
```

Создаем файл конфига для TS (если TS установлен глобально)

```>
tsc --init 
```

Создаем файл конфига для TS (если TS установлен локально, т.е. в проекте)

```>
npx tsc --init 
```

Плагин copy-webpack-plugin для копирования файлов из одной папки в другую

Плагин clean-webpack-plugin для очистки папки dist
