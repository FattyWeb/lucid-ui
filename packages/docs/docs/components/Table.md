---
PROPS:
  - name: v-model
    type: object, array
    values: object, array
    description: 双向绑定组件的被选中数据
    default: null
    link: null
    usage: '#single-selected'

  - name: striped
    type: Boolean
    values: true,false
    description: 定义组件的条纹样式
    default: null
    link: null
    usage: '#striped'

  - name: vs-tr:data
    type: object
    values: object
    description: 定义表格「行」中要展示的数据
    default: null
    link: null
    usage: '#single-selected'

  - name: vs-tr:is-selected
    type: Boolean
    values: true,false
    description: 定义表格「行」中满足被选中的条件
    default: false
    link: null
    usage: '#single-selected'
    
  - name: vs-td:edit
    type: Boolean
    values: true,false
    description: 定义表格「列」的数据为可编辑
    default: false
    link: null
    usage: '#edit-data'

  - name: vs-th:sort
    type: Boolean
    values: true,false
    description: 定义表头「列」的数据为可排序
    default: false
    link: null
    usage: '#search-and-sort'

  - name: vs-tr:color
    type: String, lucid colors
    values: color, lucid colors
    description: 定义表格「行」的颜色
    default: null
    link: null
    usage: '#state'

SLOTS:
  - name: header
    type: slot
    values: null
    description: 定义组件头部区域内容
    default: null
    link: null
    usage: '#search-and-sort'

  - name: thead
    type: slot
    values: null
    description: 定义表头列
    default: null
    link: null
    usage: '#default'
    
  - name: tbody
    type: slot
    values: null
    description: 定义表中数据列`vs-tr`
    default: null
    link: null
    usage: '#default'
    
  - name: vs-tr:#expand
    type: slot
    values: null
    description: 定义数据点击展开中的内容
    default: null
    link: null
    usage: '#expand'
    
  - name: notFound
    type: slot
    values: null
    description: 定义组件无数据时的内容
    default: null
    link: null
    usage: '#search'

NEWS:
  - 函数
---

# 表格

<card>

## 默认

使用 `<vs-table>` 组件可以创建一个表格, `vs-table-tr` `vs-table-td` `vs-table-th` 组件用于定义 行 单元格 表头

此组件具有不同的逻辑，可以更好地管理数据，并根据需要进行更自由的自定义选项

<template v-slot:example>
  <table-default />
</template>

