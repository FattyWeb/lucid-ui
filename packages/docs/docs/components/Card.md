---
PROPS:
  - name: type
    type: String
    values: 1,2,3,4,5
    description: 定义组件的风格展示类型
    default: null
    link: null
    usage: '#type-2'

SLOTS:
  - name: text
    type: slot
    values: null
    description: 定义组件内的文字展示内容
    default: null
    link: null
    usage: '#default'

  - name: title
    type: slot
    values: null
    description: 定义组件标题
    default: null
    link: null
    usage: '#default'

  - name: buttons
    type: slot
    values: null
    description: 定义组件的按钮 位置由组件类型type决定
    default: null
    link: null
    usage: '#default'

  - name: interactions
    type: slot
    values: null
    description: 定义组件的交互性 由组件类型type决定
    default: null
    link: null
    usage: '#default'

  - name: img
    type: slot
    values: null
    description: 定义组件的插图
    default: null
    link: null
    usage: '#default'
    code: >
            <template #img>
              <img :src="`/foto5.png`" alt="">
            </template>

NEWS:
  - name
---

# 卡片

<card>

## 默认样式

通过 `<vs-card>` 组件 生成一个卡片 可以使用以下插槽

 - title 标题
 - text 文本内容
 - buttons 按钮
 - interactions 交互
 - img 图片

<template v-slot:example>
  <card-default/>
</template>

<template v-slot:template>

  ```html
    <vs-card>
      <template #title>
        <h3>时尚运动品牌</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          50年历程，Nike为体育、乃至世界带来了很多积极的改变，但仍远未到大功告成之时。
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</template>

</card>

<card>

## 样式 2

将 `type` 属性设置为 `2` 则切换为组件内置的样式2

<template v-slot:example>
  <card-type2 />
</template>

<template v-slot:template>

  ```html{3,4,5}
    <vs-card type="2">
      <template #title>
        <h3>时代周刊（Time）</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          创刊于1923年，是近一个世纪以来最先出现的新闻周刊之一，特为新的日益增长的国际读者群开设一个了解全球新闻的窗口。
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</template>

</card>

<card>

## 样式 3

将 `type` 属性设置为 `3` 则切换为组件内置的样式3

<template v-slot:example>
  <card-type3 />
</template>

<template v-slot:template>

  ```html
    <vs-card type="3">
      <template #title>
        <h3>金州勇士队</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          于1946年成立并加盟BAA(1949年加盟NBA)，是一支属于美国加利福尼亚州旧金山市的职业篮球队，是美国职业篮球联赛（NBA）西部联盟太平洋赛区的一部分。
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</template>

</card>

<card>

## 样式 4

将 `type` 属性设置为 `4` 则切换为组件内置的样式4

<template v-slot:example>
  <card-type4 />
</template>

<template v-slot:template>

  ```html
    <vs-card type="4">
      <template #title>
        <h3>水培龟背竹</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          为常绿藤本植物，茎粗壮。属天南星科龟背竹属,又名蓬莱燕,属草质藤本。茎木质化,叶片大,轮廓像心形,叶柄长。原产墨西哥,现各地均有栽培
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</template>

</card>

<card>

## 样式 5

将 `type` 属性设置为 `5` 则切换为组件内置的样式5

<template v-slot:example>
  <card-type5 />
</template>

<template v-slot:template>

  ```html
    <vs-card type="5">
      <template #title>
        <h3>塔克拉玛干沙漠</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          位于新疆南疆的塔里木盆地中心地带，是中国最大的沙漠，亦是世界第二大流动沙漠。
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</template>

</card>

<card>

## 卡片组

使用 `vs-card-group` 组件生成一个横向滚动的卡片组

<template v-slot:example>
  <card-group />
</template>

<template v-slot:template>

  ```html
    <vs-card-group>
      <vs-card v-for="card in 6" @click="handleClick">
        <template #title>
          <h3>卡片组标题</h3>
        </template>
        <template #img>
          <img :src="`/your-imgs`" alt="">
        </template>
        <template #text>
          <p>
            卡片组描述 卡片组描述 卡片组描述 卡片组描述
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  ```

</template>

</card>

<card>

## API

</card>
