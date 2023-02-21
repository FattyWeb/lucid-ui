<template>
  <div class="center">
    <vs-table>
      <template #thead>
        <vs-table-tr>
          <vs-table-th>
            姓名
          </vs-table-th>
          <vs-table-th>
            邮箱
          </vs-table-th>
          <vs-table-th>
            Id
          </vs-table-th>
        </vs-table-tr>
      </template>
      <template #tbody>
        <vs-table-tr
          :key="i"
          v-for="(tr, i) in users"
        >
          <vs-table-td edit @click="edit = tr, editProp = 'name', editActive = true">
            {{ tr.name }}
          </vs-table-td>
          <vs-table-td edit @click="edit = tr, editProp = 'email', editActive = true">
           {{ tr.email }}
          </vs-table-td>
          <vs-table-td>
           {{ tr.id }}
          </vs-table-td>
        </vs-table-tr>
      </template>
    </vs-table>

    <vs-dialog v-model="editActive">
      <template #header>
          更改属性 {{ editProp }}
      </template>
      <vs-input block @keypress.enter="editActive = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
      <vs-select @change="editActive = false" block v-if="editProp == 'name'" placeholder="Select" v-model="edit[editProp]">
        <vs-option label="Lucid" value="Lucid">
          Lucid
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
<style lang="stylus">
</style>
