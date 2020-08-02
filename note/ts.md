#ts如何为window定义全局属性
问题：在vue+ts中使用window。xxx添加属性时，会提示xxx不属于globalThis和windos属性；
##解决方式
1.(<ang>window).xxx可以解决
2.(window as any).MyNamespace
2.全局文件index。d.ts；
~~~





~~~