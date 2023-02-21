<template>
  <div class="center">
    <vs-table>
      <template #header>
        <vs-input v-model="search" border placeholder="搜索" />
      </template>
      <template #thead>
        <vs-table-tr>
          <vs-table-th sort @click="users = $vs.sortData($event ,users, 'name')">
            姓名
          </vs-table-th>
          <vs-table-th sort @click="users = $vs.sortData($event ,users, 'email')">
            邮箱
          </vs-table-th>
          <vs-table-th sort @click="users = $vs.sortData($event ,users, 'id')">
            Id
          </vs-table-th>
        </vs-table-tr>
      </template>
      <template #tbody>
        <vs-table-tr
          :key="i"
          v-for="(tr, i) in $vs.getSearch(users, search)"
          :data="tr"
        >
          <vs-table-td>
            {{ tr.name }}
          </vs-table-td>
          <vs-table-td>
           {{ tr.email }}
          </vs-table-td>
          <vs-table-td>
           {{ tr.id }}
          </vs-table-td>
        </vs-table-tr>
      </template>
    </vs-table>
  </div>
</template>
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
<style lang="stylus">
</style>
