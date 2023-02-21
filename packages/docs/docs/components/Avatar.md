---
PROPS:
  - name: color
    type: String
    values: lucid组件库内可定义的颜色 RGB 或 HEX
    description: Change the color of the component.
    default: gray-2
    link: null
    usage: '#color'

  - name: size
    type: Number
    values: Number
    description: 定义组件的尺寸
    default: 44
    link: null
    usage: '#size'

  - name: badge
    type: Boolean
    values: true, false
    description: 定义角标
    default: false
    link: null
    usage: '#badge'

  - name: badge-color
    type: String
    values: lucid组件库内可定义的颜色 ,RGB,HEX
    description: 定义角标颜色
    default: primary
    link: null
    usage: '#badge'

  - name: circle
    type: Boolean
    values: true, false
    description: 将组件变为圆形
    default: false
    link: null
    usage: '#circle'

  - name: square
    type: Boolean
    values: true, false
    description: 将组件变为方形
    default: false
    link: null
    usage: '#square'

  - name: writing
    type: Boolean
    values: true,false
    description: 将角标变为输入中状态(动画)
    default: false
    link: null
    usage: '#badge'

  - name: history
    type: Boolean
    values: true,false
    description: 将组件变为复古效果
    default: gray-2
    link: null
    usage: '#history'

  - name: history-gradient
    type: Boolean
    values: true,false
    description: 为复古效果的组件增加颜色过渡
    default: false
    link: null
    usage: '#history'

  - name: loading
    type: Boolean
    values: true,false
    description: 定义加载中状态(动画)
    default: false
    link: null
    usage: '#loading'

  - name: max
    type: number
    values: number
    description: 定义头像组组件的(vs-avatar-group)最大展示数
    default: null
    link: null
    usage: '#group'
   
  - name: float
    type: Boolean
    values: true,false
    description: 设置头像组组件(vs-avatar-group)里的每个头像 单独放置 消除头像之间的层叠效果
    default: false
    link: null
    usage: '#group'
    
  - name: pointer
    type: Boolean
    values: true,false
    description: 定义是否是光标指针
    default: false
    link: null
    usage: null

SLOTS:
  - name: text
    type: '#slot'
    values: null
    description: 定义组件内的文本
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-avatar>
              <template #text>
                Lily
              </template>
            </vs-avatar>

  - name: badge
    type: '#slot'
    values: null
    description: 定义角标的内容(通常为图标)
    default: null
    link: null
    usage: '#badge'

  - name: icons
    type: '#slot'
    values: null
    description: 定义组件内的图标
    default: null
    link: null
    usage: '#icons'

NEWS:
  - 圆形
  - 方形
  - 复古
  - 功能图标组
  - 分组
  - 加载
---

# 头像

<card>

## 默认

使用 `<vs-avatar>` 生成一个头像组件

<template v-slot:example>
  <avatar-default />
</template>

<template v-slot:template>

  ```html{3,4,5,6,7}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <template #text>
            莉莉
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Evan You
          </template>
        </vs-avatar>
        <vs-avatar>
            <i class='bx bx-user'></i>
        </vs-avatar>
        <vs-avatar primary>
            <i class='bx bxs-hot' ></i>
        </vs-avatar>
        <vs-avatar>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 色彩

通过 `color` (**RGB** 或 **HEX**) 属性改变组件的颜色，组件本身也内置了5种颜色

<template v-slot:example>
  <avatar-color />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar primary>
          <template #text>
            Primary
          </template>
        </vs-avatar>
        <vs-avatar success>
          <template #text>
            Success
          </template>
        </vs-avatar>
        <vs-avatar danger>
          <template #text>
            Danger
          </template>
        </vs-avatar>
        <vs-avatar warn>
          <template #text>
            Warn
          </template>
        </vs-avatar>
        <vs-avatar dark>
          <template #text>
            Dark
          </template>
        </vs-avatar>
        <vs-avatar color="#7d33ff">
          <template #text>
            HEX
          </template>
        </vs-avatar>
        <vs-avatar color="rgb(59,222,200)">
          <template #text>
            RGB
          </template>
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 尺寸

通过 `size` 改变组件的尺寸 输入的值(比如 `60` )在高度和宽度上等于 `60px`

<template v-slot:example>
  <avatar-size/>
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar size="30">
          <template #text>
            孙
          </template>
        </vs-avatar>
        <vs-avatar size="40">
          <template #text>
            Evan You
          </template>
        </vs-avatar>
        <vs-avatar>
            <i class='bx bx-user'></i>
        </vs-avatar>
        <vs-avatar size="60" primary badge badge-color="danger">
            <i class='bx bxs-hot' ></i>
        </vs-avatar>
        <vs-avatar size="70" badge badge-color="success">
          <img src="/avatars/avatar-4.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 角标

使用 `badge` 插槽可以为组件添加角标

您也可以使用 `badge-color` 属性改变角标颜色来表示不同的用户的状态 如 连接中(`success`) 或 连接失败(`danger`)

如果在聊天环境中 您还可以使用 `writing` 属性 来增加等待中动效

<template v-slot:example>
  <avatar-badge />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar badge>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar badge badge-color="danger">
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
        <vs-avatar badge badge-color="success">
          <img src="/avatars/avatar-2.png" alt="">
          <template #badge>
            28
          </template>
        </vs-avatar>
        <vs-avatar badge badge-color="warn">
          <img src="/avatars/avatar-8.png" alt="">
          <template #badge>
            <i class='bx bxs-bell-off' ></i>
          </template>
        </vs-avatar>
        <vs-avatar badge badge-color="danger">
          <img src="/avatars/avatar-9.png" alt="">
          <template #badge>
            离线
          </template>
        </vs-avatar>
        <vs-avatar writing badge badge-color="primary">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar badge-position="top-right" badge badge-color="#7d33ff">
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 自动适配字体(仅限英文)

如果用户有短名称 则按原样添加 但如果是很长的文本或有多个空格 则将自动生成要显示的文本 以便正确查看

:::tip
字符的最大长度为 **5** 当超过该限制时 将对文本进行变更
:::

<template v-slot:example>
  <avatar-autoFont />
</template>

<template v-slot:template>

  ```html{4,5,6}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <template #text>
            L
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Joel
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Fanny
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Sally Willis
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Dakota Roche Brown
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Garret Reynolds Enarson Hoffman
          </template>
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 圆形 <Badge text="New"/>

