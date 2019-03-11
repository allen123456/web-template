# css命名规范
参考element-ui组件中css命名，遵循BEM规范
BEM代表Block__Element--Modifier, 莫要出现 Block__Element__Element--Modifier。如果存在多层嵌套，可以考虑封装组件，以调整组件结构。

## 示例

基础示例
```
<div class="zv-card">
    <div class="zv-card__header">
      <button class="zv-card__button"></button>
      <button class="zv-card__button--red"></button>
    </div>
</div>
```

以组件划分块级元素
```
<form class="zv-form">
    <slot />
</form>
<div class="zv-form-item">
    <label class="zv-form-item__label">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="zv-form-item__content">
        <div class="zv-form-item__error">
          {{validateMessage}}
        </div>
    </div>
</div>
```

多层嵌套，子元素为布局元素
```
<div class="zv-table">
    <div class="zv-table__header-wrapper">
        <div class="zv-table__header">
             <div class="zv-table__header-text">
                 {{ title }}
             </div>
        </div>
    </div>
    <div class="zv-table__body-wrapper">
        <div class="zv-table__body">
             <div class="zv-table__body-text">
                 {{ title }}
             </div>
        </div>
        <div class="zv-table__empty-block">
             <span class="zv-table__empty-text">

             </span>
        </div>
        <div class="zv-table__append-wrapper">
             <slot name="append"></slot>
        </div>
    </div>
    <div class="zv-table__fixed">
        <div class="zl-table__fixed-header-wrapper">
             <div class="zv-table__fixed-header-text">
                 {{ title }}
             </div>
        </div>
        <div class="zl-table__fixed-body-wrapper">
             <div class="zv-table__fixed-body-text">
                 {{ title }}
             </div>
        </div>
    </div>
</div>
```