<template v-slot:template>

  ```html{1}
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th>
            Name
          </vs-th>
          <vs-th>
            Email
          </vs-th>
          <vs-th>
            Id
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in users"
          :data="tr"
        >
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
           {{ tr.email }}
          </vs-td>
          <vs-td>
           {{ tr.id }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## 条纹

使用 `striped` 属性为组件添加条纹样式

<template v-slot:example>
  <table-striped />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center examplex">
        <vs-table striped>
          <template #thead>
            <vs-tr>
              <vs-th>
                姓名
              </vs-th>
              <vs-th>
                邮箱
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## State <Badge type="danger" text="此属性有内部问题 请先不要使用"/>

使用 `state` 属性 为`vs-table-tr` 组件改变颜色

<template v-slot:example>
  <table-state />
</template>

<template v-slot:template>

  ```html{22-25}
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :danger="tr.id == 3"
              :success="tr.id == 5"
              :primary="tr.id == 8"
              :warn="tr.id == 9"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3}
    <script>
      export default {
        data:() => ({
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## 分页

通过在 `#footer` 插槽中 加入 `<vs-pagination>` 组件 可以为组件增加分页功能 

为了简化开发，您可以使用lucid函数 `$vs.getPage` 函数根据页面生成表格数据项目, `$vs.getLength` 还可以生成分页组件中的总页数

这种处理数据的方法是为了提高定制的自由度，同时又不损失实现的易用性

<template v-slot:example>
  <table-pagination />
</template>

<template v-slot:template>

  ```html{20,35}
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                姓名
              </vs-th>
              <vs-th>
                邮箱
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getPage(users, page, max)"
              :data="tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
          </template>
        </vs-table>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          page: 1,
          max: 3,
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## 单行选择

使用 `is-selected` 并配合 v-model 绑定当前选中的行

:::tip TIP
在 `tr` 中使用 `data` 属性很重要 因为这是要添加到v-model的数据
:::

<template v-slot:example>
  <table-selected />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-table v-model="selected">
          <template #thead>
            <vs-tr>
              <vs-th>
                姓名
              </vs-th>
              <vs-th>
                邮箱
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :is-selected="selected == tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>

        <span class="data">
          <pre>
            {{ selected ? selected : 'Select an item in the table' }}
          </pre>
        </span>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          selected: null,
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## 多选

使用 `v-model` 并传入数组对象 来绑定多选数据

对于这个功能 您可以使用lucid内置函数 `$vs.checkAll` 来处理点击表头的checkbox对执行函数

<template v-slot:example>
  <table-multiple />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center">
        <vs-table
          v-model="selected"
          >
          <template #thead>
            <vs-tr>
              <vs-th>
                <vs-checkbox
                  :indeterminate="selected.length == users.length" v-model="allCheck"
                  @change="selected = $vs.checkAll(selected, users)"
                />
              </vs-th>
              <vs-th>
                姓名
              </vs-th>
              <vs-th>
                邮箱
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :is-selected="!!selected.includes(tr)"
            >
              <vs-td checkbox>
                <vs-checkbox :val="tr" v-model="selected" />
              </vs-td>
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
        <span class="data">
          <pre>
    {{ selected.length > 0 ? selected : 'Select an item in the table' }}
          </pre>
        </span>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          allCheck: false,
          selected: [],
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 可展开

在 `vs-tr` 组件中使用 `#expand` 插槽可以为数据添加展开内容

<template v-slot:example>
  <table-expand />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                姓名
              </vs-th>
              <vs-th>
                邮箱
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>

              <template #expand>
                <div class="con-content">
                  <div>
                    <vs-avatar>
                      <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
                    </vs-avatar>
                    <p>
                      {{ tr.name }}
                    </p>
                  </div>
                  <div>
                    <vs-button flat icon>
                      <i class='bx bx-lock-open-alt' ></i>
                    </vs-button>
                    <vs-button flat icon>
                      Send Email
                    </vs-button>
                    <vs-button border danger>
                      Remove User
                    </vs-button>
                  </div>
                </div>
              </template>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          editActive: false,
          edit: null,
          editProp: '',
          search: '',
          allCheck: false,
          page: 1,
          max: 3,
          active: 0,
          selected: [],
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 编辑数据

通过 `vs-dialog` 组件 您可以为表格中的数据天际一个编辑框

<template v-slot:example>
  <table-edit />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                姓名
              </vs-th>
              <vs-th>
                邮箱
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
            >
              <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">
                {{ tr.name }}
              </vs-td>
              <vs-td edit @click="edit = tr, editProp = 'email', editActive = true">
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>

        <vs-dialog v-model="editActive">
          <template #header>
              Change Prop {{ editProp }}
          </template>
          <vs-input @keypress.enter="editActive = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
          <vs-select @change="editActive = false" block v-if="editProp == 'name'" placeholder="Select" v-model="edit[editProp]">
            <vs-option label="Vuesax" value="Vuesax">
              Vuesax
            </vs-option>
            <vs-option label="Vue" value="Vuejs">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="Javascript">
              Javascript
            </vs-option>
            <vs-option disabled label="Sass" value="Sass">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="Typescript">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="Webpack">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="Nodejs">
              Nodejs
            </vs-option>
          </vs-select>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          editActive: false,
          edit: null,
          editProp: {},
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## 搜索排序

您可以使用函数 `$vs.getSearch`  来处理搜索后的数据

::: tip TIP
函数 `$vs.getSearch` 需要两个参数：表格中的数据 搜索值
:::

#### 搜索

您可以使用函数 `$vs.sortData`  来处理排序

::: tip TIP
函数 `$vs.sortData` 需要三个参数：事件对象 表格中的数据 搜索的列
:::

<template v-slot:example>
  <table-search />
</template>

<template v-slot:template>

  ```html{3,4,5}
    <template>
      <div class="center">
        <vs-table>
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
                姓名
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
                邮箱
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(users, search)"
              :data="tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          search: '',
          users: [
            {
              "id": 1,
              "name": "斯蒂芬·库里",
              "username": "小学生",
              "email": "Curry@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "乔丹·普尔",
              "username": "茶乔丹",
              "email": "Poole@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "安德鲁·威金斯",
              "username": "嘴哥",
              "email": "Wiggins@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "克莱·汤普森",
              "username": "佛祖",
              "email": "Thompson@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "德雷蒙德·格林",
              "username": "追梦",
              "email": "Dranmen@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "凯尔·沃克",
              "username": "沃克",
              "email": "walker@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "凯文·德布劳内",
              "username": "丁丁",
              "email": "DeBruyne@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "贝尔纳多·席尔瓦",
              "username": "兔子",
              "email": "Silva@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "罗德里戈·埃尔南德斯·卡斯坎特",
              "username": "罗德里",
              "email": "Rodrigo@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "若昂·坎塞洛",
              "username": "坎塞洛",
              "email": "Cancelo@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## 组合使用

您可以自由的组合表格组件的各种功能

::: tip
创建此组件是为了在数据处理方面进行更自由的自定义。例如 如果需要服务器端分页 则不使用全局函数 `$vs.getSearch`。
:::

<template v-slot:example>
  <table-miscellaneous />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-table
          v-model="selected"
          >
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th>
                <vs-checkbox
                  :indeterminate="selected.length == users.length" v-model="allCheck"
                  @change="selected = $vs.checkAll(selected, users)"
                />
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
                Name
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
                Email
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)"
              :data="tr"
              :is-selected="!!selected.includes(tr)"
              not-click-selected
              open-expand-only-td
            >
              <vs-td checkbox>
                <vs-checkbox :val="tr" v-model="selected" />
              </vs-td>
              <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>

              <template #expand>
                <div class="con-content">
                  <div>
                    <vs-avatar>
                      <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
                    </vs-avatar>
                    <p>
                      {{ tr.name }}
                    </p>
                  </div>
                  <div>
                    <vs-button flat icon>
                      <i class='bx bx-lock-open-alt' ></i>
                    </vs-button>
                    <vs-button flat icon>
                      Send Email
                    </vs-button>
                    <vs-button border danger>
                      Remove User
                    </vs-button>
                  </div>
                </div>
              </template>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(users, search), max)" />
          </template>
        </vs-table>

        <vs-dialog v-model="editActive">
          <template #header>
              Change Prop {{ editProp }}
          </template>
          <vs-input @keypress.enter="editActive = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
          <vs-select @change="editActive = false" block v-if="editProp == 'name'" placeholder="Select" v-model="edit[editProp]">
            <vs-option label="Vuesax" value="Vuesax">
              Vuesax
            </vs-option>
            <vs-option label="Vue" value="Vuejs">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="Javascript">
              Javascript
            </vs-option>
            <vs-option disabled label="Sass" value="Sass">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="Typescript">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="Webpack">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="Nodejs">
              Nodejs
            </vs-option>
          </vs-select>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          editActive: false,
          edit: null,
          editProp: {},
          search: '',
          allCheck: false,
          page: 1,
          max: 5,
          active: 0,
          selected: [],
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</template>

</card>

<card>

## 函数 <Badge text="New"/>

我们用不一样的逻辑创建这个组件 可能不是很常见，首先，我们希望开发者能更加自由的定义内容，开发者可以根据自己想要创建的内容进行多种选择和定制，例如，在数据查询中，在您使用lucid函数将其强制执行之前，组件不会对其进行操作
``
系统提供了以下的全局函数供您使用

- $vs.checkAll: 校验所有数据 符合校验规则则保留数据 否则过滤掉
- $vs.sortData: 可定义数据的排序规则 或移动到其初始位置(为了保存此位置，向迭代对象添加了一个属性)
- $vs.getSearch: 返回数据中的搜索匹配项目
- $vs.getPage: 根据当前页数和每页最大显示条数返回数据匹配的数据
- $vs.getLength: 根据最每页最大显示条数返回数据总页数

</card>

<card>

## API

</card>
