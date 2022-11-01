---
title: 使用指南
order: 0
---

## Hello common-hooks!

<div align="center">
<h1>common-hooks</h1>
   <a href="https://www.npmjs.com/package/common-hooks">
      <img src="https://img.shields.io/npm/v/common-hooks.svg" alt="npm package" />
   </a>
   <a href="https://www.npmjs.com/package/common-hooks">
      <img src="https://img.shields.io/npm/dm/common-hooks.svg" alt="npm downloads" />
   </a>
   <a href="https://www.npmjs.com/package/common-hooks">
      <img src="https://img.shields.io/npm/l/common-hooks.svg" alt="npm downloads" />
   </a>
   <a href="https://github.com/hzm0321/common-hooks">
      <img src="https://img.shields.io/github/stars/hzm0321/common-hooks?style=social" alt="npm downloads" />
   </a>
</div>

## 介绍

`common-hooks`收录平时开发中封装的 hooks

## 安装依赖

```shell
$ yarn add common-hooks
# or
$ npm install common-hooks
```

## 简单使用

```ts
import React from 'react';
import { useDocCopy } from 'common-hooks';

export default () => {
  useDocCopy('content', message); // content是需要拷贝的内容message使用antd的message
};
```

## 支持 TypeScript

`common-hooks`库导出了类型声明文件，可在 TS 项目中直接使用。

## 按需加载

`common-hooks` 默认支持基于 ES module 的 tree shaking。直接写成 `import { useDocCopy } from 'common-hooks'` 就有按需加载效果。

## 文档阅读说明

项目的文档库基于 [dumi](https://d.umijs.org/zh-CN) 搭建。可根据 hooks 类型分组，阅读此文档。每个分组都有一篇`简介`说明该分组下说包含的 hooks 概要，可据此查找对应 hook。如有疑问，请联系作者。微信：**joshinrai**