使用 `circle` 属性 使头像变为圆形

<template v-slot:example>
  <avatar-circle />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar circle>
          <template #text>
            李林
          </template>
        </vs-avatar>
        <vs-avatar circle danger>
          <template #text>
            王悦
          </template>
        </vs-avatar>
        <vs-avatar circle>
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
        <vs-avatar circle badge>
          <img src="/avatars/avatar-2.png" alt="">
        </vs-avatar>
        <vs-avatar circle badge writing badge-color="success">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar badge circle badge-color="warn" badge-position="top-right">
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar history history-gradient circle>
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 方形 <Badge text="New"/>


使用 `square` 属性 使头像变为方形

<template v-slot:example>
  <avatar-square />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar square>
          <template #text>
            李林
          </template>
        </vs-avatar>
        <vs-avatar square danger>
          <template #text>
            王悦
          </template>
        </vs-avatar>
        <vs-avatar square>
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
        <vs-avatar square badge>
          <img src="/avatars/avatar-2.png" alt="">
        </vs-avatar>
        <vs-avatar square badge writing badge-color="success">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar badge square badge-color="warn" badge-position="top-right">
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar history history-gradient square>
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 复古 <Badge text="New"/>

使用 `History` 属性 为头像增加边框 变为复古效果

:::tip
使用 `history-gradient` 属性为边框增加渐变颜色
:::

<template v-slot:example>
  <avatar-history />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar history>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>

        <vs-avatar history primary>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>

        <vs-avatar history success>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>

        <vs-avatar history history-gradient>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 图标

使用默认的 插槽 可以为组件内部添加一个图标

<template v-slot:example>
  <avatar-icon />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <i class='bx bx-user'></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bxs-camera' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-world' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-support' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-trophy' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-map' ></i>
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 加载 <Badge text="New"/>

使用 `loading` 属性 可以为组件增加加载中效果, 此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <avatar-loading />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar loading badge>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar loading badge badge-color="danger">
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
        <vs-avatar loading badge badge-color="success">
          <img src="/avatars/avatar-2.png" alt="">
          <template #badge>
            28
          </template>
        </vs-avatar>
        <vs-avatar loading badge badge-color="warn">
          <img src="/avatars/avatar-8.png" alt="">
          <template #badge>
            <i class='bx bxs-bell-off' ></i>
          </template>
        </vs-avatar>
        <vs-avatar loading writing badge badge-color="primary">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar loading badge-position="top-right" badge badge-color="#7d33ff">
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
    </template>
  ```

</template>

</card>

<card>

## 功能图标组 <Badge text="New"/>

通过 `icons` 插槽可以为头像旁边添加一排特定图标

<template v-slot:example>
  <avatar-icons />
</template>

<template v-slot:template>

  ```html{5,6,7,8,9}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <img src="/avatars/avatar-1.png" alt="">
          <template #icons>
            <i class='bx bxl-facebook-square' ></i>
            <i class='bx bxl-github' ></i>
            <i class='bx bxl-twitter' ></i>
          </template>
        </vs-avatar>
        <vs-avatar badge badge-color="danger" badge-position="bottom-left">
          <img src="/avatars/avatar-8.png" alt="">
          <template #icons>
            <i class='bx bxl-twitch' ></i>
            <i class='bx bxl-discord' ></i>
          </template>
        </vs-avatar>
        <vs-avatar loading badge badge-color="success" badge-position="top-left">
          <img src="/avatars/avatar-2.png" alt="">
          <template #icons>
            <i class='bx bxl-patreon' ></i>
            <i class='bx bxl-linkedin-square' ></i>
            <i class='bx bx-link' ></i>
          </template>
        </vs-avatar>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 分组 <Badge text="New"/>

通过 `<vs-avatar-group>` 组件可以为头像进行分组 该组件有以下属性

- **max**: 确定要显示头像的最大数量, 其余的隐藏, 会在最后的头像中显示隐藏的数量

- **float**: 每个头像单独放置 消除头像之间的层叠效果

<template v-slot:example>
  <avatar-group />
</template>

<template v-slot:template>

  ```html{3,34}
    <template>
      <div class="center con-avatars">
        <vs-avatar-group max="7">
          <vs-avatar>
            <img src="/avatars/avatar-1.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-6.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-2.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-7.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-3.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-8.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-4.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-9.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-10.png" alt="">
          </vs-avatar>
        </vs-avatar-group>

        <vs-avatar-group float max="8">
          <vs-avatar>
            <img src="/avatars/avatar-1.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-6.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-2.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-7.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-3.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-8.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-4.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-9.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-10.png" alt="">
          </vs-avatar>
        </vs-avatar-group>
      </div>
    </template>
  ```

</template>

</card>

<card>

## API

</card>
